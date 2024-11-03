import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCarts from "../../Hooks/useCarts";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const CheckOut = () => {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [loading, setLoading] = useState(false); // Loading state
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [carts, refetch] = useCarts();

  const totalPrice = carts.reduce((total, item) => total + item.price, 0);
  console.log(totalPrice);

  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        })
        .catch((error) =>
          console.error("Error creating payment intent:", error)
        );
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    setLoading(true);
    setError("");

    const { error: paymentError, paymentMethod } =
      await stripe.createPaymentMethod({
        type: "card",
        card,
      });

    if (paymentError) {
      console.log("Payment error", paymentError);
      setError(paymentError.message);
      setLoading(false);
      return;
    }

    console.log("Payment method", paymentMethod);

    // Confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log("Confirm error", confirmError);
      setError(confirmError.message);
      setLoading(false);
    } else {
      console.log("Payment intent", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("Transaction ID:", paymentIntent.id);
        setTransactionId(paymentIntent.id);
        setError("");

        // now save the payment to database
        const payment = {
          email: user?.email,
          price: totalPrice,
          transactionId: paymentIntent.id,
          date: new Date(), // utc data convert use momemnt js
          cartIds: carts.map((item) => item._id),
          menuItemIds: carts.map((item) => item.menuId),
          status: "pending",
        };

        const res = await axiosSecure.post("/payments", payment);
        console.log("payment save", res.data);
        refetch();
        if (res?.data?.paymentResult?.insertedId) {
          Swal.fire({
            title: "Payment Success",
            icon: "success",
          });
        }
      }
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
          <h1 className="text-4xl font-semibold text-center my-10">Payment</h1>
        <div className="border border-gray-300 rounded p-2">
          {" "}
          {/* Wrapper with border */}
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button
          className="btn btn-primary mt-10 mb-2 w-full"
          type="submit"
          disabled={!stripe || !clientSecret || loading}
        >
          {loading ? "Processing..." : "Pay"}
        </button>
        <p className="text-red-500">{error}</p>
        {transactionId && (
          <p className="text-green-500">Your Transaction ID: {transactionId}</p>
        )}
      </form>
    </div>
  );
};

export default CheckOut;

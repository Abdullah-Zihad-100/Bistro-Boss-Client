import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../Components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";

// TODO: Add publicsable key 
const stripePromise=loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
const Payment = () => {
    return (
        <div className="w-5/6 mx-auto mt-20">
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOut></CheckOut>
                </Elements>
            </div>
        </div>
    )
}
export default Payment;
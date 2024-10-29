import img from "../assets/home/slide5.jpg";
const RecommendedItem = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-10 w-5/6 mx-auto">
      <div className="card bg-stone-100 shadow-xl">
        <img
          src={img}
          alt="Shoes"
          className=" object-cover  h-[300px] rounded-t-xl w-full"
        />

        <div className="card-body items-center text-center">
          <h2 className="card-title font-semibold">Caeser Salad</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            fugiat! Vel, autem doloremque?
          </p>
          <div className="card-actions ">
            <button className="mt-4 px-4 py-3 text-yellow-600 border-b-4 border-yellow-600 bg-transparent rounded-lg hover:bg-black hover:text-yellow-600 transition-all">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-stone-100 shadow-xl">
        <img
          src={img}
          alt="Shoes"
          className=" rounded-t-xl object-cover w-full h-[300px]"
        />

        <div className="card-body items-center text-center">
          <h2 className="card-title font-semibold">Caeser Salad</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            fugiat! Vel, autem doloremque?
          </p>
          <div className="card-actions">
            <button className="mt-4 px-4 py-3 text-yellow-600 border-b-4 border-yellow-600 bg-transparent rounded-lg hover:bg-black hover:text-yellow-600 transition-all">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <div className="card bg-stone-100 shadow-xl">
        <img
          src={img}
          alt="Shoes"
          className=" rounded-t-xl object-cover w-full h-[300px]"
        />

        <div className="card-body items-center text-center">
          <h2 className="card-title font-semibold">Caeser Salad</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
            fugiat! Vel, autem doloremque?
          </p>
          <div className="card-actions">
            <button className="mt-4 px-4 py-3 text-yellow-600 border-b-4 border-yellow-600 bg-transparent rounded-lg hover:bg-black hover:text-yellow-600 transition-all">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecommendedItem;

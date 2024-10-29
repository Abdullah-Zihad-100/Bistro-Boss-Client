import SectionTitle from "./SectionTitle";
import featuredImg from "../assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="relative pt-5 bg-center bg-fixed bg-cover"
      style={{ backgroundImage: `url(${featuredImg})` }}
    >
      {/* Black overlay to improve text readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10">
        <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />
        <div className="md:flex justify-center items-center py-8 px-16">
          <div>
            <img
              src={featuredImg}
              alt="Featured Menu"
              className="w-full h-auto"
            />
          </div>
          <div className="md:ml-10 text-white">
            <p>March 20, 2023</p>
            <p className="text-base uppercase">WHERE CAN I GET SOME?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="mt-4 px-4 py-3 text-white border-b-4 border-white bg-transparent rounded-lg hover:bg-white hover:text-black transition-all">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

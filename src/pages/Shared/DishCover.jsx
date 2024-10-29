import { Parallax } from "react-parallax";


const DishCover = ({ coverImg, subHeading, heading }) => {
  return (

      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={coverImg}
        bgImageAlt="the dog"
        strength={-200}
    >    
    <div>
      <div
        className="hero h-[60vh]"
        style={{
          // backgroundImage: `url(${coverImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-50"></div>
        <div className="hero-content text-neutral-content text-center  bg-black/40 w-3/4 h-2/4 rounded">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-semi-bold uppercase">{heading}</h1>
            <p className="mb-5 uppercase">{subHeading}</p>
          </div>
        </div>
      </div>
    </div>
    </Parallax>
  );
};
export default DishCover;

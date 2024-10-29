import { Link } from "react-router-dom";
import DishCover from "../pages/Shared/DishCover";
import MenuItems from "../pages/Shared/MenuItems";

const MenuCategory = ({items,coverImg,heading,subHeading}) => {

    return (
      <div>
        {heading && (
          <DishCover
            coverImg={coverImg}
            heading={heading}
            subHeading={subHeading}
          />
        )}
        <div className="grid md:grid-cols-2 grid-cols-1 justify-center gap-5 my-10">
          {items?.map((item) => (
            <MenuItems key={item._id} item={item} />
          ))}
        </div>
        <Link to={`/our-shop/${heading}`}>
          <button className="mt-4 px-4 py-3  border-b-4 border-black bg-transparent rounded-lg hover:bg-white hover:text-gray-500 font-semibold transition-all mx-auto text-center flex justify-center">
            ORDER YOUR FAVOURITE FOOD
          </button>
        </Link>
      </div>
    );
}
export default MenuCategory;
import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "../../Components/MenuCategory";

const PopularMenu = () => {
const [menu]=useMenu()

const Popular=menu?.filter(item=> item.category==="popular");

console.log(Popular);
return (
    <div className="w-5/6 mx-auto">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      />
   <MenuCategory items={Popular}/>
        {/* <button className="mt-4 px-4 py-3  border-b-4 border-black bg-transparent rounded-lg hover:bg-white hover:text-gray-500 font-semibold transition-all mx-auto text-center flex justify-center">
          VIEW FULL MENU
        </button> */}
    </div>
  );
};
export default PopularMenu;

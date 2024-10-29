import { Helmet } from "react-helmet-async";
import Cover from "./Shared/Cover";
import coverImg from "../assets/menu/banner3.jpg";
import PopularMenu from "./Shared/PopularMenu";
import DishCover from "./Shared/DishCover";
import useMenu from "../Hooks/useMenu";
import SectionTitle from "../Components/SectionTitle";
import MenuCategory from "../Components/MenuCategory";
import dessertImg from "../assets/menu/dessert-bg.jpeg"
import soupImg from "../assets/menu/soup-bg.jpg"
import saladImg from "../assets/menu/salad-bg.jpg"
import pizzaImg from "../assets/menu/pizza-bg.jpg"
const OurMenu = () => {
  const [menu] = useMenu();
  const offered = menu?.filter((item) => item.category === "offered");
  const soup = menu?.filter((item) => item.category === "soup");
  const salad = menu?.filter((item) => item.category === "salad");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const desserts = menu?.filter((item) => item.category === "dessert");
//   const drinks = menu?.filter((item) => item.category === "drinks");
  return (
    <div className="space-y-8">
      <Helmet title="Bistro Boss | Menu" />
      <Cover
        coverImg={coverImg}
        heading={"OUR MENU"}
        subHeading={"Would you like to try this dish"}
      />
      {/* <PopularMenu/>
            <DishCover coverImg={coverImg} heading={"OUR MENU"} subHeading={"Would you like to try this dish"}/>
            <PopularMenu/>
            */}
      <div className="mx-auto w-5/6">
        <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"} />
        <MenuCategory items={offered} />
      </div>

      <div className="mx-auto w-5/6">
        <MenuCategory
          items={desserts}
          coverImg={dessertImg}
          heading={"dessert"}
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </div>
      <div className="mx-auto w-5/6">
        <MenuCategory
          items={pizza}
          coverImg={pizzaImg}
          heading={"pizza"}
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </div>
      <div className="mx-auto w-5/6">
        <MenuCategory
          items={salad}
          coverImg={saladImg}
          heading={"salad"}
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </div>
      <div className="mx-auto w-5/6">
        <MenuCategory
          items={soup}
          coverImg={soupImg}
          heading={"soup"}
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </div>
    </div>
  );
};
export default OurMenu;

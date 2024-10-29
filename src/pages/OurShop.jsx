import Cover from "./Shared/Cover";
import coverImg from "../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../Hooks/useMenu";
import { useState } from "react";
import OrderTab from "../Components/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const OurShop = () => {
  const categories = ["salad", "{pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  console.log(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const soup = menu?.filter((item) => item.category === "soup");
  const salad = menu?.filter((item) => item.category === "salad");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const desserts = menu?.filter((item) => item.category === "dessert");
  const drinks = menu?.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet title="Bistro Boss | Shop"/>
      <Cover
        coverImg={coverImg}
        heading={"OUR SHOP"}
        subHeading={"WOUlD YOU LIKE TO TRY OUR DISH"}
      />

      <div>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className={"font-semibold text-center py-4 "}>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soup</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>

          <TabPanel>
            <OrderTab category={salad} />
          </TabPanel>
          <TabPanel>
            <OrderTab category={pizza} />
          </TabPanel>
          <TabPanel>
            <OrderTab category={soup} />
          </TabPanel>
          <TabPanel>
            <OrderTab category={desserts} />
          </TabPanel>
          <TabPanel>
            <OrderTab category={drinks} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};
export default OurShop;

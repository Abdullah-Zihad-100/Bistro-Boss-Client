import { Helmet } from "react-helmet-async";
import CarouselBanner from "../Components/CarouselBanner";
import Categorys from "../Components/Categorys";
import ContactNum from "../Components/ContactNum";
import Featured from "../Components/Featured";
import RecommendedItem from "../Components/RecommendedItem";
import SectionHome1 from "../Components/SectionHome1";
import Testimonials from "../Components/Testimonials";
import Navber from "./Shared/Navber";
import PopularMenu from "./Shared/PopularMenu";

const Home = () => {
  return (
    <div>
      <Helmet title="Bistro Boss | Home"/>
      <div className="relative">
      
        <CarouselBanner />
      </div>
      <Categorys />
   <SectionHome1/>
      <PopularMenu />

<ContactNum/>
<RecommendedItem/>
      <Featured/>
      <Testimonials/>

    </div>
  );
};
export default Home;

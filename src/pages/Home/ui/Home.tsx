import HomeSection from "./sections/HomeSection";
import WeDo from "./sections/WeDo";
import OurWorks from "./sections/OurWorks";
import Pricing from "./sections/Pricing";
import Questions from "./sections/Questions";
import "./styles/_index.scss";
export const Home = () => {
  return (
    <>
      <HomeSection />
      <WeDo />
      <OurWorks />
      <Pricing />
      <Questions />
    </>
  );
};


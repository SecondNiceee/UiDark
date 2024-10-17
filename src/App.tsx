
import Header from "./components/Header";
import Home from "./components/Home";
import OurWorks from "./components/OurWorks";
import Pricing from "./components/Pricing";
import Questions from "./components/Questions";
import Rating from "./components/Rating";
import WeDo from "./components/WeDo";
import "./scss/_index.scss"
const App = () => {
  return (
    <>
      <div className="wrapper">
        <button>Кнока</button>
        <Header  />
        <Home />
        <WeDo />
        <OurWorks />
        <Pricing />
        <Questions />

      </div>
    </>
  );
};

export default App;


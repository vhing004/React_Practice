import Accordion from "./components/Accordion";
import RandomColor from "./components/randomColor";
import RatingStar from "./components/ratingStar";
import ImageSlide from "./components/imageSlide";

function App() {
  return (
    <div className="App">
      <Accordion />
      <RandomColor />
      <RatingStar />
      <ImageSlide
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;

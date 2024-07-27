import Accordion from "./components/Accordion";
import RandomColor from "./components/randomColor";
import RatingStar from "./components/ratingStar";
import ImageSlide from "./components/imageSlide";
import LoadMoreData from "./components/loadMoreData";
import TreeView from "./components/treeView";
import data from "./components/treeView/data";
import QrCode from "./components/qrCode";

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
      <LoadMoreData />
      <TreeView data={data} />
      <QrCode />
    </div>
  );
}

export default App;

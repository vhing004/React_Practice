import { useEffect, useState } from "react";
import "./scroll.css";

function IndicatorScroll({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [scroll, setScroll] = useState(0);

  //   get Api
  const showApi = async (getUrl) => {
    try {
      setLoading(true);
      const reponse = await fetch(getUrl);
      const api = await reponse.json();
      if (api) {
        setLoading(false);
        setData(api.products);
      }
    } catch (e) {
      console.log(error);
      setError(e);
    }
  };

  //   call function showApi
  useEffect(() => {
    showApi(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  //   scroll
  const scrollIndicator = () => {
    const top = document.documentElement.scrollTop; //document ở đây chính là tag html "scrollTop" là cuộn lên trên bao nhiêu px.
    const height =
      document.documentElement.scrollHeight - //scrollHeight là độ dài của html
      document.documentElement.clientHeight; // clientHeight là độ dài 1 trang html.
    // console.table(
    //   document.documentElement.scrollTop,
    //   top,
    //   document.documentElement.scrollHeight,
    //   document.documentElement.clientHeight,
    //   height
    // );
    setScroll((top / height) * 100);
  };

  //   handle function scrollIndicator
  useEffect(() => {
    window.addEventListener("scroll", scrollIndicator);
    return () => {
      window.removeEventListener("scroll", scrollIndicator);
    };
  });

  //   loading
  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  //   error
  if (error) {
    return <div>Error ocured {error}</div>;
  }

  return (
    <div style={{ height: "1862px", overflow: "hidden" }}>
      <div className="scroll">
        <h1>Custom Scroll Indicator Bar</h1>
        <div className="indicator">
          <div className="indicator_bar" style={{ width: `${scroll}%` }}></div>
        </div>
      </div>
      <div className="data-api">
        {data &&
          data.length &&
          data.map((item) => <div key={item.id}>{item.title}</div>)}
      </div>
    </div>
  );
}

export default IndicatorScroll;

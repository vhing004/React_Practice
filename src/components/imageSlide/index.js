import { useEffect, useState } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import classNames from "classnames/bind";
import css from "./imageSlide.module.scss";

const cx = classNames.bind(css);

function ImageSldie({ url, page, limit }) {
  const [images, setImages] = useState([]);
  const [slide, setSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // function fetch api
  const fetchAPI = async (getURL) => {
    try {
      setLoading(true);
      const response = await fetch(`${getURL}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setLoading(false);
        setImages(data);
      }
    } catch (e) {
      setError(e.error);
    }
  };

  //   next
  const handleNext = () => {
    setSlide(slide === images.length - 1 ? 0 : slide + 1);
  };

  // prev
  const handlePrev = () => {
    setSlide(slide === 0 ? images.length - 1 : slide - 1);
  };

  // get api from "App.js"
  useEffect(() => {
    if (url !== "") fetchAPI(url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  //   loading
  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }
  //   error
  if (error !== null) {
    return <div>Error orcured ! {error}</div>;
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <BsArrowLeftCircleFill onClick={handlePrev} className={cx('arrow')} />
        {images && images.length
          ? images.map((img, index) => (
              <img
                key={index}
                src={img.download_url}
                alt={img.author}
                className={cx(slide === index ? "active" : "inactive")}
              />
            ))
          : null}
        <BsArrowRightCircleFill onClick={handleNext} className={cx('arrow')} />
        <div className={cx("dots")}>
          {images && images.length
            ? images.map((_, index) => (
                <span
                  key={index}
                  className={cx(slide === index ? "activeDot" : "inActiveDot")}
                  onClick={() => setSlide(index)}
                ></span>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}

export default ImageSldie;

import { FaStar } from "react-icons/fa";
import css from "./ratingStar.module.scss";
import classNames from "classnames/bind";
import { useState } from "react";

const cx = classNames.bind(css);

function RatingStar() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (currentIndex) => {
    setRating(currentIndex);
  };
  const handleMouseMove = (currentIndex) => {
    setHover(currentIndex);
  };
  const handleMouseLeave = () => {
    setHover(rating);
  };

//   useEffect(() => {
//     console.log(hover, rating);
//   }, [hover, rating]);
  return (
    <div className={cx("wrapper")}>
      {[...Array(10)].map((_, index) => {
        index += 1; // ở đây index sẽ từ 1 r tăng

        // console.log(index);

        return (
          <FaStar
            key={index}
            className={cx(index <= (rating || hover) ? "active" : "inactive")}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseMove(index)}
            onMouseLeave={() => handleMouseLeave()}
            size={100}
          />
        );
      })}
    </div>
  );
}

export default RatingStar;

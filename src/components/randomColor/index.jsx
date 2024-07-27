import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import style from "./randomColor.module.scss";

const cx = classNames.bind(style);

function RandomColor() {
  const [color, setColor] = useState("#000");
  const [typeColor, setTypeColor] = useState("hex");

  const handleRandomColor = (arr) => {
    return Math.floor(Math.random() * arr);
  };

  const handleHexColor = () => {
    const hexCode = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hex = "#";

    for (let i = 0; i < 6; i++) {
      hex += hexCode[handleRandomColor(hexCode.length)];
    }
    // console.log(hex);
    setColor(hex);
  };

  const handleRgbColor = () => {
    const r = handleRandomColor(256);
    const g = handleRandomColor(256);
    const b = handleRandomColor(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  useEffect(() => {
    if (typeColor === "rgb") {
      handleRgbColor();
    } else {
      handleHexColor();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeColor]);
  return (
    <div
      className={cx("wrapper")}
      style={{
        background: color,
      }}
    >
      <button onClick={() => setTypeColor("hex")}>Hex</button>
      <button onClick={() => setTypeColor("rgb")}>Rgb</button>
      <button onClick={typeColor === "hex" ? handleHexColor : handleRgbColor}>
        Random Color
      </button>
      <div className={cx("show")}>
        <h3>{typeColor === "rgb" ? "rgb" : "hex"} </h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}

export default RandomColor;

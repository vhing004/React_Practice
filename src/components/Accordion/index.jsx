import { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Accordion.module.scss";
import data from "./data";

const cx = classNames.bind(styles);

function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multi, setMulti] = useState([]);
  // const [multi, setMulti] = useState([]);

  const handleSelected = (id) => {
    setSelected(id === selected ? null : id);
    // setSelected(id === selected ? id : null);
    // console.table(selected);
  };

  const handleMultiSelection = (id) => {
    const cpyMulti = [...multi];
    const findIndex = cpyMulti.indexOf(id);

    // console.log(findIndex, cpyMulti);

    if (findIndex === -1) cpyMulti.push(id);
    else cpyMulti.splice(findIndex, id);

    setMulti(cpyMulti);
  };

  // console.log(enableMulti);

  // useEffect(() => {
  //   console.group(selected);
  // }, [selected]);

  return (
    <div className={cx("wrapper")}>
      <button
        onClick={() => setEnableMulti(!enableMulti)}
        className={cx("enable")}
      >
        {enableMulti ? "Select multi question" : "Select a question"}
      </button>
      <div className={cx("accordion")}>
        {data && data.length > 0
          ? data.map((item) => (
              <div key={item.id} className={cx("accordion_parent")}>
                <div
                  onClick={
                    enableMulti
                      ? () => handleMultiSelection(item.id)
                      : () => handleSelected(item.id)
                  }
                  className={cx("accordion_item")}
                >
                  <h3>{item.question}</h3>
                  <span>+</span>
                </div>
                {enableMulti
                  ? multi.indexOf(item.id) !== -1 && (
                      <div className={cx("accordion_desc")}>{item.answer}</div>
                    )
                  : selected === item.id && (
                      <div className={cx("accordion_desc")}>{item.answer}</div>
                    )}
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Accordion;

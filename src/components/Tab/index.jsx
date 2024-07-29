import data from "./tabData";
import "./tab.css";
import { useState } from "react";

function Tabs() {
  const [tab, setTab] = useState(1);

  return (
    <div className="body">
      <div className="tabs">
        {data.map((item, index) => (
          <div
            key={index}
            onClick={() => setTab(index)}
            className={`tabs_item ${tab === index ? "active" : ''}`}
          >
            {item.label}
          </div>
        ))}
      </div>
      <div className="content">
      {data.map((item, index) => (
          <div
            key={index}
            onClick={() => setTab(index)}
            className={`content_item ${tab === index ? "active" : ''}`}
          >
            {item.description}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tabs;

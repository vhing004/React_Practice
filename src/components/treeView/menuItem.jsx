import { useState } from "react";
import MenuList from "./menuList";
import { FaMinus, FaPlus } from "react-icons/fa";


// function MenuItem({ item }) {
//   console.log(item);
//   const [currentChildren, setCurrentChildren] = useState({});

//   const handleToggleChildren = (getChildren) => {
//     setCurrentChildren({
//       ...currentChildren,
//       [getChildren]: !currentChildren[getChildren],
//     });
//   };

//   return (
//     <ul>
//       <li className={cx("menu_item")}>
//         <p>{item.label}</p>
//         {item && item.children ? (
//           <span onClick={() => handleToggleChildren(item.label)}>
//             {currentChildren[item.label] ? (
//               <FaMinus size={20} />
//             ) : (
//               <FaPlus size={20} />
//             )}
//           </span>
//         ) : null}
//       </li>
//       <li className={cx("menu_item")}>
//         {item && item.children && currentChildren[item.label] ? (
//           <MenuList list={item.children} />
//         ) : null}
//       </li>
//     </ul>
//   );
// }

function MenuItem({ item }) {
  // console.log(item);
  const [expanded, setExpanded] = useState(false);

  const handleToggleChildren = item.children && item.children.length > 0;

  return (
    <ul>
      <li
        onClick={() => setExpanded(!expanded)}
        style={{ display: "flex", alignItems: "center", gap: "10px" }}
      >
        <span style={{ fontSize: "20px" }}>{item.label}</span>
        {handleToggleChildren && (
          <span>{expanded ? <FaMinus /> : <FaPlus />}</span>
        )}
      </li>
      <li style={{ paddingLeft: "20px" }}>
        {handleToggleChildren && expanded && <MenuList list={item.children} />}
      </li>
    </ul>
  );
}
export default MenuItem;

import classNames from "classnames/bind";
import css from "./TreeView.module.scss";
import MenuList from "./menuList";

const cx = classNames.bind(css);

//--------------------------- CASE 1 ------------------------------:
function TreeView({ data }) {
  return (
    <div className={cx("menu")}>
      <MenuList list={data} />
    </div>
  );
}

//  -------------------------- CASE 2 ------------------------------:
// import { useState } from "react";
// import "./TreeView.css";

// function TreeView({ data }) {
//   const TreeNode = ({ content }) => {
//     console.log(content.children);

//     const [expanded, setExpanded] = useState(false);

//     // biến kiểm tra children
//     const hasChildren = content.children && content.children.length > 0;

//     return (
//       <div className="tree-node">
//         <div className="node-label" onClick={() => setExpanded(!expanded)}>
//           {content.label}
//           {hasChildren && (
//             <span className="toggle-icon">{expanded ? "▼" : "▶"}</span>
//           )}
//         </div>
//         {hasChildren && expanded && (
//           <div className="node-children">
//             {content.children.map((childrenNode) => (
//               <TreeNode key={childrenNode.label} content={childrenNode} />
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };

//   return (
//     <div className="tree-view">
//       {data.map((item) => (
//         <TreeNode key={item.label} content={item} />
//       ))}
//     </div>
//   );
// }

export default TreeView;

import MenuItem from "./menuItem";
// import classNames from "classnames/bind";
// import css from "./TreeView.module.scss";

// const cx = classNames.bind(css);

// function MenuList({ list }) {
//   // console.log(list);
//   return (
//     <ul className={cx("menu_list")}>
//       {list && list.length
//         ? list.map((listItem, index) => (
//             <MenuItem key={index} item={listItem} />
//           ))
//         : null}
//     </ul>
//   );
// }

function MenuList({ list }) {
  console.log(list);
  return (
    <div>
      {list &&
        list.length &&
        list.map((item, index) => <MenuItem key={index} item={item} />)}
    </div>
  );
}
export default MenuList;

import classNames from "classnames/bind";
import css from "./loadMore.module.scss";
import { useEffect, useState } from "react";

const cx = classNames.bind(css);

function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [disable, setDisable] = useState(false);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  // function
  const fetchApi = async () => {
    try {
      setLoading(true);

      const reponse = await fetch(
        `https://dummyjson.com/products?limit=5&skip=${
          count === 0 ? 0 : count * 10
        }`
      );
      const data = await reponse.json();

      if (data && data.products) {
        setLoading(false);
        console.log(data, "data");
        // setProduct(data.products);
        // setProduct((prevData) => [...prevData, ...data.products]);
        setProducts((prevData) => {
          const newProducts = [...prevData, ...data.products];
          // nếu có phần tử trùng id thì chỉ giữ 1 phần tử lại.
          const uniqueProducts = newProducts.filter(
            (product, index, self) =>
              index === self.findIndex((p) => p.id === product.id)
          );
          return uniqueProducts;
        });
      }
    } catch (e) {
      setLoading(true);
      console.log(e);
    }
  };

  // gọi hàm
  useEffect(() => {
    fetchApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  // set trạng thái disable
  useEffect(() => {
    if (products.length === 50) {
      setDisable(true);
    }
  }, [products]);

  //   loading
  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  return (
    <div className={cx("wrapper")}>
      <div className={cx("products")}>
        {products && products.length
          ? products.map((item) => (
              <div key={item.id} className={cx("product")}>
                <img src={item.thumbnail} alt={item.title} />
                <h3>{item.title}</h3>
              </div>
            ))
          : null}
      </div>
      <button
        disabled={disable}
        onClick={() => {
          setCount(count + 1);
        }}
        className={cx("btn-more")}
      >
        Load more product
      </button>
      {disable ? "Ban da xem 50 san pham" : null}
    </div>
  );
}

export default LoadMoreData;

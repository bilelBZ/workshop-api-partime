import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log({ msg: "list of products", products });

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      {loading ? (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
          alt="details"
        />
      ) : (
        products.map((product) => <ProductCard product={product} />)
      )}
    </div>
  );
}

export default ProductList;

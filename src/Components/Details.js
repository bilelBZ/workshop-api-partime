import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
function Details() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log({ msg: "one product", product });
  return (
    <div>
      {loading ? (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"
          alt="details"
        />
      ) : (
        <div>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          {/* <h3>{product.rating.rate}</h3> */}
          <h4>{product.price}</h4>
        </div>
      )}
    </div>
  );
}

export default Details;

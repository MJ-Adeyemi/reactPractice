import React, { useEffect, useState } from "react";
import axios from "axios";
const Api = () => {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setCount(() => count + 1);
    }, 2000);
  }, []);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
        setLoading(true)
        console.log(response.data.products);
      };
      fetchData();
    } catch (error) {
      setError(error.message || "An error occur.");
      setLoading(false)
    }
  }, []);
  if(loading) {
    <p>Loading....</p>
  }
  return (
    <>
      {/* <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click</button> */}
      {products.map((item, index) => (
        <div key={index}>
          <p>{item.brand}</p>
          <p>{item.description}</p>
          <img src={item.images} alt="Product" />
        </div>
      ))}
    </>
  );
};

export default Api;

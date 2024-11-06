import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([])

  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get(`https://dummyjson.com/products/${id}`);
        setProducts(response.data);
        console.log(response.data);
      };
      fetchData();
    } catch (error) {
      setError(error.message || "An error occur.");
    }
  }, [id]);
  return (
    <>
      <div key={products.id}>
        <p>{products.brand}</p>
        <p>{products.description}</p>
        <img src={products.images} alt="Product" />
      </div>
    </>
  );
};

export default ProductDetails;

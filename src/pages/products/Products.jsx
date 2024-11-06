import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
 const navigate = useNavigate()
 const hanleNavigate =(id)=>{
    navigate(`/products/${id}`)
 }
  useEffect(() => {
    try {
      const fetchData = async () => {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products);
        console.log(response.data.products);
      };
      fetchData();
    } catch (error) {
      setError(error.message || "An error occur.");
    }
  }, []);
  return (
    <>
      {products.map((item) => (
        <div key={item.id} onClick={()=>hanleNavigate(item.id)}>
          {/* <Link to={`/products/${item.id}`}> */}
            <p>{item.brand}</p>
            <p>{item.description}</p>
            <img src={item.images} alt="Product" />
          {/* </Link> */}
        </div>
      ))}
    </>
  );
};

export default Products;

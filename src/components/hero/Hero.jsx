import React from "react";
import "./Hero.css";
import Laptop from "../../../public/laptop.jpg";
import Button from "../button/Button";

const Hero = () => {
  const data = [
    {
      name: "Ade",
      age: "12",
      school: "OIC",
    },
    {
      name: "Ade",
      age: "12",
      school: "OIC",
    },
    {
      name: "Ade",
      age: "12",
      school: "OIC",
    },
    {
      name: "Ade",
      age: "12",
      school: "OIC",
    },
    {
      name: "Ade",
      age: "12",
      school: "OIC",
    },
  ];
  return (
    <>
      {data.map((item, index) => (
        <div className="card" style={{ width: "18rem" }} key={index}>
          <img src={Laptop} className="card-img-top" alt="laptop" />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.school}</p>
            <a href="#" className="btn btn-primary">
              {item.age}
            </a>
          </div>
          <Button title="Click me" />
          <Button title="Press" />
          <Button title="Add to cart" />
        </div>
      ))}
    </>
  );
};

export default Hero;

import React, { useState } from "react";

const AboutHook = () => {
  // const [count, setCount] = useState(0)
  // const click =() => {
  //     setCount(count => count + 1)
  // }
  const [age, setAge] = useState(18)
  if(age < 15) {
    console.log('Not eligible to vote');
  }else {
    console.log('You are eligible to vote.');
  }
  const data = [
    { name: "Toyota", price: "$50", isAvailable: true },
    { name: "Venza", price: "$20", isAvailable: false },
    { name: "Mazda", price: "$10", isAvailable: true },
  ];
  const [cars, setCars] = useState({
    name: "Toyota",
    price: "$50",
    isAvailable: true,
  });
  const [modal, setModal] = useState(false);
  const [color, setColor] = useState("Red");
  const changeColor = () => {
    setColor("Blue");
  };
  return (
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>{item.isAvailable == true ? "True" : "False"}</p>
        </div>
      ))}
      <p>{cars.name}</p>
      {/* <p>{count}</p> */}
      {/* <button onClick={click}>Count</button> */}
      <p>{color}</p>
      <button onClick={changeColor}>Change color</button>
      <button onClick={() => setColor("Green")}>Change</button>
      <p>{modal}</p>
      <button onClick={() => setModal(true)}>Greet</button>
      {modal && <div>Congratulations</div>}
    </div>
  );
};

export default AboutHook;

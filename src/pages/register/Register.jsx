import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const handleSubmit = () =>{
    const value = {name, username, number}
    localStorage.setItem(name, JSON.stringify(value))
  }
  return (
    <>
      <form action="">
        <h1>Register</h1>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="border border-black "
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Username</label>
          <input
            type="text"
            className="border border-black "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Phone number</label>
          <input
            type="number"
            className="border border-black "
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default Register;

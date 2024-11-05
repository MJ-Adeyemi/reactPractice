import React, { useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");
  const [form, setForm] = useState(false);
  const handleSubmit = () => {
    alert('Good')
    setForm(true);
  };
  return (
    <div>
      <form action="" id="form" onSubmit={handleSubmit}>
        <p>{input}</p>
        <label htmlFor="">Name</label>
        <input
          type="text"
          placeholder="Input your name"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;

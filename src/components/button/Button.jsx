import React from "react";

const Button = (props) => {
    const handleSubmit = () => {
      alert("Good afternoon");
    };
  return (
    <div>
      <button
        onClick={handleSubmit}
        className="bg-red-500 text-white"
        // style={{ background: "red", color: "white" }}
      >
        {props.title}
      </button>
    </div>
  );
};

export default Button;

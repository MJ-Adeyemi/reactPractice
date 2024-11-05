import React from "react";
import Laptop from "../../assets/laptop.jpeg";
import { Link } from "react-router-dom";
import { FaBaby, FaBasketShopping } from "react-icons/fa6";

const Navbar = () => {
  return (
    <>
      <nav className="w-full flex justify-between">
        <FaBasketShopping />
        <div>
          <img src={Laptop} alt="" className="w-12 h-12 object-cover" />
          <h1>Navbar</h1>
        </div>
        <ul className="flex gap-5">
          <li>
            <Link to="/" style={{ color: "red" }}>
              <FaBaby />
              Home
            </Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";
import Kinbechlogo from "../../src/images/kinbechLogo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 my-3">
      <img src={Kinbechlogo} alt="kinbech logo" className="w-36"/>
      <div className="flex gap-6">
        <Link to="/login" className="text-lg">Login</Link>
        <Link to="/signup" className="text-lg">Signup</Link>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-2 my-3">
      <h1 className="font-bold text-2xl">KinBech</h1>
      <div className="flex gap-6">
        <Link to="/login" className="text-lg">Login</Link>
        <Link to="/signup" className="text-lg">Signup</Link>
      </div>
    </div>
  );
};

export default Navbar;

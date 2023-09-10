import React from "react";
import Nav from "../components/Nav";
import {FcGoogle} from 'react-icons/fc'

const Login = () => {
  return (
    <>
      <Nav />
      <div className="flex justify-center my-12">
      <div className="w-[400px] border border-[#e0e3e4] rounded-sm px-7 py-10">
        <h1 className="text-4xl font-medium">Welcome Back</h1>
        <p className="font-medium text-lg mt-3">Enter your details below </p>
        <div className="mt-6">
          <label className="text-lg font-medium ">Email</label>
          <input className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent" placeholder="Enter Your Email"/>
        </div>
        <div className="mt-6">
          <label className="text-lg font-medium">Password</label>
          <input className="w-full border-2 border-gray-100 rounded-xl p-3 mt-1 bg-transparent" placeholder="Enter Your Password" type="password"/>
        </div>
        <div className="mt-6 flex flex-col gap-y-4">
        <button className="py-2 rounded bg-[#14ae5c] text-white text-lg font-medium hover:bg-[#009951] active:scale-[.98] active:duration-75 transition-all ease-in-out ">Log In</button>
        </div>
        <p className="mt-4 text-center hover:text-slate-600 cursor-pointer">Forget Password?</p>
      </div>
      </div>
    </>
  );
};

export default Login;

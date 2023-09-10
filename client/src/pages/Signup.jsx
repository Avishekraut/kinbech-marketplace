import React from "react";
import Nav from "../components/Nav";
import { Link } from "react-router-dom";
import { Button, Form, Input } from "antd";

const Signup = () => {
  return (
    <>
      <Nav />
      <div className="flex justify-center my-12">
        <div className="w-[400px] border border-[#e0e3e4] rounded-sm px-7 py-10">
        <h1 className="text-3xl font-medium">Create an account</h1>
          <p className="font-medium text-base my-3">Enter your details below </p>
          <Form layout="vertical">
            <Form.Item label="Full Name" name="name" className="font-semibold">
              <Input
                placeholder="Name"
                className="border rounded-sm py-2"
              />
            </Form.Item>
            <Form.Item label="Email" name="email" className="font-semibold">
              <Input
                placeholder="Email"
                className="border rounded-sm py-2"
              />
            </Form.Item>
            <Form.Item label="Password" name="password" className="font-semibold">
              <Input
                type="password"
                placeholder="Password"
                className="border rounded-sm py-2"
              />
            </Form.Item>
            <Button type="primary" htmlType="submit" block className="h-9 rounded bg-[#14ae5c] text-white text-base font-medium active:scale-[.98] active:duration-75 transition-all ease-in-out ">Sign Up</Button>

            <div className="mt-4 text-center text-base">
              Already have an account? <Link className="text-[#14ae5c] hover:text-black" to="/login">Login</Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Signup;

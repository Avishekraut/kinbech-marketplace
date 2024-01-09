import React, { useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { GetCurrentUser } from "../apicalls/users";
import { useDispatch } from 'react-redux';
import { setLoader } from '../redux/loadersSlice';

const rules = [
  {
    required: true,
    message: 'Required',
  },
];

const Myprofile = () => {
  const [form] = Form.useForm();
  const [currentUser, setCurrentUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        dispatch(setLoader(true));
        const response = await GetCurrentUser();
        const userData = response.data; // Extract user details from the API response
        dispatch(setLoader(false));
        setCurrentUser(userData);
  
        // Set initial values for the form fields
        form.setFieldsValue({
          name: userData.name,
          email: userData.email,
          password: '', 
        });
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    };
  
    fetchCurrentUser();
  }, [form]);

  const handleSave = (values) => {
    // Handle the save logic here, e.g., send updated data to the server
    console.log('Saving:', values);
  };

  return (
    <div className="flex justify-center my-12">
      <div className="w-[400px] border border-[#e0e3e4] rounded-sm px-7 py-10">
        <h1 className="text-3xl font-medium mb-4">Edit profile</h1>
        <Form layout="vertical" form={form} onFinish={handleSave}>
          <Form.Item label="Full Name" name="name" className="font-semibold" rules={rules}>
            <Input placeholder="Full Name" className="border rounded-sm py-2" />
          </Form.Item>
          <Form.Item label="Email" name="email" className="font-semibold" rules={rules}>
            <Input placeholder="Email" className="border rounded-sm py-2" />
          </Form.Item>
          <Form.Item label="Password" name="password" className="font-semibold" rules={rules}>
            <Input.Password placeholder="Password" className="border rounded-sm py-2" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            className="mt-2 h-9 rounded bg-[#14ae5c] text-white text-base font-medium active:scale-[.98] active:duration-75 transition-all ease-in-out"
          >
            Save
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Myprofile;

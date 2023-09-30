import React, { useState } from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { GetCurrentUser } from "../apicalls/users";
// import { AiOutlineMenu } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { setLoader } from "../redux/loadersSlice";

//UserProfileButton component 
const UserProfileButton = ({ user }) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/Login");
  };

  return (
    <div className="relative">
      <div
        className="bg-white py-2 px-3 rounded flex items-center gap-1 cursor-pointer"
        onClick={toggleDropdown}
      >
        <BiUser size={18} />
        <span>{user.name}</span>
        <RiArrowDropDownLine size={22} />
      </div>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-[170px] bg-white border border-gray-300 rounded shadow-md">
          <ul className="py-2">
            <li
              className="flex items-center justify-between px-4 hover:bg-gray-100 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
              <TbLogout size={18}/>
            </li>
            {/* Add additional dropdown items here */}
          </ul>
        </div>
      )}
    </div>
  );
};

const ProtectedPage = ({ children }) => {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validateToken = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetCurrentUser();
      dispatch(setLoader(false))
      if (response.success) {
        setUser(response.data);
      } else {
        navigate("/Login");
        message.error(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false))
      navigate("/Login");
      message.error(error.message);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      validateToken();
    } else {
      navigate("/Login");
    }
  }, []);

  return (
    user && (
      <div>
        {/* Header */}
        <div className="flex justify-between items-center py-2 my-3">
          <h1 className="font-bold text-2xl">KinBech</h1>
          <UserProfileButton user={user} />
        </div>
        <div>{children}</div>
      </div>
    )
  );
};

export default ProtectedPage;

import React, { useState, useEffect } from "react";
import { Avatar, Badge, message } from "antd";
import { useNavigate } from "react-router-dom";
import { GetCurrentUser } from "../apicalls/users";
// import { AiOutlineMenu } from "react-icons/ai";
import { BiUser } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import { TbLogout } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { setLoader } from "../redux/loadersSlice";
import { SetUser } from "../redux/usersSlice";
import { Button } from "antd";
import { IoMdNotificationsOutline } from "react-icons/io";
import Notifications from "./Notifications";
import {
  GetAllNotifications,
  ReadAllNotifications,
} from "../apicalls/notifications";
import Kinbechlogo from "../../src/images/kinbechLogo.png";

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
    <div className="relative z-10">
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
              <TbLogout size={18} />
            </li>
            {/* Add additional dropdown items here */}
          </ul>
        </div>
      )}
    </div>
  );
};

const ProtectedPage = ({ children }) => {
  const [notifications = [], setNotifications] = useState([]);
  const [showNotifications, setShowNotifications] = useState(false);
  const { user } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validateToken = async () => {
    try {
      dispatch(setLoader(true));
      const response = await GetCurrentUser();
      dispatch(setLoader(false));
      if (response.success) {
        dispatch(SetUser(response.data));
      } else {
        navigate("/Login");
        message.error(response.message);
      }
    } catch (error) {
      dispatch(setLoader(false));
      navigate("/Login");
      message.error(error.message);
    }
  };

  const getNotifications = async () => {
    try {
      const response = await GetAllNotifications();
      if (response.success) {
        setNotifications(response.data);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  const readNotifications = async () => {
    try {
      const response = await ReadAllNotifications();
      if (response.success) {
        getNotifications();
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      validateToken();
      getNotifications();
    } else {
      navigate("/Login");
    }
  }, []);

  return (
    user && (
      <div>
        {/* Header */}
        <div className="flex justify-between items-center py-2 my-3">
          <img src={Kinbechlogo} alt="kinbech logo" className="cursor-pointer w-36" onClick={() => navigate("/")} />
          <div className="flex items-center">
            <Button
              type="primary"
              onClick={() => {
                if (user.role === "user") {
                  navigate("/SellerDashboard");
                } else {
                  navigate("/admin");
                }
              }}
              className="flex justify-center items-center px-4 mx-2 rounded bg-[#14ae5c] text-white text-base font-medium active:scale-[.98] active:duration-75 transition-all ease-in-out"
            >
              {user.role === "admin" ? "Dashboard" : "My Listings"}
            </Button>
            <UserProfileButton user={user} />
            <Badge
              count={
                notifications?.filter((notification) => !notification.read)
                  .length
              }
              onClick={() => {
                readNotifications();
                setShowNotifications(true);
              }}
              className="cursor-pointer"
            >
              <Avatar
                className="flex justify-center"
                shape="circle"
                icon={<IoMdNotificationsOutline size={28} />}
              />
            </Badge>
          </div>
        </div>
        <div>{children}</div>

        {
          <Notifications
            notifications={notifications}
            reloadNotifications={getNotifications}
            showNotifications={showNotifications}
            setShowNotifications={setShowNotifications}
          />
        }
      </div>
    )
  );
};

export default ProtectedPage;

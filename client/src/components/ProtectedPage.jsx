import React from "react";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { GetCurrentUser } from "../apicalls/users";

const ProtectedPage = ({children}) => {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();
  const validateToken = async () => {
    try {
      const response = await GetCurrentUser();
      if (response.success) {
        setUser(response.data);
      } else {
        navigate("/Login");
        message.error(response.message);
      }
    } catch (error) {
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
    <div>
      {user && (
        <div>
          {user.name}
          {children}
        </div>
      )}
    </div>
  );
};

export default ProtectedPage;

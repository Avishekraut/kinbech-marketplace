import React from "react";
import { Tabs } from "antd";
import Products from "./Products";

const SellerDashboard = () => {
  return (
    <div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="My Listings" key="1">
          <Products />
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
};

export default SellerDashboard;

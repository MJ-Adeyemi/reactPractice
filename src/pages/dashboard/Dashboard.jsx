import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div className="flex justify-between ">
        <div className="">
          <Sidebar />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

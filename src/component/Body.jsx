import React from "react";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import Header from "./header";

const Body = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);
  return (
    <div>
      <Header />
      <div className="flex">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Body;

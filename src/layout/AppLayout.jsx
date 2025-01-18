import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../component/Header";

const AppLayout = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 bg-blue-200 w-screen -z-[1]"></div>
      <Header />
      <Outlet />
    </div>
  );
};

export default AppLayout;

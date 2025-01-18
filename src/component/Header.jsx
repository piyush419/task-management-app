import React from "react";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className=" text-2xl font-mono font-bold px-10 flex justify-center items-center">
      Task Management Application.
      <img
        src="/registerKaro.png"
        alt=""
        className="h-40 w-32 cursor-pointer"
        onClick={() => navigate("/")}
      />
    </div>
  );
};

export default Header;

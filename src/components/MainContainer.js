import React from "react";
import ButtonList from "./ButtonList";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  const isMenuOpen = useSelector((state) => state.app.isMenuOpen);

  return (
    <div className={isMenuOpen ? "w-10/12" : "w-full"}>
      <ButtonList />
      <Outlet />
    </div>
  );
};

export default MainContainer;

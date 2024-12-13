import React from "react";
import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";
import { Route, Routes } from "react-router-dom";
import VideoContainer from "./VideoContainer";
import Watch from "./Watch";
import Demo from "./Demo";
import { Demo2 } from "./Demo2";

const Body = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Routes>
        <Route element={<MainContainer />}>
          <Route path="" element={<VideoContainer />} />
          <Route path="watch" element={<Watch />} />
          <Route
            path="demo"
            element={
              <div className="flex">
                <Demo />
                <Demo2 />
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default Body;

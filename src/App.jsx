import React from "react";

import Simply_meet from "./Components/AboutPage/Simply_meet";
import GridParticles from "./Components/AboutPage/GridParticles";
import Experience from "./Components/AboutPage/Experience";
import ImageAndSignature from "./Components/AboutPage/LeftSideOfPage/ImageAndSignature";
import ProjectSection from "./Components/AboutPage/ProjectSection";
import WhatIDo from "./Components/AboutPage/WhatIDo";
import SnakeGame from "./Components/Game/snake/SnakeGame";
import SnakeGame_1 from "./Components/Game/snake/SnakeGame_1";
import useAnimatedFavicon from "./hooks/useAnimatedFavicon";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/footer/Footer";
import HomePage from "./Components/HomePage/HomePage";
import Experiment from "./Components/Experiment/Experiment";
import WrapperHome from "./Components/HomePage/WrapperHome";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./Layout/MainLayout";


// import TetrisGame from "./Components/Game/Tetris/TetrisGame";
// import Tetrix_main from "./Components/Game/Tetris/Tetrix_main";
// import frame0 from "./assets/favicon/frame_0.png"

  const router = createBrowserRouter([{
    element: <MainLayout />,
    children:[
      {path: "/", element: <WrapperHome />},
      {path : "/experiment", element: <Experiment /> },
    ],
  }
   
  ])

export default function App() {
  useAnimatedFavicon(
    [
      "/frame_0.png",
      "/frame_1.png",
      "/frame_2.png",
      "/frame_3.png",
      "/frame_4.png",
    ],
    110
  );
 



  return (
    <>
      
      <RouterProvider router={router} />
    </>
  )
  
  
};

// export default App;



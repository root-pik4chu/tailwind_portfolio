import React from "react";

import Simply_meet from "./Components/AboutPage/Simply_meet";
import GridParticles from "./Components/AboutPage/GridParticles";
import Experience from "./Components/AboutPage/Experience";
import ImageAndSignature from "./Components/AboutPage/LeftSideOfPage/ImageAndSignature";
import ProjectSection from "./Components/AboutPage/ProjectSection";
import WhatIDo from "./Components/AboutPage/WhatIDo";
// import Tetrix_main from "./Components/Game/Tetris/Tetrix_main";

const App = () => {
  return (
    <>
      <div className="w-full h-[8vh] fixed top-0 z-20  border-b border-white/10 bg-zinc-950 ">
        <div className="w-full h-full relative text-white px-[2.5vw] flex items-center justify-between">
          <h1 className="text-3xl tracking-tight">Sahil Saundale</h1>
        </div>
      </div>

      <div className="max-w-screen overflow-x-hidden bg-zinc-950">
        <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center [--gutter-width:--spacing(6)] sm:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-xl))_var(--gutter-width)] lg:[--gutter-width:--spacing(10)]">
          <div className="col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 sm:block dark:[--pattern-fg:var(--color-white)]/10"></div>

          <div className="w-full h-full relative ">
            <div className="w-full h-full   relative ">
              {/* upper free space */}
              <div className=" w-full h-[20vh]   grid grid-cols-3 relative  gap-[50px]">
                <div className="w-full h-full col-span-1 border-r border-white/10"></div>
                <div className="w-full h-full col-span-1 border-l border-white/10"></div>
              </div>

              <div className="w-full h-[500vh] relative">
                {/* this is grid ...  */}
                <div className="w-full h-full grid grid-cols-3 relative section-after gap-[50px] ">
                  {/* col 1 - left-side*/}
                  <div className="w-full h-full col-span-1 border-r border-white/10  relative section-right ">
                    <ImageAndSignature />

                    <div className="w-full h-[77vh] bg-red-500"></div>
                  </div>

                  {/* col 2 - right-side*/}
                  <div className="w-full h-full col-span-2  border-l border-white/10 ">
                    <Simply_meet />
                    {/* new division */}
                    <Experience />

                    {/* new divisio  */}
                    <ProjectSection />

                    {/* new divisio  */}

                    <WhatIDo />

                    {/* new divisio  */}
                    <div className="text-white">lets connect</div>

                    {/* new divisio  */}
                    <div className="">
                      {/* <Tetrix_main /> */}
                    </div>

                    {/* new divisio  */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 sm:col-start-3 sm:block dark:[--pattern-fg:var(--color-white)]/10"></div>
        </div>
      </div>
    </>
  );
};

export default App;

{
  /* <div
        className="w-full h-[10vh] fixed top-0 z-20  
        border-b border-white/10 bg-zinc-950
      "
      ></div>
      <div className="max-w-screen overflow-x-hidden bg-zinc-950">
      
      <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center [--gutter-width:--spacing(6)] sm:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-xl))_var(--gutter-width)] lg:[--gutter-width:--spacing(10)]">

        <div className="col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 sm:block dark:[--pattern-fg:var(--color-white)]/10"></div>
       
        <div className="">
          
        </div>
       
        <div className="row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 sm:col-start-3 sm:block dark:[--pattern-fg:var(--color-white)]/10"></div>
      </div>
    </div> */
}

// {/* First single column */}
//               <div className="bg-red-900 text-white text-xl">
//                 <div className="w-full h-[40vh] bg-zinc-300"></div>
//               </div>

//               {/* Gutter (keep empty) */}
//               <div></div>

//               {/* Div spanning next two content columns (including gutter between them) */}
//               <div className="col-[3_/_span_3] grid grid-cols-2 gap-0">
//                 <div className="bg-blue-900 flex items-center justify-center text-white text-xl">
//                   Left
//                 </div>
//                 <div className="bg-green-900 flex items-center justify-center text-white text-xl">
//                   Right
//                 </div>
//               </div>

// -------------------------

{
  /* <div className="w-full h-full relative px-[2vw]">
        <div className="nav w-full h-[10vh] bg-red-500 fixed top-0 z-20"></div>
        <div className=" fixed right-0 col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 sm:block dark:[--pattern-fg:var(--color-white)]/10 w-[40px] h-screen"></div>
        <div className="fixed left-0 col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 sm:block dark:[--pattern-fg:var(--color-white)]/10 w-[40px] h-screen"></div>
        <div className=" w-full h-screen flex">

    <div className="w-full h-[200vh] flex justify-center">
        <div className="w-[calc(100vw-94px)] h-[100vh] bg-red-600">

        </div>
    </div>


        </div>
      </div> */
}

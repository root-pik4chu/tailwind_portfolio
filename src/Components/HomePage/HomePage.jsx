import React from "react";

// import SnakeGame from "./Components/Game/snake/SnakeGame";

import Simply_meet from "../AboutPage/Simply_meet";
import GridParticles from "../AboutPage/GridParticles";
import Experience from "../AboutPage/Experience";
import ImageAndSignature from "../AboutPage/LeftSideOfPage/ImageAndSignature";
import ProjectSection from "../AboutPage/ProjectSection";
import WhatIDo from "../AboutPage/WhatIDo";
import SnakeGame_1 from "../Game/snake/SnakeGame_1";
// import useAnimatedFavicon from '../../hooks/useAnimatedFavicon';
export default function HomePage() {
  return (
    <div>
      <div className="w-full h-full relative  ">
        <div className="w-full h-full   relative ">
          <div className="w-full h-full relative ">
            
            {/* this is grid ...  */}
            <div className="w-full h-full grid grid-cols-3 relative section-after gap-[50px] ">
              {/* col 1 - left-side*/}
              <div className="w-full h-full col-span-1 border-r border-white/10  relative section-right ">
                <ImageAndSignature />

                <div className="w-full h-[77vh] "></div>
              </div>

              {/* col 2 - right-side*/}
              <div className="w-full h-full col-span-2  border-l border-white/10 ">
                <Simply_meet />
                {/* new division */}
                <Experience />
                {/* new division */}
                <div className="w-full  !mt-10 p-2 text-white section-after py-5">
                  <p className=" tracking-widest uppercase text-pretty text-sky-500 text-sm font-[ibm] font-semibold">
                    Toolkit
                  </p>
                  <h1 className="max-w-lg text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
                    {"{ }"} Tech Stack
                  </h1>
                </div>
                <div className="w-full h-[50vh]  relative ">
                  <div className="w-full h-full relative !mt-5 section-after">
                    <div className="w-full h-full pointer-events-none absolute inset-0 z-20 grid grid-cols-3  gap-13 ">
                      <div className="border-r border-white/10 z-20"></div>

                      <div className="border-l border-r border-white/10 z-20"></div>
                      <div className="border-l border-white/10 z-20"></div>
                    </div>
                    <div className="w-full h-full grid grid-cols-3 grid-rows-3 gap-13 text-white ">
                      <div className=" flex-center"> root</div>
                      <div className=" flex-center"> root</div>
                      <div className="flex-center has-after-line bg-pink-500">
                        {" "}
                        root
                      </div>
                      <div className="flex-center has-before-line"> root</div>
                      <div className="flex-center bg-pink-400"> root</div>
                      <div className="flex-center has-after-line "> root</div>
                      <div className="flex-center has-before-line bg-pink-400">
                        {" "}
                        root
                      </div>
                      <div className="flex-center "> root</div>
                      <div className="flex-center "> root</div>
                    </div>
                  </div>
                </div>
                {/* new divisio  */}
                <ProjectSection />

                {/* new divisio  */}

                <WhatIDo />

                {/* new divisio  */}
                <div className="text-white"></div>

                {/* new divisio  */}
                <div className=" !mt-10">
                  {/* <Tetrix_main /> */}
                  {/* <TetrisGame /> */}
                  <div className="w-full ">
                    <div className="text section-after !mt-15 text-white px-2 ">
                      <p className=" tracking-widest uppercase text-pretty text-sky-500 text-sm font-[ibm] font-semibold">
                        G.A.M.E.S
                      </p>
                      <h1 className="max-w-lg text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
                        Snakes🐍
                      </h1>
                    </div>
                  </div>
                  <SnakeGame_1 />
                </div>

                {/* new divisio  */}
                {/* footer */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

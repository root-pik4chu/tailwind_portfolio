import React from "react";

// import SnakeGame from "./Components/Game/snake/SnakeGame";

import Simply_meet from "../AboutPage/Simply_meet";
import GridParticles from "../AboutPage/GridParticles";
import Experience from "../AboutPage/Experience";
import ImageAndSignature from "../AboutPage/LeftSideOfPage/ImageAndSignature";
import ProjectSection from "../AboutPage/ProjectSection";
import WhatIDo from "../AboutPage/WhatIDo";
import SnakeGame_1 from "../Game/snake/SnakeGame_1";
import TechStack from "../AboutPage/TechStack";
import LeetCodeGraph from "../leetcodeGraph/LeetCodeGraph";
// import useAnimatedFavicon from '../../hooks/useAnimatedFavicon';
export default function HomePage() {
  return (
    <div>
      <div className="w-full h-full relative  ">
        <div className="w-full h-full   relative ">
          <div className="w-full h-full relative ">
            {/* this is grid ...  */}
            <div className="w-full h-full grid grid-cols-3 relative section-after gap-[50px]">
              {/* col 1 - left-side*/}
              <div className="w-full h-full border-r border-white/10 sm:col-span-1 col-span-3 md:block">
                <div className="w-full md:h-[60vh] h-[35vh]    relative section-right  ">
                <ImageAndSignature />

                <div className="w-full h-[28vh] hidden md:block">
                  {/* <div className="w-full h-[10vh]  ">
                    <button className="bg-amber-700 px-4 py-1 rounded-2xl font- text-white">linkedIn</button>
                  </div> */}
                </div>
              </div>
              </div>

              {/* col 2 - right-side*/}
              <div className="w-full h-full sm:col-span-2 col-span-3 border-l border-white/10 ">
                {/* <div className="md:hidden block w-1/2 h-[5] md:mb-10 ">
                  <ImageAndSignature />
                </div> */}

                <Simply_meet />
                {/* new division */}
                <Experience />
                {/* new division */}
                <TechStack />
                {/* new divisio  */}
                <ProjectSection />

                {/* new divisio  */}

                <WhatIDo />
                {/* <LeetCodeGraph /> */}
                {/* new divisio  */}
                <div className="text-white"></div>

                {/* new divisio  */}
                <div className=" !mt-10">
                  {/* <Tetrix_main /> */}
                  {/* <TetrisGame /> */}
                  <div className="w-full ">
                    <div className="text section-after !mt-15 text-white p-2 ">
                      <p className=" tracking-widest uppercase text-pretty text-green-600 text-sm font-[ibm] font-semibold">
                        G.A.M.E.S
                      </p>
                      <h1 className="max-w-lg text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
                        Snakes🐍
                      </h1>
                    </div>
                  </div>
                  <SnakeGame_1 />

                  {/* footer */}
                  <div className="w-full h-full !mt-10">
                    <div className="w-full h-full flex items-end justify-center text-white">
                      <p>🍁🍁🍁</p>

                      <p>
                        Design inspired from Tailwind Css created by Sahil
                        Saundale.
                      </p>
                      <p>🍁🍁🍁</p>
                    </div>
                  </div>
                </div>

                {/* new divisio  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

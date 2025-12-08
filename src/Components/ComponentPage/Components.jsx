import React, { useEffect } from "react";
import Empty from "./Empty";
import CodeBlock from "../../reusableComponents/CodeBlock";
import FollowCursorCard from "./FollowCursorCard";
import Division from "./Division";
import ProjectDivision from "./ProjectDivision";
import ProjectDivisionGrid from "./ProjectDivisionGrid";
import Footer from "../footer/Footer";

export default function Components() {
  return (
    <div>
      <div className="w-full overflow-hidden relative">
        <div className="w-full h-full !mt-20 text-white">

          <div className="w-full ">
            <div className="w-full   section-after">
            <h1 className="mt-2 text-6xl tracking-tighter text-balance text-white md:text-7xl lg:text-8xl capitalize">
              Experiments
            </h1>
            <h1 className="mt-2 text-2xl tracking-tighter text-balance md:text-2xl lg:text-2xl capitalize text-amber-500">
              time saving things for developers || things like boiler plate
            </h1>
          </div>
          {/* GRID */}
          <div className="grid md:grid-cols-4 row-auto grid-cols-1 gap-12 w-full !mt-15 section-after">
            {/* BLOCK 1 */}
            <div className="w-full   h-80 border-white/10 border-r flex flex-col justify-between">
              <Division />
            </div>

            {/* OTHERS */}
            <div className="w-full   h-80  border-white/10 border-r border-l flex flex-col justify-between relative "></div>
            <div className="w-full   h-80 border-white/10 border-r border-l flex flex-col justify-between"></div>
            <div className="w-full   h-80 border-white/10 border-l flex flex-col justify-between"></div>
          </div>

            

            {/* <Footer /> */}

          </div>

       
            
         



        </div>
      </div>
    </div>
  );
}

// .............
{
  /* <CodeBlock
                codeString={`import React from 'react'
    
export default function Empty() {
  return (
    <div>
      <div className="w-full h-64 flex items-center justify-center bg-black border-2 border-white/10">
        <h1 className="group cursor-pointer text-[1.5vw] font-bold tracking-wide text-white overflow-hidden">

          <span className="block relative">
            <span className="block transition-transform duration-300 group-hover:-translate-y-full">
              Hover Magic
            </span>
            <span className="block absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-purple-400">
              Hover Magic
            </span>
          </span>

        </h1>
      </div>
    </div>
  )
}`}
              >
                <Empty />
              </CodeBlock>
              <div className="w-full h-12  has-before-line">
                <h2 className="text-xl capitalize tracking-tight font-medium p-2">hide and seek </h2>
              </div> */
}
// ..................

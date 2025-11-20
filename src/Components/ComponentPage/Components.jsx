import React from "react";
import Empty from "./Empty";
import CodeBlock from "../../reusableComponents/Codeblock";

export default function Components() {
  return (
    <div>
      <div className="w-full h-[200vh] relative">
       
        <div className="w-full h-full !mt-20 text-white">
           <div className="w-full   section-after">
              <h1 className="mt-2 text-6xl tracking-tighter text-balance text-white md:text-7xl lg:text-8xl capitalize">
              Ready to use React Components 
            </h1>
            <h1 className="mt-2 text-2xl tracking-tighter text-balance md:text-2xl lg:text-2xl capitalize text-amber-500" >
              just Copy and paste to your project
            </h1>
           </div>
          {/* GRID */}
          <div className="grid grid-cols-4 gap-12 w-full !mt-15 section-after">
            {/* BLOCK 1 */}
            <div className="w-full   h-80 border-white/10 border-r flex flex-col justify-between">
              <CodeBlock
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
              </div>
            </div>

            {/* OTHERS */}
            <div className="w-full   h-80 border-white/10 border-r border-l flex flex-col justify-between"></div>
            <div className="w-full   h-80 border-white/10 border-r border-l flex flex-col justify-between"></div>
            <div className="w-full   h-80 border-white/10 border-l flex flex-col justify-between"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

import luffy from "./assets/luffy.jpg";
import signature from "./assets/signature.svg";
import Simply_meet from "./Components/AboutPage/Simply_meet";
import GridParticles from "./Components/AboutPage/GridParticles";
import Experience from "./Components/AboutPage/Experience";

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
              <div className="w-full h-[300vh] relative">
                {/* this is grid ...  */}
                <div className="w-full h-full grid grid-cols-3 relative section-after gap-[50px] ">
                  {/* col 1 - left-side*/}
                  <div className="w-full h-full col-span-1 border-r border-white/10  relative section-right ">
                    <div className="w-full h-[60vh]  relative">
                      <div className="w-[90%] h-[40vh] relative  flex items-center justify-center">
                        <GridParticles
                          imageSrc={luffy}
                          gap={6}
                          minR={0.8}
                          maxR={1.5}
                          hoverRadius={90}
                          moveProb={0.4}
                          maxSteps={3}
                          speedMinHz={0.5}
                          speedMaxHz={2}
                          showHoverCircle={false}
                          maskCircle={true}
                          sizeScale={0.6}
                        />
                      </div>
                      <div className="w-full h-[10vh] relative flex flex-col items-center justify-start !mt-20  text-white/50 ">
                        <div className="w-[40 %] h-full  left-5 ">
                          <h1 className="text-xs tracking-tight font-imb uppercase font-medium ">
                            sahil saundale ,<br></br> user of Tailwind CSS
                          </h1>
                          <h1 className="text-xs tracking-tight font-imb uppercase font-medium"></h1>
                        </div>
                        {/* <h1>root</h1> */}
                        <div className="absolute w-[10vw] h-full -top-[180%] left-10 -rotate-12 ">
                          <img src={signature} alt="" />
                        </div>
                      </div>
                    </div>

                    <div className="w-full h-[77vh] bg-red-500"></div>
                  </div>
                  {/* <div className="w-px h-full bg-amber-300"></div> */}
                  {/* col 2 */}
                  <div className="w-full h-full col-span-2  border-l border-white/10 ">
                    <Simply_meet />
                    {/* new division */}
                    <Experience />
                    {/* new divisio  */}

                    <div className="w-full ">
                      <div className="text section-after !mt-15 text-white px-2 ">
                        <h1 className="max-w-lg text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
                          Projects
                        </h1>
                        <p className="text-sm leading-relaxed text-white/50 ">
                          projects which i do in my freelance and its live ... 
                        </p>
                      </div>
                      
                    </div>

                    {/* new divisio  */}

                    {/* new divisio  */}

                    <div className="w-full h-[60vh] relative bg-zinc-900 !mt-10 section-after">

                      <section class="w-full h-full relative mx-auto px-2 py-2">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-2 h-full ">
                              {/* <!-- Left Column --> */}
                              <div class="flex flex-col h-full gap-2">
                                {/* <!-- Top Section --> */}
                                <div class="flex-1 bg-zinc-950 border border-white/10 rounded-xl flex items-center justify-center text-white/70">
                                  <p>Left Top</p>
                                </div>
                                {/* 
      <!-- Bottom Row (2 divisions) --> */}
                                <div class="grid grid-cols-2 gap-2 h-[30%]">
                                  <div class="bg-zinc-950 border border-white/10 rounded-xl flex items-center justify-center text-white/70">
                                    <p>Bottom Left 1</p>
                                  </div>
                                  <div class="bg-zinc-950 border border-white/10 rounded-xl flex items-center justify-center text-white/70">
                                    <p>Bottom Left 2</p>
                                  </div>
                                </div>
                              </div>

                              {/* <!-- Right Column --> */}
                              <div class="flex flex-col h-full gap-2">
                                {/* <!-- Top Section --> */}
                                <div class="flex-1 bg-zinc-950 border border-white/10 rounded-xl flex items-center justify-center text-white/70">
                                  <p>Right Top</p>
                                </div>

                                {/* <!-- Bottom Row (2 divisions) --> */}
                                <div class="grid grid-cols-2 gap-2 h-[30%]">
                                  <div class="bg-zinc-950 border border-white/10 rounded-xl flex items-center justify-center text-white/70">
                                    <p>Bottom Right 1</p>
                                  </div>
                                  <div class="bg-zinc-950 border border-white/10 rounded-xl flex items-center justify-center text-white/70">
                                    <p>Bottom Right 2</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                    </div>

                    {/* new divisio  */}

                    <div className=""></div>

                    {/* new divisio  */}
                    <div className=""></div>

                    {/* new divisio  */}
                    <div className=""></div>

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

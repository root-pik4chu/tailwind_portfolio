import React from "react";
import d1 from "../../assets/projectImage/d1.png";
import d2 from "../../assets/projectImage/d2.png";
import d3 from "../../assets/projectImage/d3.png";
import i1 from "../../assets/projectImage/i1.png";
import i2 from "../../assets/projectImage/i2.png";
import i3 from "../../assets/projectImage/i3.png";
import { MdArrowOutward } from "react-icons/md";
export default function ProjectSection() {
  return (
    <div>
      <div className="w-full ">
        <div className="text section-after !mt-15 text-white py-5 ">
          <p className=" tracking-widest uppercase text-pretty text-pink-500 text-sm font-[ibm] font-semibold">
            L.I.V.E Projects
          </p>
          <h1 className="max-w-lg text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0 ">
            Things I Build
          </h1>
          {/* <p className="text-xl leading-relaxed text-white/50 pt-5">
                                
                                </p> */}
        </div>
      </div>

      <div className="w-full h-[60vh] relative bg-zinc-900 !mt-10 section-after">
        <section class="w-full h-full relative mx-auto px-2 py-2">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-2 h-full ">
            {/* <!-- Left Column --> */}
            <div class="flex flex-col h-full gap-2">
              {/* <!-- Top Section --> */}
              <div class="flex-1 bg-zinc-950 border border-white/10 rounded-xl flex items-center justify-center text-white/70 overflow-hidden relative">
                <div className="w-10 h-10 rounded-full bg-white absolute z-2 top-2 left-2 overflow-hidden">
                  <a
                    href="https://derxo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex items-center justify-center font-bold text-black"
                  >
                    <MdArrowOutward />
                  </a>
                </div>
                <img
                  className="w-full h-full object-cover opacity-70"
                  src={d1}
                  alt=""
                />
              </div>
              {/* 
      <!-- Bottom Row (2 divisions) --> */}
              <div class="grid grid-cols-2 gap-2 h-[30%]">
                <div class="bg-zinc-950 border border-white/10 rounded-xl flex items-center justify-center text-white/70 overflow-hidden">
                  <img
                    className="w-full h-full object-cover opacity-90 scale-200"
                    src={d2}
                    alt=""
                  />
                </div>
                <div class="bg-zinc-950 border border-white/10 rounded-xl flex items-center justify-center text-white/70 overflow-hidden">
                  <img
                    className="w-full h-full object-cover opacity-90 scale-200"
                    src={d3}
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* <!-- Right Column --> */}
            <div class="flex flex-col h-full gap-2">
              {/* <!-- Top Section --> */}
              <div class="flex-1 bg-zinc-950 border border-white/10 rounded-xl flex items-center justify-center text-white/70 overflow-hidden relative">
                <div className="w-10 h-10 rounded-full bg-white absolute z-2 top-2 left-2 overflow-hidden">
                  <a
                    href="https://infrawavesolutions.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full h-full flex items-center justify-center font-bold text-black"
                  >
                    <MdArrowOutward />
                  </a>
                </div>
                <img
                  className="w-full h-full object-cover opacity-90 "
                  src={i1}
                  alt=""
                />
              </div>

              {/* <!-- Bottom Row (2 divisions) --> */}
              <div class="grid grid-cols-2 gap-2 h-[30%]">
                <div class="bg-zinc-950 border border-white/10 rounded-xl flex items-center justify-center text-white/70 overflow-hidden">
                  <img
                    className="w-full h-full object-cover opacity-90 scale-150 "
                    src={i3}
                    alt=""
                  />
                </div>
                <div class="bg-zinc-950 border border-white/10 rounded-xl flex items-center justify-center text-white/70 overflow-hidden">
                  <img
                    className="w-full h-full object-cover opacity-90 scale-100 "
                    src={i2}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="w-30 h-10 p-2 bg-red-700 rounded-full !mt-5 flex items-center justify-center section-after">
        <p className=" text-sm font-semibold tracking-tight  text-white  ">
          more Projects
        </p>
      </div>
    </div>
  );
}

import React from "react";
import motionDark from "../../assets/tech/motion_dark (1).svg";
import reactWordmarkDark from "../../assets/tech/react_wordmark_dark (1).svg";
import reactRouter from "../../assets/tech/reactrouter.svg";
import motion from "../../assets/tech/motion.svg";
import shadcnDark from "../../assets/tech/shadcn-ui_dark.svg";
import shadcn from "../../assets/tech/shadcn-ui.svg";
import vueuse from "../../assets/tech/vueuse.svg";
import figma from "../../assets/tech/figma (2).svg";
import tailwind from "../../assets/tech/tailwindcss-wordmark-dark.svg";
import js from "../../assets/tech/javascript (2).svg";
import gsap from "../../assets/tech/gsap-white.svg";

// import { jsx } from "react/jsx-runtime";
figma
tailwind
js
gsap
export default function TechStack() {

  const techStack = [
  { name: "React Wordmark Dark", src: reactWordmarkDark ,  class:"has-after-line " },
  { name: "GSAP", src: gsap ,  class: "has-before-line" },
  { name: "JavaScript", src: js},
  // { name: "Framer Motion", src: motion , class:"has-after-line "},
  // { name: "shadcn/ui Dark", src: shadcnDark, class: "has-before-line" },
  // { name: "shadcn/ui", src: shadcn },
  { name: "VueUse", src: vueuse ,class: "has-before-line"},
  { name: "Figma", src: figma , class:"has-after-line " },
  { name: "Tailwind CSS", src: tailwind , class: "has-before-line" },
  { name: "React Router", src: reactRouter  },
  { name: "Framer Motion Dark", src: motionDark , class: "has-before-line" },
];

  return (
    <div>
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
            {techStack.map((item, i) => {
              return (
                <div className=" flex-center">
                  <div className={`w-full h-full relative p-4 flex-center bg-white/5 ${item.class || ""}`}>
                    <img className="w-full h-full relative" src={item.src} alt={item.name} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
// assets/tech/motion_dark (1).svg
// assets/tech/react_wordmark_dark (1).svg
// assets/tech/reactrouter.svg
// assets/tech/motion.svg
// assets/tech/shadcn-ui_dark.svg
// assets/tech/shadcn-ui.svg
// assets/tech/vueuse.svg

// <div className=" flex-center">
//                               <div className="w-full h-full relative p-4 flex-center">
//                                  <img src={reactImg} alt="" />
//                               </div>
//                             </div>
//                             <div className=" flex-center">
//                               <div className="w-full h-full relative p-4 flex-center">
//                                  <img src={reactImg} alt="" />
//                               </div>
//                             </div>
//                             <div className="flex-center has-after-line">
//                               <div className="w-full h-full relative p-4 flex-center">
//                                  <img src={reactImg} alt="" />
//                               </div>
//                             </div>
//                             <div className="flex-center has-before-line"> root</div>
//                             <div className="flex-center bg-pink-400"> root</div>
//                             <div className="flex-center has-after-line "> root</div>
//                             <div className="flex-center has-before-line bg-pink-400">
//                               {" "}
//                               root
//                             </div>
//                             <div className="flex-center "> root</div>
//                             <div className="flex-center "> root</div>

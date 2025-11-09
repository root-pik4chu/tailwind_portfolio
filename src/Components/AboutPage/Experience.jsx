import React from "react";

const Experience = () => {
  return (
    <div>
      <div className="text section-after !mt-4 text-white px-2 ">
        <h1 className="max-w-lg text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
          Experience
        </h1>
        <p className="text-sm leading-relaxed text-white/50 ">
          Experience that helped me grow as a frontend developer
        </p>
      </div>
      <div className="w-full h-[60vh] relative ">
        {/* CARDS EXPERIENCE SECTION  */}
        <div className="w-full h-full relative  !mt-10 ">
          <section class="w-full h-full max-w-5xl   mx-auto relative section-after ">
            {/* <!-- 2x2 Grid with Shared Borders --> */}
            <div class="w-full h-full grid grid-cols-1 sm:grid-cols-2 border   overflow-hidden ">
              {[1, 2, 3, 4].map(() => {
                return (
                  <div class="w-full h-full  bg-white/5  transition flex items-center justify-center p-1">
                    <div className="  rounded-2xl w-full h-full bg-zinc-950 p-4 border-1 border-white/10 text-white/60">
                      <h3 class="text-lg font-semibold">Frontend Developer</h3>
                      <p class="text-sm  mb-2">
                        Freelance / Remote — 2023–Present
                      </p>
                      <p class="text-sm leading-relaxed">
                        Building responsive, elegant UIs with React, Vue, and
                        Tailwind CSS.
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Experience;

import React from "react";

const Experience = () => {
  const dataExperience = [
    {
      head: "Freelance - Frontend Dev. ",
      small_head: "Infrawave Solutions",
      time: "Feb 2025 – June 2025",
      what_you_do: (
        <>
          Designed and developed two production-ready websites:{" "}
          <a
            href="https://derxo.com"
            target="_blank"
            rel="noopener noreferrer "
            className="text-sky-500 underline"
          >
            derxo.com
          </a>{" "}
          and{" "}
          <a
            href="https://www.infrawavesolutions.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-500 underline"
          >
            infrawavesolutions.com
          </a>
          .
        </>
      ),
    },
    {
      head: "Frontend Developer Intern",
      small_head: "Gravity Coding",
      time: "May 2024 – Jan 2025",
      what_you_do:
        "Worked on teaching and mentoring students in frontend fundamentals, helping them build real projects, and exploring animation techniques to create interactive UI.",
    },
  ];

  return (
    <div>
      <div className="text section-after text-white p-2 ">
        <p className=" tracking-widest uppercase text-pretty text-fuchsia-500 text-sm font-[ibm] font-semibold">
          Experience
        </p>
        <h1 className="max-w-lg text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0">
          My Professional Journey
        </h1>
        <p className="text-xl leading-relaxed text-white/50 pt-5">
          Experience that helped me evolve as a frontend developer — learning,
          building, and improving with every project.
        </p>
      </div>
      <div className="w-full md:h-[30vh] h-full relative ">
        {/* CARDS EXPERIENCE SECTION  */}
        <div className="w-full h-full relative  !mt-10 ">
          <section class="w-full h-full max-w-5xl   mx-auto relative section-after ">
            {/* <!-- 2x2 Grid with Shared Borders --> */}
            <div class="w-full h-full grid grid-cols-1 sm:grid-cols-2 border   overflow-hidden ">
              {dataExperience.map((item, i) => {
                return (
                  <div class="w-full h-full  bg-white/5  transition flex items-center justify-center p-1">
                    <div className="  rounded-2xl w-full h-full bg-zinc-950 p-4 border-1 border-white/10 text-white/60">
                      <h3 class="text-lg font-semibold">{item.head}</h3>
                      <p class="text-sm  mb-2 font-semibold text-amber-500">
                        {item.small_head}
                      </p>
                      <p class="text-sm  mb-2">{item.time}</p>
                      <p class="text-sm leading-relaxed">{item.what_you_do}</p>
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

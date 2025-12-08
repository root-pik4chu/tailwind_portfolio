import React from "react";
import ProjectDivision from "./ProjectDivision";
import image1 from "../../assets/projects_Images/3.png";
import image2 from "../../assets/projects_Images/4.png";
import image3 from "../../assets/projects_Images/5.png";
import image4 from "../../assets/projects_Images/6.png";
import image5 from "../../assets/projects_Images/7.png";
import image6 from "../../assets/projects_Images/8.png";
import image7 from "../../assets/projects_Images/9.png";
import image8 from "../../assets/projects_Images/10.png";
import image9 from "../../assets/projects_Images/11.png";


export default function ProjectDivisionGrid() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and Tailwind.",
      image:image7  , // placeholder image
      
      link: "https://www.infrawavesolutions.com/",
    },
    {
      id: 2,
      title: "Animation Grid",
      description: "Smooth framer-motion grid animation.",
      image:  image8, // placeholder image
   
      link: "https://www.derxo.com/ ",
    },
    ,
    {
      id: 3,
      title: "Scroll Effects",
      description: "GSAP scroll animations demo project.",
      image: image9 , // placeholder image
    
      link: "https://gloryland.netlify.app/",
    },
    {
      id: 4,
      title: "Scroll Effects",
      description: "GSAP scroll animations demo project.",
      image: image4 , // placeholder image
    
      link: "https://ornate-travesseiro-56cb9e.netlify.app/",
    },
    {
      id: 5,
      title: "Creative UI",
      description: "Unique UI concepts using HTML/CSS/JS.",
      image: image5, // placeholder image
      
      link: "https://bettteroff.netlify.app/",
    },
    {
      id: 6,
      title: "Scroll Effects",
      description: "GSAP scroll animations demo project.",
      image:  image6, // placeholder image
      
      link: "https://marvelous-sundae-8448b9.netlify.app/",
    },
    {
      id: 7,
      title: "Creative UI",
      description: "Unique UI concepts using HTML/CSS/JS.",
      image: image3, // placeholder image
      
      link: "https://sweet-kelpie-733a40.netlify.app/",
    },
    
    {
      id: 8,
      title: "Creative UI",
      description: "Unique UI concepts using HTML/CSS/JS.",
      image: image2, // placeholder image
     
      link: "https://ephemeral-malasada-f7bdf9.netlify.app/",
    },
    
    {
      id: 9,
      title: "Creative UI",
      description: "Unique UI concepts using HTML/CSS/JS.",
      image: image1, // placeholder image
      
      link: "https://white-portfoio.netlify.app/",
    },
  ];

  return (
    <div>
      <div className="w-full  ">
        <h1 className="mt-2 text-6xl tracking-tighter text-balance  text-white md:text-7xl lg:text-8xl capitalize has-before-line">
          More Projects
        </h1>
        <h1 className="mt-2 text-2xl tracking-tighter text-balance md:text-2xl lg:text-2xl capitalize text-sky-500 border-white/10 border-b">
          Recent builds and experiments.
        </h1>
      </div>
      <div className="grid md:grid-cols-2 row-auto grid-cols-1 gap-x-12 w-full  !mt-10 ">
        {/* BLOCK 1 */}
        {projects.map((project
        ) => {
          const isEven = project.id % 2 === 0;
          return (
            <div
              key={project.id}
              className={`w-full  border-white/10 border-r border-l  flex ${isEven ? "has-before-line" : "" }flex-col justify-between`}
            >
              <ProjectDivision
                  codepen={null}
                github={null}
                liveLink={project.link}
                imageLink={project.image}
              />
            </div>
          );
        })}
        {
          <div className="w-full border-white/10 border-r border-l has-before-line h-[70vh] flex items-center justify-center">
    {/* You can leave it empty or add placeholder text */}
    {/* <span className="text-white/20 text-4xl">Coming Soon</span> */}
  </div>
        }
      </div>
    </div>
  );
}

import React from 'react'
import ProjectDivision from './ProjectDivision'

export default function ProjectDivisionGrid() {

   const projects = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and Tailwind.",
    image: "https://via.placeholder.com/600x400", // placeholder image
    codepen: "https://codepen.io/yourpen",
    link: "https://example.com"
  },
  {
    id: 2,
    title: "Animation Grid",
    description: "Smooth framer-motion grid animation.",
    image: "https://via.placeholder.com/600x400",
    codepen: "https://codepen.io/another-pen",
    link: "https://example.com"
  },
  {
    id: 3,
    title: "Scroll Effects",
    description: "GSAP scroll animations demo project.",
    image: "https://via.placeholder.com/600x400",
    codepen: "https://codepen.io/test-codepen",
    link: "https://google.com"
  },
  {
    id: 4,
    title: "Creative UI",
    description: "Unique UI concepts using HTML/CSS/JS.",
    image: "https://via.placeholder.com/600x400",
    codepen: "https://codepen.io/design-pen",
    link: "https://example.com"
  },
  {
    id: 5,
    title: "Scroll Effects",
    description: "GSAP scroll animations demo project.",
    image: "https://via.placeholder.com/600x400",
    codepen: "https://codepen.io/test-codepen",
    link: "https://google.com"
  },
  {
    id: 6,
    title: "Creative UI",
    description: "Unique UI concepts using HTML/CSS/JS.",
    image: "https://via.placeholder.com/600x400",
    codepen: "https://codepen.io/design-pen",
    link: "https://example.com"
  }
];



  return (
    <div>
      <div className="w-full  ">
            <h1 className="mt-2 text-6xl tracking-tighter text-balance text-white md:text-7xl lg:text-8xl capitalize">
              More Projects
            </h1>
            <h1 className="mt-2 text-2xl tracking-tighter text-balance md:text-2xl lg:text-2xl capitalize text-sky-500">
              Recent builds and experiments.
            </h1>
          </div>
          <div className="grid md:grid-cols-2 row-auto grid-cols-1 gap-x-12 w-full   ">
            {/* BLOCK 1 */}
            {
               projects.map((project)=>{
                  return (
                     <div key={project.id} className="w-full  border-white/10 border-r border-l has-before-line flex flex-col justify-between">
                        <ProjectDivision 
                           codepen={project.codepen}
                           github={null}
                           liveLink={project.link}
                        />
                     </div>
                  )
               })
            }
          </div>
    </div>
  )
}

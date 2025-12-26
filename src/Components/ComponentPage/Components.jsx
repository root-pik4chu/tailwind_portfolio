import React, {} from "react";
import Empty from "./Empty";
import CodeBlock from "../../reusableComponents/CodeBlock";
import FollowCursorCard from "./FollowCursorCard";
import Division from "./Division";
import ProjectDivision from "./ProjectDivision";
import ProjectDivisionGrid from "./ProjectDivisionGrid";
import Footer from "../footer/Footer";
import image1 from "../../assets/Component_images/1.png";
import image2 from "../../assets/Component_images/2.png";
import image3 from "../../assets/Component_images/3.png";
import image4 from "../../assets/Component_images/4.png";
import image5 from "../../assets/Component_images/5.png";
import image6 from "../../assets/Component_images/6.png";
import image7 from "../../assets/Component_images/7.png";
import image8 from "../../assets/Component_images/8.png";
import image9 from "../../assets/Component_images/9.png";
import image10 from "../../assets/Component_images/10.png";
import image11 from "../../assets/Component_images/11.png";
import image12 from "../../assets/Component_images/12.png";
import image13 from "../../assets/Component_images/13.png";
// import image9 from "../../assets/Component_images/9.png";
export default function Components() {
   const mini_projects = [
      {
        id: 1,
        title: "Portfolio Website",
        description: "A modern portfolio website built with React and Tailwind.",
        image:image1  , // placeholder image
        
        link: "https://codepen.io/Sahil-Saundale/pen/qEZLEWJ",
      },
      {
        id: 2,
        title: "Animation Grid",
        description: "Smooth framer-motion grid animation.",
        image:  image2, // placeholder image
     
        link: "https://codepen.io/Sahil-Saundale/pen/qEZJxPj",
      },
      ,
      {
        id: 3,
        title: "Scroll Effects",
        description: "GSAP scroll animations demo project.",
        image: image3 , // placeholder image
      
        link: "https://codepen.io/Sahil-Saundale/pen/NPNExLy",
      },
      {
        id: 4,
        title: "Scroll Effects",
        description: "GSAP scroll animations demo project.",
        image: image4 , // placeholder image
      
        link: "https://codepen.io/Sahil-Saundale/pen/EaKpOgd",
      },
      {
        id: 5,
        title: "Creative UI",
        description: "Unique UI concepts using HTML/CSS/JS.",
        image: image5, // placeholder image
        
        link: "https://codepen.io/Sahil-Saundale/pen/zxqLPNM",
      },
      {
        id: 6,
        title: "Scroll Effects",
        description: "GSAP scroll animations demo project.",
        image:  image6, // placeholder image
        
        link: "https://codepen.io/Sahil-Saundale/pen/qEZKYGp",
      },
      {
        id: 7,
        title: "Creative UI",
        description: "Unique UI concepts using HTML/CSS/JS.",
        image: image7, // placeholder image
        
        link: "https://codepen.io/Sahil-Saundale/pen/qEZKYGp",
      },
      
      {
        id: 8,
        title: "Creative UI",
        description: "Unique UI concepts using HTML/CSS/JS.",
        image: image8, // placeholder image
       
        link: "https://codepen.io/Sahil-Saundale/pen/raepZJK",
      },
      
      {
        id: 9,
        title: "Creative UI",
        description: "Unique UI concepts using HTML/CSS/JS.",
        image: image9, // placeholder image
        
        link: "https://codepen.io/Sahil-Saundale/pen/EaVrzqW",
      },
      
      {
        id: 10,
        title: "Creative UI",
        description: "Unique UI concepts using HTML/CSS/JS.",
        image: image10, // placeholder image
        
        link: "https://codepen.io/Sahil-Saundale/pen/xbwdEZp",
      },
      
      {
        id: 11,
        title: "Creative UI",
        description: "Unique UI concepts using HTML/CSS/JS.",
        image: image11, // placeholder image
        
        link: "https://codepen.io/Sahil-Saundale/pen/gbamBWm",
      },
      {
        id: 12,
        title: "Creative UI",
        description: "Unique UI concepts using HTML/CSS/JS.",
        image: image12, // placeholder image
        
        link: "https://codepen.io/Sahil-Saundale/pen/MYegNWV",
      },
      {
        id: 13,
        title: "Creative UI",
        description: "Unique UI concepts using HTML/CSS/JS.",
        image: image13, // placeholder image
        
        link: "https://codepen.io/Sahil-Saundale/full/EayayRb",
      }
      
    ];


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
              time saving things 
            </h1>
          </div>
          {/* GRID */}
      
            <div className="grid md:grid-cols-4 row-auto grid-cols-1 gap-x-12 w-full  !mt-10 has-before-line">
                    {/* BLOCK 1 */}
                    {
                       
                    mini_projects.reverse().map((project
                    ) => {
                      const isEven = mini_projects.id % 4 === 0;
                      return (
                        <div
                          key={project.id}
                          className={`w-full  border-white/10 border-r border-l  flex ${isEven ? "has-before-line" : "" }flex-col justify-between`}
                        >
                          <Division 
                             codepen={project.link}
                github={null}
                liveLink={null}
                imageLink={project.image}
                          />
                              
                         
                        </div>
                      );
                    })}
                    {
              //         <div className="w-full border-white/10 border-r border-l  md:h-[70vh] flex items-center justify-center">
              //   {/* You can leave it empty or add placeholder text */}
              //   {/* <span className="text-white/20 text-4xl">Coming Soon</span> */}
              // </div>
                    }
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

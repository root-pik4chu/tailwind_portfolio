import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import ConnectButton from "./ConnectButton";
import { motion, AnimatePresence, easeIn } from "framer-motion";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const driveUrl =
    "https://drive.google.com/file/d/1JipHP6kzQyIFky1dLzUR_98BRb6DOHu0/view";
  const codepenUrl = "https://codepen.io/Sahil-Saundale";

 const item = (delay) => ({
  initial: { x: 30 },
  animate: { 
 
    x: 0, 
    transition: { 
      duration: 0.6, 
      delay,
      ease: [0.84 , 0 , 0.28 , 1]
    }
  },
  exit: {  x: 0 ,
   
  }
});


  return (
    <div>
      <div className="w-full h-[8vh] fixed top-0 z-20 border-b border-white/10 flex items-center justify-center capitalize bg-zinc-950">
        <div className="md:w-[52%] w-full h-full flex justify-between ">
          <div className="w-full h-full relative text-white px-[2.5vw] flex items-center justify-between">
            {/* <TextSlider /> */}
            <h1 className="md:text-3xl w-full h-full text-sm leading-none tracking-tight flex items-center justify-start">
              Sahil Saundale
            </h1>
          </div>
          <div className="w-full h-full hidden md:flex items-center justify-end text-white ">
            <div className="md:w-10 w-5 h-10 flex items-center justify-center relative">
              ||श्री||
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="w-[48%] h-full hidden md:flex items-center justify-between gap-6 text-white ">
          <div className="w-[80%] h-full md:flex items-center justify-end gap-4 text-white text-sm">
            <Link to="/">Home</Link>
            <Link to="/Components">Components</Link>
            <Link to="/More_Projects">more_Projects</Link>
            <a href={codepenUrl}>Codepen</a>
            <div><ConnectButton /></div>
          </div>

          <div className="w-[20%] h-full items-center justify-center flex">
            <div className="w-full h-full relative flex items-center justify-center">
              <a href={driveUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
                <ButtonComponent />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden w-[15%] h-full flex items-center justify-center text-white cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <div className="relative w-7 h-2  flex flex-col justify-between">
            <span
              className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${
                open ? "rotate-45 translate-y-[3px]" : ""
              }`}
            ></span>
            <span
              className={`block h-[2px] bg-white rounded-full transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            ></span>
          </div>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <AnimatePresence>
  {open && (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: "0%" }}
      exit={{ x: "100%"}}
      transition={{  duration: 0.9 ,ease: [0.84 , 0 , 0.28 , 1]}}
      className="fixed top-[8vh] right-0 h-[92vh] w-[70vw] bg-zinc-950 text-white z-30 p-2 py-[10vh] flex flex-col gap-4 text-2xl"
    >
     <motion.div {...item(0.15)}>


          <Link onClick={() => setOpen(false)} to="/">Home</Link>
     </motion.div>
       
      <motion.div {...item(0.25)}>
        <Link onClick={() => setOpen(false)} to="/Components">Components</Link>
      </motion.div>
      <motion.div {...item(0.30)}>
        <Link onClick={() => setOpen(false)} to="/More_Projects">more_Projects</Link>
      </motion.div>
      <motion.div {...item(0.35)}>


      <a onClick={() => setOpen(false)} href={codepenUrl}>Codepen</a>
      </motion.div>

      <div className=""><ConnectButton /></div>

      <a
        href={driveUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => setOpen(false)}
        className="md:w-[120px] w-[10vw] mt-4"
      >
        <ButtonComponent />
      </a>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
};

export default NavBar;

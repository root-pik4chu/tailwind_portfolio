"use client"

import React, { useState,useEffect } from "react"
import { motion, AnimatePresence, circOut } from "framer-motion"
import linkedIn from "../../assets/Link.svg"
import x from "../../assets/x-white.svg"
import github from "../../assets/github_dark.svg"



export default function ConnectButton() {
   const [open, setOpen] = useState(false)
   useEffect(() => {
  const closeOnScroll = () => setOpen(false)

  if (open) {
    window.addEventListener("scroll", closeOnScroll)
  }

  return () => window.removeEventListener("scroll", closeOnScroll)
}, [open])
  

  return (
    <div className="md:w-full md:h-screen flex items-center md:justify-center">

      {/* Trigger */}
      <div 
        className="cursor-pointer text-white"
        onClick={() => setOpen(!open)}
      >
        connect
      </div>

      <AnimatePresence>
        {open && (
          <>
            {/* Dark Blur Background */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-[90]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 ,duration: 0.15 ,ease:"circIn" }}
              transition={{ ease:"circOut", duration: 0.15 }}
              onClick={() => setOpen(false)}
            />

            {/* Popup */}
            <motion.div
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         w-80 h-28 bg-white/5 border border-white/10 
                         rounded-xl backdrop-blur-md flex items-center justify-center text-white z-[100]"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <div className="w-full h-[4vw]  flex items-center justify-center gap-10 py-2">
                <a href="https://www.linkedin.com/in/sahil-saundale/">
                  <div className="w-[2vw] h-[2vw] flex flex-col items-center justify-center gap-2">
                  <img src={linkedIn} alt="" />
                  <p>linkedIn</p>
                </div>
                </a>
                <a href="https://google.com">
                  <div className="w-[2vw] h-[2vw] flex flex-col items-center justify-center gap-2">
                 
                    <img src={x} alt="" />
                  <p>x</p>
                  

                </div>
                </a>
                <a href="https://github.com/root-pik4chu">
                  <div className="w-[2vw] h-[2vw] flex flex-col items-center justify-center gap-2">
                 
                    <img src={github} alt="" />
                  <p>Github</p>
                  

                </div>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  )
}

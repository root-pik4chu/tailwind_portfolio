"use client"

import React, { useState,useEffect } from "react"
import { motion, AnimatePresence, circOut } from "framer-motion"

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
    <div className="w-full h-screen flex items-center justify-center">

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
                         w-80 h-32 bg-white/5 border border-white/10 
                         rounded-xl backdrop-blur-md flex items-center justify-center text-white z-[100]"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              popup
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  )
}

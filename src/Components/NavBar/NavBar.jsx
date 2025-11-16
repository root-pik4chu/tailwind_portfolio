import React from 'react'
import ganesha from '../../assets/tech/ganesha.png'
const NavBar = () => {
  return (
    <div>
      <div className="w-full h-[8vh] fixed top-0 z-20  border-b border-white/10 bg-zinc-950 flex items-center justify-center">

        <div className="w-full h-full relative text-white px-[2.5vw] flex items-center justify-between">
          <h1 className="text-3xl tracking-tight">Sahil Saundale</h1>
        </div>
        <div className="w-full h-full flex items-end justify-center">
          <div className="w-10 h-10 relative">
            <img src={ganesha} alt="" />
          </div>
        </div>
        <div className="w-full h-full "></div>
      </div>
    </div>
  )
}

export default NavBar

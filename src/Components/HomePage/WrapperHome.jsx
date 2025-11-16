import React from 'react'
import HomePage from './HomePage'

export default function WrapperHome() {
  return (
    <div>
      <div className="w-full h-full relative">
         {/* upper free space */}
            <div className=" w-full  h-[20vh] hidden  md:grid grid-cols-3 relative  gap-[50px]">
              <div className="w-full h-full col-span-1 border-r border-white/10"></div>
              <div className="w-full h-full col-span-1 border-l border-white/10"></div>
            </div>
            <HomePage />
            
      </div>
    </div>
  )
}

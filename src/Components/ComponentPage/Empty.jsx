import React from 'react'

export default function Empty() {
  return (
    <div>
       <div className="w-full h-64 flex items-center justify-center  ">
      <h1 className="group cursor-pointer text-[1.5vw] font-bold tracking-wide text-white overflow-hidden">

        {/* Wrapper */}
        <span className="block relative">

          {/* Original text */}
          <span className="block transition-transform duration-300 group-hover:-translate-y-full">
            Hover Magic
          </span>

          {/* Hover text */}
          <span className="block absolute top-0 left-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-purple-400">
            Hover Magic
          </span>

        </span>
      </h1>
    </div>
    </div>
  )
}

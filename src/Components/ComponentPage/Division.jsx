import React from 'react'

export default function Division({codepen,github,liveLink,imageLink}) {
  return (
    <div>
      <div className="w-full h-80 relative ">
         <div className="w-full h-full  px-2">
            <div className="w-full h-[60%] relative py-2 ">
               <div className="w-full h-full relative rounded-md overflow-hidden">
                  <img className='w-full h-full object-cover  ' src={imageLink} alt="" />
               </div>
            </div>
            <div className="w-full h-20% flex gap-2 py-2 has-before-line">
               
               {
                  codepen && <a href={codepen} target="_blank" rel="noopener noreferrer" className='w-fit h-fit px-2 py-1 bg-amber-700 hover:bg-amber-600 rounded-md text-xs'>codepen</a>
               } 

               {
                  github && <a href="http://google.com" target="_blank" rel="noopener noreferrer" className='w-fit h-fit px-2 py-1 bg-blue-800 hover:bg-blue-700 rounded-md text-xs'>Github</a>
               }

               {liveLink && <a href="http://google.com" target="_blank" rel="noopener noreferrer" className='w-fit h-fit px-2 py-1 bg-red-600 rounded-md text-xs hover:bg-red-700'>Live Link {"->"}</a>}
            </div>
            <div className="w-full h-[20%] has-before-line has-after-line py-2">
               <p className='leading-none'>this is line for the information purpose </p>
            </div>
         </div>
      </div>
    </div>
  )
}

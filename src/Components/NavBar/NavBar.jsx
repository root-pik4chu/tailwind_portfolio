import React from 'react'
// import ganesha from '../../assets/tech/ganesha.png'
import { Link } from 'react-router-dom'
import ButtonComponent from './ButtonComponent'
const NavBar = () => {
  const driveUrl = "https://drive.google.com/file/d/1JipHP6kzQyIFky1dLzUR_98BRb6DOHu0/view";
  return (
    <div>
      <div className="w-full h-[8vh] fixed top-0 z-20  border-b border-white/10 bg-zinc-950 flex items-center justify-center capitalize">

        <div className="w-full h-full relative text-white px-[2.5vw] flex items-center justify-between">
          <h1 className="md:text-3xl w-full h-full text-sm leading-none tracking-tight flex items-center justify-start">Sahil Saundale</h1>
        </div>
        <div className="w-full h-full hidden md:flex items-center justify-center text-white">
          <div className="md:w-10 w-5 h-10 flex items-center justify-center relative">
            {/* <img src={ganesha} alt="" /> */}
            ||श्री||
          </div>
        </div>
        <div className="w-full h-full hidden md:flex items-center justify-start gap-4 text-white ">
            {/* <h1>Components</h1> */}
            <Link to="/">Home</Link>
            <Link to="/Components">Components</Link>
            <Link to="/More_Projects">more_Projects</Link>
            
            {/* <h1>Experiments</h1> */}
            {/* <h1>Template</h1> */}

            <div className="w-full h-full  items-center justify-center flex">
              <div className="w-full h-full relative flex items-center justify-center">
      <a
        href={driveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <ButtonComponent />
      </a>
    </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar

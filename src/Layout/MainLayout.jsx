import React from 'react'
import {Outlet, useLocation} from "react-router-dom"
import NavBar from '../Components/NavBar/NavBar'
import Footer from '../Components/footer/Footer'
import { ReactLenis, useLenis } from 'lenis/react'
export default function MainLayout() {
   
   const location = useLocation();
   const isHome = location.pathname === "/"
  return (
    <div>
       <ReactLenis root 
        options={{
            lerp: 0.1,
            wheelMultiplier: 1.5
          }}
       />
      <NavBar />

      <div className="max-w-screen  overflow-x-hidden bg-zinc-950">
        
        <div className="grid min-h-dvh grid-cols-1 grid-rows-[1fr_1px_auto_1px_auto] justify-center [--gutter-width:--spacing(6)] sm:grid-cols-[var(--gutter-width)_minmax(0,var(--breakpoint-xl))_var(--gutter-width)] lg:[--gutter-width:--spacing(10)]">
          <div className="col-start-1 row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 sm:block dark:[--pattern-fg:var(--color-white)]/10"></div>
          
          <Outlet />
          {/* <WrapperHome /> */}
          {/* <HomePage /> */}
          {/* <Experiment /> */}
          {/* <Footer /> */}

          <div className="row-span-full row-start-1 hidden border-x border-x-(--pattern-fg) bg-[image:repeating-linear-gradient(315deg,_var(--pattern-fg)_0,_var(--pattern-fg)_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed [--pattern-fg:var(--color-black)]/5 sm:col-start-3 sm:block dark:[--pattern-fg:var(--color-white)]/10"></div>
        </div>
      </div>
      {
         !isHome && <Footer />
      }
    </div>
  )
}

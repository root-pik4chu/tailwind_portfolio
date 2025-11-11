import React from 'react'
import GridParticles from '../GridParticles'
import luffy from "../../../assets/luffy.jpg";
import signature from "../../../assets/signature.svg";
export default function ImageAndSignature() {
  return (
    <div>
      <div className="w-full h-[60vh]  relative">
                      <div className="w-[90%] h-[40vh] relative  flex items-center justify-center">
                        <GridParticles
                          imageSrc={luffy}
                          gap={6}
                          minR={0.8}
                          maxR={1.5}
                          hoverRadius={90}
                          moveProb={0.4}
                          maxSteps={3}
                          speedMinHz={0.5}
                          speedMaxHz={2}
                          showHoverCircle={false}
                          maskCircle={true}
                          sizeScale={0.6}
                        />
                      </div>
                      <div className="w-full h-[10vh] relative flex flex-col items-center justify-start !mt-20  text-white/50 ">
                        <div className="w-[40 %] h-full  left-5 ">
                          <h1 className="text-xs tracking-tight font-imb uppercase font-medium ">
                            sahil saundale ,<br></br> user of Tailwind CSS
                          </h1>
                          <h1 className="text-xs tracking-tight font-imb uppercase font-medium"></h1>
                        </div>
                        {/* <h1>root</h1> */}
                        <div className="absolute w-[10vw] h-full -top-[180%] left-10 -rotate-12 ">
                          <img src={signature} alt="" />
                        </div>
                      </div>
                    </div>
    </div>
  )
}

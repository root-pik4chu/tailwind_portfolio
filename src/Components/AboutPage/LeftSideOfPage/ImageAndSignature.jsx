import React from 'react'
import GridParticles from '../GridParticles'
import luffy from "../../../assets/luffy.jpg";
import signature from "../../../assets/signature.svg";
export default function ImageAndSignature() {
  return (
    <div>
      <div className="w-full md:h-[40vw]  relative md:!mt-10 !mt-[20vh]">
                      <div className="w-full md:h-[30vh] h-[20vh] relative  flex items-center justify-center ">
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
                        <div className="w-[40%] h-full  left-5 ">
                          <h1 className="text-xs tracking-tight font-imb uppercase font-medium ">
                            sahil saundale ,<br></br> user of Tailwind CSS
                          </h1>
                          <h1 className="text-xs tracking-tight font-imb uppercase font-medium"></h1>
                        </div>
                        {/* <h1>root</h1> */}
                        <div className="absolute md:w-[10vw] w-[40vw] h-full md:-top-[180%] -top-[140%] md:left-10 left-0 -rotate-12 ">
                          <img src={signature} alt="" / >
                        </div>
                      </div>
                    </div>
    </div>
  )
}

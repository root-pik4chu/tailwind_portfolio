import React from 'react'

export default function ProjectSection() {
  return (
    <div>
       <div className="w-full ">
                            <div className="text section-after !mt-15 text-white py-5 ">
                              <p className=" tracking-widest uppercase text-pretty text-pink-500 text-sm font-[ibm] font-semibold">Projects</p>
                              <h1 className="max-w-lg text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0 ">
                                Things I Build
                              </h1>
                                {/* <p className="text-xl leading-relaxed text-white/50 pt-5">
                                
                                </p> */}
                            </div>
                          </div>
      
      <div className="w-full h-[60vh] relative bg-zinc-900 !mt-10 section-after">
                      <section class="w-full h-full relative mx-auto px-2 py-2">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 h-full ">
                          {/* <!-- Left Column --> */}
                          <div class="flex flex-col h-full gap-2">
                            {/* <!-- Top Section --> */}
                            <div class="flex-1 bg-zinc-950 border border-white/10 rounded-xl flex items-center justify-center text-white/70">
                              <p>Left Top</p>
                            </div>
                            {/* 
      <!-- Bottom Row (2 divisions) --> */}
                            <div class="grid grid-cols-2 gap-2 h-[30%]">
                              <div class="bg-zinc-950 border border-white/10 rounded-xl flex items-center justify-center text-white/70">
                                <p>Bottom Left 1</p>
                              </div>
                              <div class="bg-zinc-950 border border-white/10 rounded-xl flex items-center justify-center text-white/70">
                                <p>Bottom Left 2</p>
                              </div>
                            </div>
                          </div>

                          {/* <!-- Right Column --> */}
                          <div class="flex flex-col h-full gap-2">
                            {/* <!-- Top Section --> */}
                            <div class="flex-1 bg-zinc-950 border border-white/10 rounded-xl flex items-center justify-center text-white/70">
                              <p>Right Top</p>
                            </div>

                            {/* <!-- Bottom Row (2 divisions) --> */}
                            <div class="grid grid-cols-2 gap-2 h-[30%]">
                              <div class="bg-zinc-950 border border-white/10 rounded-xl flex items-center justify-center text-white/70">
                                <p>Bottom Right 1</p>
                              </div>
                              <div class="bg-zinc-950 border border-white/10 rounded-xl flex items-center justify-center text-white/70">
                                <p>Bottom Right 2</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>

    </div>
  )
}

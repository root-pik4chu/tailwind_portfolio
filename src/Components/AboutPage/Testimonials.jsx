import React from 'react'

export default function Testimonials() {
  return (
    <div>
      <div className="w-full ">
        <div className="text section-after !mt-15 text-white py-5 ">
          <p className=" tracking-widest uppercase text-pretty text-pink-500 text-sm font-[ibm] font-semibold">
            Testimonials
          </p>
          <h1 className="max-w-lg text-[2.5rem]/10 font-medium tracking-tighter text-balance max-sm:px-4 2xl:mt-0 ">
            Client Words
          </h1>
          {/* <p className="text-xl leading-relaxed text-white/50 pt-5">
                                
                                </p> */}
        </div>
      </div>

      <div className="w-full  h-full  relative  !mt-10 section-after bg-zinc-900 ">
        <section class="w-full h-full relative mx-auto px-2 py-2 ">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-2 h-full ">
            <div className="w-full h-76 bg-zinc-950 text-white rounded-xl leading-tight flex flex-col justify-between p-4">
               <h1>Sahil truly elevated our brand with the animated website he built for Infrawave Solutions. Every scroll and interaction feels intentional and polished. He’s not just a developer—he understands user experience and delivers with precision. Highly recommended!</h1>
               <h1 className='text-amber-600 text-xl'>Infrawave Solutions</h1>
            </div>
            <div className="w-full h-76 bg-zinc-950 text-white rounded-xl  leading-tight flex flex-col justify-between p-4">
               <h1>After Sahil revamped the Derxo website, the feedback we got from users was incredible—faster load times, better navigation, and a far more engaging experience. His frontend work didn’t just look good, it actually improved how people interacted with our brand.</h1>
               <h1 className='text-amber-600 text-xl'>Derxo</h1>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

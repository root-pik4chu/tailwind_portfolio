import React from "react";

const Simply_meet = () => {
  return (
    <div>
      <div className=" w-full h-[60vh]   relative ">
        <div className="w-full h-[50vh] relative ">
          <div className=" w-full border-b border-white/10 p-2 max-md:px-4 relative flex flex-col ">
            <p className="text-sm text-sky-500 font-semibold uppercase font-[ibm] ">
              By the user of Tailwind CSS
            </p>
            <h1 className="mt-2 text-6xl tracking-tighter text-balance text-white md:text-7xl lg:text-8xl capitalize">
              simplicity meets precision.
            </h1>
            <p className="text-sm w-[50%] text-white/50 tracking-wider ">
              I skipped the name as the headline__No bios. No fluff. Just{" "}
              <span className="underline ">the portfolio.</span>
            </p>
            {/* <p className="text-sm text-white/50 tracking-wider ">
              {" "}
              No bios. No fluff. Just the portfolio.
            </p> */}
          </div>
          <div className="w-full  flex items-end justify-center ">
            <div
              className="w-full h-[10vh]  border-t border-b  border-white/10 flex items-center px-2 has-after-line
                          "
            >
              {/* try harder to find perfect spot */}
              <div class="w-full max-w-sm">
                <div class="relative flex items-center">
                  {/* <!-- Mail Icon --> */}
                  <span class="absolute left-3 inset-y-0 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-4 h-4 text-zinc-900"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.09 1.916l-7.5 4.5a2.25 2.25 0 01-2.32 0l-7.5-4.5A2.25 2.25 0 012.25 6.993V6.75"
                      />
                    </svg>
                  </span>

                  {/* <!-- Input --> */}
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    class="block w-full rounded-full border border-zinc-300 bg-zinc-100 pl-9 pr-24 py-2 text-sm text-zinc-900 placeholder:text-zinc-900 focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 outline-none"
                  />

                  {/* <!-- Button --> */}
                  <button
                    type="button"
                    class="absolute right-1.5 rounded-full bg-zinc-900 px-4 py-1.5 text-sm font-medium text-white hover:bg-zinc-800 transition"
                    onClick={() => {
                      const userEmail = document.getElementById("email").value;

                      const myEmail = "sahilsaundale@gmail.com";

                      const subject = encodeURIComponent(
                        "New Connection Request"
                      );
                      const body = encodeURIComponent(
                        `Hello,\n\nI want to connect with you.\n\nMy email: ${userEmail}\n`
                      );

                      window.location.href = `mailto:${myEmail}?subject=${subject}&body=${body}`;
                    }}
                  >
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simply_meet;

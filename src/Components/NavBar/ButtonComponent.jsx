import React from "react";

const ButtonComponent = () => {
  return (
    <>
      <style>{`
        .special-btn {
          position: relative;
          padding: 0.5vw 1vw;
          font-size: 0.9vw;
          text-transform: uppercase;
         //  border: none;
          cursor: pointer;
         //  background: color-mix(in oklch, canvas, canvasText 4%);
         //  color: color-mix(in oklch, canvasText, #0000 25%);
          transition: background 0.26s ease-out, color 0.26s ease-out;
        }

        .special-btn:focus-visible {
          outline: color-mix(in oklch, canvasText, #0000) dashed 1px;
          outline-offset: 0.5rem;
        }

        .special-btn:is(:hover, :focus-visible) {
         //  color: canvasText;
         //  background: color-mix(in oklch, canvas, canvasText 10%);
        }

        .special-btn:is(:hover, :focus-visible) .corners span:nth-of-type(even) {
          transform: translateY(100cqh);
        }

        .special-btn:is(:hover, :focus-visible) .corners span:nth-of-type(odd) {
          transform: translateX(100cqi);
        }

        .special-btn:is(:hover, :focus-visible) .corners span {
          transition: transform 0.26s 0.12s ease-out;
        }

        .special-btn:is(:hover, :focus-visible) .corners span svg {
          rotate: 360deg;
          transition: rotate 0.26s 0.12s ease-out;
        }

        .special-btn .corners {
          pointer-events: none;
          container-type: size;
          position: absolute;
          inset: 0;
          z-index: 3;
        }

        .special-btn .corners span {
          width: 10px;
          height: 10px;
          display: grid;
          place-items: center;
          offset-path: border-box;
        }

        .special-btn .corners span svg {
          width: 100%;
        }

        .special-btn .corners span:nth-of-type(1) { offset-distance: 0; }
        .special-btn .corners span:nth-of-type(2) { offset-distance: 100cqi; }
        .special-btn .corners span:nth-of-type(3) { offset-rotate: 180deg; offset-distance: calc(100cqi + 100cqh); }
        .special-btn .corners span:nth-of-type(4) { offset-rotate: 180deg; offset-distance: -100cqh; }
      `}</style>

      <button className="special-btn bg-zinc-800/20 text-zinc-300 textsemi border-dashed border-1 border-zinc-400" aria-label="Get access">
        <span className="corners">
          {[...Array(4)].map((_, i) => (
            <span key={i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5v14" />
              </svg>
            </span>
          ))}
        </span>
        <span className="font-semibold">Resume</span>
      </button>
    </>
  );
};

export default ButtonComponent;

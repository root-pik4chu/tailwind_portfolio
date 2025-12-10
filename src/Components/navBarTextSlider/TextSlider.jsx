import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TextSlider() {
  const listRef = useRef(null);
  const height = 50;
  let index = 0;

  useEffect(() => {
    const list = listRef.current;

    function slideNext() {
      index++;

      gsap.to(list, {
        y: -index * height,
        duration: 0.6,
        ease: "power3.inOut",
        onComplete: () => {
          if (index === list.children.length - 1) {
            const first = list.children[0];
            list.appendChild(first);

            gsap.set(list, { y: -(index - 1) * height });

            index--;
          }
        }
      });

      gsap.delayedCall(1.4, slideNext);
    }

    slideNext();
  }, []);

  return (
    <div
      style={{
        height: "50px",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#111",
      }}
    >
      <div
        ref={listRef}
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: "40px",
          color: "white",
          fontFamily: "Arial",
        }}
      >
        <div style={{ height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>Text One</div>
        <div style={{ height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>Text Two</div>
        <div style={{ height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>Text Three</div>
        <div style={{ height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>Text Four</div>
        <div style={{ height: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>Text Five</div>
      </div>
    </div>
  );
}

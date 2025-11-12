import { useEffect } from "react";

export default function useAnimatedFavicon(frames, interval = 200) {
  useEffect(() => {
    if (!frames || frames.length === 0) return;

    const link =
      document.querySelector("link[rel~='icon']") || document.createElement("link");
    link.rel = "icon";
    document.head.appendChild(link);

    let i = 0;
    const timer = setInterval(() => {
      link.href = frames[i % frames.length];
      i++;
    }, interval);

    return () => clearInterval(timer);
  }, [frames, interval]);
}

import { useEffect, useRef } from "react";

const FLASH_KEYFRAMES: Keyframe[] = [
  { boxShadow: "0 0 0 2px #f59e0b, 0 0 20px 4px rgba(245, 158, 11, 0.55)", transform: "scale(1.015)" },
  { boxShadow: "0 0 0 2px rgba(245, 158, 11, 0), 0 0 0 0 rgba(245, 158, 11, 0)", transform: "scale(1)" },
];

// Glows the element on every commit, so wasted re-renders are visible
export function useRenderFlash<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    ref.current?.animate(FLASH_KEYFRAMES, { duration: 900, easing: "ease-out" });
  });

  return ref;
}

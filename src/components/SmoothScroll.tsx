"use client";

import Lenis from "lenis";
import { useEffect } from "react";

let lenisInstance: Lenis | null = null;

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      smoothWheel: true,
    });

    lenisInstance = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return null;
}

export { lenisInstance };
"use client";
import { useEffect, useRef } from "react";
import About from "./components/about";
import Landing from "./components/landing";

export default function Home() {
  const lastScrollY = useRef(0);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (isScrolling.current) return;

      isScrolling.current = true;
      const scrollingUp = event.deltaY < 0;
      const scrollingDown = event.deltaY > 0;
      if (scrollingUp) {
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      } else if (scrollingDown) {
        requestAnimationFrame(() => {
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        });
      }
      setTimeout(() => {
        isScrolling.current = false;
      }, 750);
    };

    const handleTouchStart = (event: TouchEvent) => {
      lastScrollY.current = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const currentY = event.touches[0].clientY;
      if (currentY > lastScrollY.current) {
        // User is scrolling up
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      } else if (currentY < lastScrollY.current) {
        // User is scrolling down
        requestAnimationFrame(() => {
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        });
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("wheel", handleWheel);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="flex-col items-center justify-items-center min-h-screen p-8 pb-8 font-[family-name:var(--font-geist-sans)]">
      <Landing />
      <About />
    </div>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const About = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isIframeVisible, setIsIframeVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIframeVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (iframeRef.current) {
      observer.observe(iframeRef.current);
    }

    return () => {
      if (iframeRef.current) {
        observer.unobserve(iframeRef.current);
      }
    };
  }, []);

  return (
    <div
      id="about"
      className="relative flex flex-col justify-center items-center h-screen gap-4 text-center text-lightblue font-pixel font-bold"
    >
      <Link href="#" className="text-5xl">
        ^
      </Link>
      <p className="text-sm">(use wasd or the arrow keys to move around)</p>
      <iframe
        ref={iframeRef}
        className="w-3/4 h-1/2"
        title="dorm"
        src={
          isIframeVisible
            ? "https://itch.io/embed-upload/7100736?color=282d3c"
            : ""
        }
        tabIndex={-1}
      ></iframe>
      <h2 className="text-xl">current location: los angeles</h2>
      <ul className="text-left">
        <li>* computer science @ lmu</li>
        <li>* swe intern @ google</li>
        <li>* guitarist & video editor</li>
      </ul>
    </div>
  );
};

export default About;

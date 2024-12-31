"use client";
import { useEffect, useRef, useState } from "react";

const Game = () => {
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
    <div className="hidden sm:flex items-center justify-center p-6 font-pixel font-bold">
      <div className="flex flex-col items-center justify-center w-full h-full p-8 gap-4 bg-darkblue rounded-3xl shadow-lg overflow-hidden">
        <iframe
          ref={iframeRef}
          title="dorm"
          src={
            isIframeVisible
              ? "https://itch.io/embed-upload/7100736?color=282d3c"
              : ""
          }
          allowFullScreen
          width="640"
          height="380"
        ></iframe>
        <p className="text-lightblue">
          use wasd or the arrow keys to move around
        </p>
      </div>
    </div>
  );
};

export default Game;

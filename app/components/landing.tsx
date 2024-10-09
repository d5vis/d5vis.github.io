"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useTransform, useScroll } from "framer-motion";

const Landing = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100, 200], [1, 1, 0]);

  return (
    <main id="landing" className="h-screen">
      <div className="relative z-10 flex w-full justify-between">
        <h1 className="text-xl">
          <b>@d5vis</b>
        </h1>
        <div className="flex gap-4">
          <Link href="#about" className="text-xl">
            <b>about</b>
          </Link>
          <Link
            href="https://docs.google.com/document/d/1gN_Eksicl5UHZw_tF7JI5SArSFH-Ex3Yp_4FYe6eotE/pub"
            target="_blank"
            className="text-xl"
          >
            <b>resume</b>
          </Link>
          <Link
            href="https://github.com/d5vis"
            target="_blank"
            className="text-xl"
          >
            <b>github</b>
          </Link>
        </div>
      </div>
      <motion.div style={{ opacity }} className="absolute inset-0 z-0">
        <Image
          className="z-0 object-cover"
          src="/images/d5vis.jpg"
          alt="d5vis"
          fill
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background opacity-100"></div>
        <div className="flex justify-center items-center">
          <Link href="#about" className="absolute bottom-8 z-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Link>
        </div>
      </motion.div>
    </main>
  );
};

export default Landing;

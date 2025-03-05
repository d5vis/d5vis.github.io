import type { Config } from "tailwindcss";
import type { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/images/d5vis.jpg')",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        davblue: "var(--davblue)",
        lightblue: "var(--lightblue)",
        darkblue: "var(--darkblue)",
      },
      fontFamily: {
        pixel: "var(--font-pixel)",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        spin: "spin 5s linear infinite",
      },
      animationPlayState: {
        paused: "paused",
        running: "running",
      },
    },
  },
  plugins: [
    require("tailwindcss-motion"),
    require("tailwindcss-intersect"),
    require("./plugins/animationPlayStatePlugin"),
  ],
};
export default config;

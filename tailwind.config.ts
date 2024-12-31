import type { Config } from "tailwindcss";

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
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a3e3e",
          dark: "#0f2525",
          light: "#254545",
        },
        accent: {
          DEFAULT: "#c4ff61",
          dark: "#a8e04d",
          light: "#d4ff8a",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        display: ["var(--font-display)"],
        manrope: ["var(--font-manrope)"],
        inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "375px",
        "3xl": "1600px",
      },
      colors: {
        background: "#FDFDFD", // Clean off-white
        foreground: "#111111", // Deep off-black
        primary: "#111111",
        purple: {
          light: "#E9D5FF", // Subtle lavender
          DEFAULT: "#A855F7", // Refined elegant purple
          dark: "#581C87", // Deep violet
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

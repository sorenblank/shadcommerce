import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Lexend: ["var(--font-lexend)", "sans-serif"],
        LexendGiga: "var(--font-lexend-giga)",
        LexendDeca: "var(--font-lexend-decagram)",
        Inter: "var(--font-inter)"
      },
    },
  },
  plugins: [],
};
export default config;

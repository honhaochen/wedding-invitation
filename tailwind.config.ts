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
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        "off-white": "#FFF4EC",
        "off-white-dark": "#EDC0A9",
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      fontFamily: {
        display: ["Papyrus", "ui-serif"],
        body: ["Comic Sans MS", "Comic Sans", "ui-sans-serif"],
        chinese: [
          "Yuanti SC",
          "Hiragino Kaku Gothic Pro",
          "WenQuanYi Zen Hei",
          "微軟正黑體",
          "蘋果儷中黑",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      animation: {
        shake: "shake 2s",
        typewriter1: "typewriter 1.5s steps(7) forwards 2s",
        typewriter2: "typewriter 1.5s steps(7) forwards 3.5s",
        typewriter3: "typewriter 1.5s steps(7) forwards 5s",
        typewriter4: "typewriter 1.5s steps(7) forwards 6.5s",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

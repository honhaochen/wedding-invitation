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
        "off-white": "#EAE2D7",
        "off-white-dark": "#853019",
        "off-white-light": "#A45945",
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
        display: ["Aref Ruqaa Ink", "ui-serif", "serif"],
        body: ["PT Sans Narrow", "ui-sans-serif", "sans-serif"],
        chinese: [
          "ZCOOL KuaiLe",
          "sans-serif",
        ],
      },
      animation: {
        shake: "shake 2s",
        flip: "flip 2s",
        appear: "appear 0.2s"
      },
      keyframes: {
        flip: {
          "0%": {
            transform: "rotateX(0)",
            opacity: "1",
            transformOrigin: "top",
          },
          "100%": {
            transform: "rotateX(-90deg)",
            opacity: "0",
            transformOrigin: "top",
          },
        },
        appear: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],

  theme: {
    fontSize: {
      sm: "0.750rem",
      base: "1rem",
      xl: "1.333rem",
      "2xl": "1.777rem",
      "3xl": "2.369rem",
      "4xl": "3.158rem",
      "5xl": "4.210rem",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },

    extend: {
      colors: {
        text: "#e1e6f4",
        background: "#00030b",
        primary: "#9daad9",
        secondary: "#4f3180",
        accent: "#8547b8",
      },
      screens: {},
      transitionProperty: {
        size: "height, width",
      },
      animation: {
        "slide-up": "slide-up-text 0.1s linear",
      },
      boxShadow: { bento: "0px 0px 20px -5px rgba(255, 255, 255, 1) inset;" },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

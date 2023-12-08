/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],

  theme: {
    extend: {
      colors: {
        RichBlack: "hsl(257,40%,5%)",
        DarkPurple: "hsl(257, 40%, 29%)",
      },
      screens: {},
      fontFamily: {},
      transitionProperty: {},
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};

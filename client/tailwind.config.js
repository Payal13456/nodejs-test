/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {},

    screens: {
      xs: "340px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      "2xl": "1536px",
    },

    borderWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
    },
  },

  plugins: [
    require("@tailwindcss/typography"),
  ],
};
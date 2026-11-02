/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  daisyui: {
    themes: ["light", "dark"],
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};

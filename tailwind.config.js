/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Rubik: ["Rubik", "sans-serif"],
      Gilory: ["Gilory", "sans-serif"]
    },
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};

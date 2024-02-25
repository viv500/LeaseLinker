/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "first-bg": "#000000",
        "first-white": "#ffffff",
        "first-green": "#646cff",
        "light-purple": "#E8F0FE",
      },
    },
  },
  plugins: [],
};

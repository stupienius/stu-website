/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        around: "0 0 5px 10px #000000",
      },
    },
  },
  plugins: [],
};

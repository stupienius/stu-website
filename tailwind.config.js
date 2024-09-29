/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        bubblegum: "Bubblegum Sans",
        maamli: "Ga Maamli",
      },
      boxShadow: {
        around: "0 0 5px 10px #ffaa00",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};

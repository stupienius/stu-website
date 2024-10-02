/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        appear: {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
      animation: {
        showPopup: "appear 0.5s linear forwards",
      },
      fontFamily: {
        bubblegum: "Bubblegum Sans",
        maamli: "Ga Maamli",
        mawn: "mawn",
      },
      boxShadow: {
        around: "0 0 5px 10px #ffaa00",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};

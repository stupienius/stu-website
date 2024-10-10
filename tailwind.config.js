/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        appear: {
          "0%": {
            transform: "translateY(25px) scale(0.5)",
            opacity: "0",
            filter: "blur(10px)",
          },
          "100%": {
            transform: "translateY(0) scale(1)",
            opacity: "1",
            filter: "blur(0)",
          },
        },
        disappear: {
          "0%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      animation: {
        showPopup: "appear 0.25s ease-in forwards",
        hidePopup: "disappear 0.75s ease-out forwards",
      },
      fontFamily: {
        bubblegum: "bubblegum",
        maamli: "maamli",
        mawn: "mawn",
      },
      boxShadow: {
        around: "0 0 5px 10px #ffaa00",
      },
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};

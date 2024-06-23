/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
      open: ["Open Sans"],
      inter: ["Inter"],
    },
    extend: {},
  },
  plugins: [
    require("tailwind-typewriter")({
      wordsets: {
        heading: {
          words: ["Hai, Saya Tude Rama seorang Fullstack Web developer."],
          writeSpeed: 0.1,
          pauseBetween: 1,
        },
      },
    }),
    require("daisyui"),
  ],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  mode: "jit",
  theme: {
    extend: {
      lineClamp: {
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./src/app/components/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#4D148C",
        secondary: "#FF6600",
      },
    },
  },
  plugins: [
    // ...
    require("@tailwindcss/forms"),
  ],
};

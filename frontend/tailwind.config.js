/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('src/assets/bg-hero.jpg')",
      },
      colors: {
        theme_blue: {
          light: "#232F3E",
          DEFAULT: "#131921",
        },
      },
    },
  },
  plugins: [],
};

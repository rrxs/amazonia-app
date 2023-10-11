/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
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

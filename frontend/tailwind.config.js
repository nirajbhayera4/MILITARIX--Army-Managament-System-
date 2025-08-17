/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        forest: {
          dark: "#4B3C2A",
          olive: "#7A8D5D",
          moss: "#A3B18C",
          light: "#C2D6A4",
          pale: "#E1E8D5",
        },
      },
    },
  },
  plugins: [],
};

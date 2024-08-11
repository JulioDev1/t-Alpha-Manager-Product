/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "768px",
      lg: "1132px",
      md: "992px",
    },
    extend: {
      fontFamily: {
        light: ["Light"],
        black: ["Black"],
        regular: ["Regular"],
        bold: ["Bold"],
        medium: ["Medium"],
      },
    },
  },
  plugins: [],
};

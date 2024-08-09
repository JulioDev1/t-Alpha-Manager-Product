/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: "#506690", // Ajusta el valor al color deseado
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Ajusta el valor al valor deseado
      },
    },
  },
  plugins: [],
}


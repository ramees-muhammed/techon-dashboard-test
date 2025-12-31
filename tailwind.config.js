/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F6BED", // match your Figma colors
        accent: "#C7F000"
      },
      borderRadius: {
        xl: "16px"
      }
    }
  },
  plugins: []
}

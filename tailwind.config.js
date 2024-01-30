/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1440px',
    },
    extend: {
      colors: {
        primary: "#0371b7",
      },

      container: {
        center: true,
        padding: {
          DEFAULT: "15px",
        }
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        small:{max: "320px"},
        mobile:{max: "375px"},
        mobilel:{max: "425px"},
        tablet:{max: "768px"},
        web:{max: "988px"}
      },
      colors: {
        'chart-bg': '#f9f9f9',
        'chart-text': '#333',
      },
    },
  },
  plugins: [],
}


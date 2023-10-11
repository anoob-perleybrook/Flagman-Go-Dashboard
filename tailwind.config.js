/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      'grey_bg': '#636D79',
      'regal-blue': '#243c5a',
    },
  },
  plugins: [],
}
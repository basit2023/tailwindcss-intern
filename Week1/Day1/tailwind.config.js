/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"], 
  theme: {
    extend: {
      screens: {
        'anosh':'300px',
        'xsm':'400px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
       
      }
    },
  },
  plugins: [],
};
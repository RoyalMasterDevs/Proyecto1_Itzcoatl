/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      screens: {
        'xsm': '320px',
        'ssm': '440px'
      }
    },
  },
  plugins: [],
}

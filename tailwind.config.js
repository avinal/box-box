/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "./public/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      menuText: ['128px', '128px'],
      nameText: ['64px', '64px'],
    },
    extend: {
      colors: {
        'background': '#FFFFFF',
        'menu-text': '#000000',
        'menu-category-text': '#B4B3B3',
        'name-text': '#707579',
      }
    },
  },
  plugins: [],
}


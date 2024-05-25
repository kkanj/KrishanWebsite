/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      categoryText: ['18px', '18px'],
      menuText: ['18px', '18px'],
      nameText: ['100px', '100px'],
    },
    extend: {
      colors: {
        'background': '#ffffff',
        'menu-text': '#000000',
        'menu-sub-text': '#b8b8b8',
        'med-gray': '#B4B3B3',
        'name-text': '#707579',
        'light-gray': '#E4E4E4',
        'line-gray': '#DBDBDB',
        
      }
    },
  },
  plugins: [],
}


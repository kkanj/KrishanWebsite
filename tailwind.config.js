/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.1em',
        widest: '.22em',
      },
        fontSize: {
            categoryText: ["15px", "14px"],
            menuSubText: ["15px", "14px"],
            menuText: ["20px", "20px"],
            nameText: ["100px", "100px"],
        },
        extend: {
            colors: {
                background: "#ffffff",
                "menu-text": "#000000",
                "category-text": "#a4a4a4",
                "menu-sub-text": "#b8b8b8",
                "med-gray": "#B4B3B3",
                "name-text": "#707579",
                "light-gray": "#E4E4E4",
                "line-gray": "#eeeeee",
            },
            fontFamily: {
                sfpro: ["SFPRO", "fallback"],
            },
            fontWeight: {
                normal: 400,
                bold: 700,
                semibold: 600,
                medium: 500,
                light: 300,
                heavy: 800,
                black: 900,
                
            },
        },
        variants: {},
        plugins: [],
    },
};

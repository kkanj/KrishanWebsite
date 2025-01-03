/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        letterSpacing: {
            tightest: "-.075em",
            tighter: "-.05em",
            tight: "-.025em",
            normal: "0",
            wide: ".025em",
            wider: ".05em",
            widest: ".1em",
            widest2: ".25em",
        },
        fontSize: {
            size0: ["10px", "18px"],
            size1: ["16px", "28px"],
            size2: ["20px", "34px"],
            size3: ["32px", "51px"],
            size4: ["41px", "64px"],
            size5: ["52px", "80px"],
            size6: ["64px", "98px"],
            size7: ["80px", "120px"],
            size8: ["96px", "140px"],
            size9: ["112px", "160px"],
        },
        extend: {
            height: {
                100: "25rem", // Custom height value
                104: "26rem",
                108: "27rem",
                112: "28rem",
                116: "29rem",
                120: "30rem",
                124: "31rem",
                128: "32rem",
                // Add more as needed
            },
            width: {
                100: "25rem", // Custom width value
                104: "26rem",
                108: "27rem",
                112: "28rem",
                116: "29rem",
                120: "30rem",
                124: "31rem",
                128: "32rem",
                // Add more as needed
            },
            screens: {
                "2xl": "1536px", // Default 2xl breakpoint
                "3xl": "2000px", // Custom breakpoint for 2000px
            },
            colors: {
                background: "#ffffff",
                "menu-text": "#000000",
                "category-text": "#b0b0b0",
                "menu-sub-text": "#b8b8b8",
                "med-gray": "#9c9c9c",
                "dark-gray": "#404040",
                "name-text": "#404040",
                "light-gray": "#E4E4E4",
                "line-gray": "#eeeeee",
                "gradient-gray-1": "#878787",
                "gradient-gray-2": "#646464",
                "gradient-gray-3": "#3e3e3e",
                "gradient-1": "#20b1ff",
                "gradient-2": "#b39cff",
                "gradient-3": "#ff7fe1",
                "card-bg": "#fafafa",
                header: "#4f4f4f",
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

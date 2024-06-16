/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./pages/**/*.{html,js,jsx}",
        "./components/**/*.{html,js,jsx}",
        "./src/**/*.{html,js,jsx}",
    ],
    theme: {
        extend: {},
        fontSize: {
            sm: "0.8rem",
            base: "1rem", // Mobile: Normal Text
            lg: "1.125rem", // Mobile: Description Text, // Desktop: Normal Text
            xl: "1.25rem", // Mobile: Big Text, // Desktop: Description Text
            "2xl": "1.5rem", // Mobile: H4, // Desktop: Big Text
            "3xl": "2rem", // Mobile: H3
            "4xl": "2.25rem", // Desktop: H4
            "5xl": "2.5rem", // Mobile: H2
            "6xl": "2.75rem", // Desktop: H3
            "7xl": "3rem", // Mobile: H1
            "8xl": "3.5rem", // Desktop: H2
            "9xl": "4.25rem", // Desktop: H1
        },
        screens: {
            desktop: "67.5em",
            // => @media (min-width: 1024px) { ... }
        },
    },
    plugins: [],
};

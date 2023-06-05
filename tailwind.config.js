/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        fold: "280px",
      },
      fontFamily: {
        inter: ["Inter"],
      },
      colors: {
        bgColor: "#5F1515",
        color: "#792D2D",
        color2: "#962E2E",
        color3: "#FFD52D",
        color4: "#FF914D",
      },
    },
  },
  plugins: [],
};

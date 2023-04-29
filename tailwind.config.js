/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontfamily: {
        heading: ["playfair display", "serif"],
        base: ["raleway", "sans-serif"],
      },
      textcolor: {
        accent: "#a80b0b",
        secondary: "#900909",
        tertiary: "#f5f0f0",
      },
      backgroundcolor: {
        100: "#f5f0f0",
        200: "#f2ebeb",
        300: "#f22e2e",
        400: "#900909",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
}


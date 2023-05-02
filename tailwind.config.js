/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        base: ["Raleway", "sans-serif"],
      },
      textColor: {
        accent: "#a80b0b",
        secondary: "#900909",
        tertiary: "#f5f0f0",
      },
      backgroundColor: {
        100: "#f5f0f0",
        200: "#f2ebeb",
        300: "#f22e2e",
        400: "#900909",
      },
      maxWidth: {
        page: '1280px'
      },
      padding: {
        'screen-edge': '2rem'
      },
      gridTemplateColumns: {
        'nav': '1fr max-content max-content',
        'content': '0.1fr 1fr 1fr 0.1fr',
        '2content': '0.15fr 1fr 1fr 0.15fr',
      },
      screens: {
        xs: "480px",
        "2lg": "1072px",
        "3lg": "1120px",
        "4lg": "1200px",
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ["14px"],
      },
      colors: {
        lightGreen: "#9bf5b4",
        starGreen: "#D4E9E2",
        darkGreen: "#1E3932",
        accentGreen: "#00754a",
        lightPink: "#fa91aa",
        lightText: "rgba(0,0,0, .58)",
        titleText: "rgba(0,0,0, .87)",
      },
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },
  },
  plugins: [],
}

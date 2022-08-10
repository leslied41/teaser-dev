/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ["12px", "12px"],
        base: ["16px", "16px"],
        lg: ["32px", "32px"],
        xl: ["56px", "56px"],
      },
      colors: {
        "title-color": "var(--title-color)",
      },
    },
  },
  plugins: [],
};

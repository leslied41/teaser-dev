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
        "sm-cn": ["12px", "20px"],
        m: ["14px", "14px"],
        base: ["16px", "16px"],
        "base-cn": ["16px", "20px"],
        lg: ["32px", "32px"],
        ml: ["43px", "43px"],
        xl: ["56px", "56px"],
        xxl: ["84px", "84px"],
        "xxl-cn": ["40px", "40px"],
      },
      colors: {
        "title-color": "var(--title-color)",
      },
    },
  },
  plugins: [],
};
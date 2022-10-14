/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ["12px", "18px"],
        "sm-cn": ["12px", "14px"],
        m: ["22px", "22px"],
        "m-cn": ["16px", "20px"],
        "m-1": ["22px", "30px"],
        base: ["12px", "12px"],
        "base-cn": ["12px", "16px"],
        lg: ["32px", "32px"],
        ml: ["43px", "43px"],
        xl: ["56px", "56px"],
        xxl: ["84px", "84px"],
        "xxl-cn": ["40px", "40px"],
      },
      colors: {
        "main-color": "var(--main-color)",
        "secondary-color": "var( --secondary-color)",
      },
    },
  },
  plugins: [],
};

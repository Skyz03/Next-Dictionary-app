/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        lightGray: "#f4f4f4",
        softGray: "#e9e9e9",
        brandPurple: "#a445ed",
        alertRed: "#ff5252",
      },

      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"],
        serif: ["Lora", "Georgia", "serif"],
        mono: ["Inconsolata", "SFMono-Regular", "monospace"],
      },
      fontSize: {
        "heading-l": ["64px", { lineHeight: "77px" }],
        "heading-l-mobile": ["32px", { lineHeight: "38px" }],
        "heading-m": ["24px", { lineHeight: "29px" }],
        "heading-s": ["20px", { lineHeight: "24px" }],
        "body-m": ["18px", { lineHeight: "24px" }],
        "body-s": ["14px", { lineHeight: "17px" }],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        bold: 700,
        extrabold: 800,
      },
    },
  },
  plugins: [],
};

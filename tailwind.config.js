/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        normal: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        focus: "00px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #D1E9FF",
        required: "0px 1px 2px rgba(16, 24, 40, 0.05)",
        error: "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #FFD3CC",
      },
    },
  },
  plugins: [],
};

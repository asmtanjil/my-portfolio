/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // daisyui: {
  //   themes: [
  //     {
  //       myPortfolio: {
  //         "primary": "#2563eb",
  //         "secondary": "#a78bfa",
  //         "accent": "#f472b6",
  //         "info": "#67e8f9",
  //         "success": "#22c55e",
  //         "warning": "#facc15",
  //         "error": "#f97316",
  //       },
  //     },
  //   ],
  // },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

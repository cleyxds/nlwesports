/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        galaxy: "url(/background-galaxy.png)",
        "nlw-gradient":
          "linear-gradient(89.86deg, #9572FC 5.08%, #43E7AD 43.94%, #E1D55D 95.57%)",
        "game-gradient":
          "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
      },
      colors: {
        background: "#121214",
      },
    },
  },
  plugins: [],
}

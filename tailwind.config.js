const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        featured: "url('/src/assets/home/featured.jpg')",
        "section-cover": "url('/src/assets/menu/dessert-bg.jpeg')",
      },
      colors: {
        title: "#D99904",
        para: "#737373",
      },
      fontFamily: {
        cinzel: ["Cinzel", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
});

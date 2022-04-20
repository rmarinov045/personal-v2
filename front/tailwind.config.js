module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home": "url(./assets/home.svg)"
      },
      colors: {
        // "primary": "#1c0c5b",
        // "secondary": "#3d2c8d",
        // "tertiary": "#916bbf",
        // "light": "#c996cc",
        "primary": "#101010",
        "secondary": "#1f2123",
        "tertiary": "#6bd0ff",
        "light": "#3fa0ef",
        "lighter": "#1a74e2"
      }
    },
  },
  plugins: [],
}

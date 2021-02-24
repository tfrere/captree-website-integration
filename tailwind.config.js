module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#BCD369",
        complementary: "#FDA600",
      },
    },
    fontFamily: {
      title: ["Fredoka One", "sans-serif"],
      talk: ["Gochi Hand", "sans-serif"],
      text: ["Hind Madurai", "serif"],
    },
    interFontFeatures: {
      default: ["calt", "liga", "kern"],
      numeric: ["tnum", "salt", "ss02"],
    },
  },
  variants: {},
  plugins: [
    require("tailwindcss-font-inter")({
      importFontFace: true,
      disableUnusedFeatures: true,
    }),
  ],
};

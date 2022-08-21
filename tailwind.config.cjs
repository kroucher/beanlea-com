/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        kumar: ["Kumar One", "sans-serif"],
      },
      backgroundImage: {
        cheekco: "url('/assets/showcase/cheekco.png')",
        praxislawyers: "url('/assets/showcase/praxislawyers.jpg')",
      },
    },
  },
  plugins: [],
};

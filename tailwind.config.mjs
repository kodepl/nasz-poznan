import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1f33",
        paper: "#f7f4ef",
        brass: "#c4a35a",
        river: "#1f4e79",
      },
      fontFamily: {
        display: ["Newsreader", "Georgia", "serif"],
        body: ["IBM Plex Sans", "Segoe UI", "sans-serif"],
      },
    },
  },
  plugins: [typography],
};

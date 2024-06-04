/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': "#ffffff",
        'text_box': "#f5f5f5",
        'hover_text': "#e0e0e0",
        'disabled_text': "#525252",
        'placeholder_text': "#8d8d8d",
        'label': "#525252",
        'active_text': "#161616",
        'link': "#134C9D",
        'visited_link': "#292F64",
        'succes1': "#42be65",
        'succes2': "#24a148",
        'error1': "#da1e28",
        'error2': "#fa4d56",
        'warning': "#FFC700",
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        CinzelDecorative: ["Cinzel Decorative", "serif"],
      },
      backgroundImage: {
        registerBackground:
          "url('/src/assets/registration/Registrationbg.svg')",
      },
      colors: {
        customBorder: "var (#4A6B85)",
        customShadow: "var (#4D7292)",
        customColor1: '#C4895F',
        customColor2: '#D0C19A',
        customColor_darckblue: '#000731',
        customColor_lightblue: '#4D7292',
        customColor_darckpurpule: '#32255A',
        customColor_lightpurpule: '#84699B',
        customColor_darckgreen: '#0F4126',
        customColor_lightgreen: '#61817A',
        black_button:'#050511',
        purprle_button:'#1E112F',
        green_button:'#03240F',
        brown_button:'#553D2F',
      },
      boxShadow: {
        custom:
          "0px 0px 6.5px 0px var(--Color, #4D7292), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};

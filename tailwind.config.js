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
      },
      boxShadow: {
        custom:
          "0px 0px 6.5px 0px var(--Color, #4D7292), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};

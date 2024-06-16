/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        circle: "#5fd8ff",
        "loading-bg-phone": "#040D1C",
        "loading-bg-desktop": "#00020E",
      },
      fontFamily: {
        CinzelDecorative: ["Cinzel Decorative", "serif"],
        font: ["Cinzel"],
      },
      backgroundImage: {
        registerBackground:
          "url('/src/assets/registration/Registrationbg.svg')",
      },
      colors: {
        dark: "var(--bg)",
        textColor: "var(--color)",
        customBlue: "var(--blue)",
        border: "var(--border)",
        customBorder: "var (#4A6B85)",
        customShadow: "var (#4D7292)",
      },
      boxShadow: {
        custom:
          "0px 0px 6.5px 0px var(--Color, #4D7292), 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
      dropShadow: {
        custom1: "0 -1mm 4mm #5fd8ff",
        custom2: "0 -1mm 4mm #4d7292",
      },
      keyframes: {
        floating: {
          "0%": {
            visibility: "visible",
            transform: "translate(0, 40px)",
          },
          "50%": {
            visibility: "visible",
            transform: "translate(0, 5px)",
          },
          "100%": {
            visibility: "visible",
            transform: "translate(0, 40px)",
          },
        },
        circle: {
          from: {
            width: "20px",
            "background-color": "#4d7292",
            filter: "drop-shadow-custom2",
          },
          to: {
            width: "80px",
            "background-color": "#5fd8ff",
            filter: "drop-shadow-custom2",
          },
        },
        customBorder: "var (#4A6B85)",
        customShadow: "var (#4D7292)",
      },
    },
  },
  plugins: [],
};

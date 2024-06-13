/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': 'var(--bg)',
        'textColor': 'var(--color)',
        'customBlue': 'var(--blue)',
      },
    },
  },
  plugins: [],
}


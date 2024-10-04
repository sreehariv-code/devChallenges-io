/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FAFAF9",
        white: "#FFFFFF",
        "star-bg": "#F5C044",
        "check-green": "#4CA154",
        "text-primary": "#18181B",
        "text-secondary": "#52525A",
        "text-tertiary": "#D4D4D8",
      },
      fontFamily: {
        sora: ["Sora", "sans-serif"],
      },
      fontSize: {
        heading: "2.25rem",
        body: "1.25rem",
        "body-2": "1rem",
        "list-item": "0.875rem",
      },
    },
  },
  plugins: [],
};

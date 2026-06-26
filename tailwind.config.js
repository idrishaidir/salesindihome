/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,php}", "./components/**/*.{html,php}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#f5f7fa",
          foreground: "#1a1a2e",
          border: "#e2e8f0",
          primary: "#e8001d",
          primaryFg: "#ffffff",
          secondary: "#fff3f4",
          secondaryFg: "#c0001a",
          muted: "#f1f5f9",
          mutedFg: "#64748b",
          card: "#ffffff",
          success: "#dcfce7",
          successFg: "#166534",
          warning: "#fef9c3",
          warningFg: "#854d0e",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

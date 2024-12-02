/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}", "src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF6363",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
        },
      },
      fontFamily: {
        body: ["Nunito"],
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
      keyframes: {
        bounce: {
          "0%, 100%": {
            transform: "translateY(0%)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
          "50%": {
            transform: "translateY(-15%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
    },
  },
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        brand: {
          50: "#ECFFFB",
          100: "#D6FFF7",
          200: "#A8FFEE",
          300: "#5FFFE2",
          400: "#20DFC3",
          500: "#10B981", // ✅ main green button color
          600: "#0CA16F",
          700: "#087F56",
          800: "#046042",
          900: "#024B34",
        },
        ink: {
          100: "#F1F7FA",
          700: "#334155",
          800: "#1E293B",
        },
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.06)",
      },
      borderRadius: {
        xl: "1rem",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

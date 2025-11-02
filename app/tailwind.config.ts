import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0D6EFD",
          50: "#E7F1FF",
          100: "#CFE3FF",
          200: "#9FCCFF",
          300: "#6FB6FF",
          400: "#3F9FFF",
          500: "#0D6EFD",
          600: "#0B5ED7",
          700: "#0A58CA",
          800: "#084298",
          900: "#052C65",
        },
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};

export default config;

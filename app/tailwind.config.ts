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
          600: "#059669", // emerald-600
          700: "#047857",
        },
      },
      boxShadow: {
        card: "0 10px 24px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;

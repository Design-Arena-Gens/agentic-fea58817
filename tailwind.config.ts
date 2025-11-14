import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        sand: "#f0ede3",
        clay: "#c7bca4",
        charcoal: "#2f2b28",
        oasis: "#3b8573"
      },
      fontFamily: {
        display: ["'IBM Plex Sans Arabic'", "sans-serif"],
        body: ["'Noto Sans Arabic'", "sans-serif"]
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      },
      animation: {
        fadeUp: "fadeUp 0.6s ease both",
        fadeIn: "fadeIn 0.6s ease both"
      }
    }
  },
  plugins: []
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#0B3D91", foreground: "#FFFFFF" },
        secondary: { DEFAULT: "#2563EB", foreground: "#FFFFFF" },
        accent: { DEFAULT: "#F4B400", foreground: "#111827" },
        surface: "#F8FAFC",
        border: "#E5E7EB",
        success: "#16A34A",
        danger: "#DC2626",
        "text-primary": "#111827",
        "text-secondary": "#6B7280",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

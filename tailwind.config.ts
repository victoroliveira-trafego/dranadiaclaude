import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: "#FCB900",
          "yellow-light": "#FEE27A",
          "yellow-pale": "#FFF8E1",
          orange: "#FF6900",
          "orange-light": "#FFE0CC",
          green: "#00D084",
          "green-light": "#CCFAEC",
          "green-pale": "#F0FDF9",
          purple: "#8b5cf6",
          "purple-light": "#ede9fe",
          teal: "#4ecdc4",
          "teal-light": "#ccf7f4",
          "teal-pale": "#f0fffe",
          white: "#FFFFFF",
          gray: "#F7F7F7",
          "gray-dark": "#4A4A4A",
          text: "#1A1A1A",
          muted: "#6B7280",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["3.5rem", { lineHeight: "1.1", fontWeight: "700" }],
        "display-lg": ["2.75rem", { lineHeight: "1.15", fontWeight: "700" }],
        "display-md": ["2rem", { lineHeight: "1.2", fontWeight: "600" }],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 4px 24px rgba(0,0,0,0.06)",
        card: "0 8px 32px rgba(0,0,0,0.08)",
        strong: "0 16px 48px rgba(0,0,0,0.12)",
      },
      animation: {
        "bounce-slow": "bounce 2.5s infinite",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

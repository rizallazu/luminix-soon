import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        neutral: {
          0: "#ffffff",
          100: "#f6f6f6",
          200: "#e3e3e3",
          300: "#d5d5d5",
          400: "#c2c2c2",
          500: "#b6b6b6",
          600: "#a4a4a4",
          700: "#959595",
          800: "#5a5a5a",
          900: "#202020",
        },
        primary: {
          50: "#fff4ed",
          100: "#ffe5d4",
          200: "#ffc7a9",
          300: "#ffa072",
          400: "#fe7d4e",
          500: "#fc4713",
          600: "#ed2d09",
          700: "#c51e09",
          800: "#9c1910",
          900: "#7e1810",
        },
        success: {
          1: "#e8fff2",
          2: "#5dbe89",
          3: "#38a569",
        },
        danger: {
          1: "#fff2f2",
          2: "#eb4245",
          3: "#db1f22",
        },
        "dark":"#0B0B0B",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

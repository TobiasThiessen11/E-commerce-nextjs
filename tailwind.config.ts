import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#4099bf",           
          "secondary": "#4b5563",     
          "accent": "#00c4cb",     
          "neutral": "#e5e5e5",      
          "base-100": "#f9ffff",       
          "info": "#76B7D9",      
          "success": "#008b44",      
          "warning": "#8c6700",      
          "error": "#d63c51",
          body:{
            "background-color": "white",
            "font-family": "Baloo Paaji 2",
          }
        },
      },
    ],
  },
  plugins: [require("tailwindcss-animate"), require("daisyui")],
  
} satisfies Config

export default config
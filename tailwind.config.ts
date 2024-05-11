import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#4099bf",           
          "secondary": "#2d7886",     
          "accent": "#00c4cb",     
          "neutral": "#e5e5e5",      
          "base-100": "#f9ffff",       
          "info": "#00b9ff",      
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
  plugins: [require("daisyui")],
};
export default config;

import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default <Partial<Config>>{
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./composables/**/*.{js,ts}",
    "./plugins/**/*.{js,ts}",
    "./App.{js,ts,vue}",
    "./app.{js,ts,vue}",
    "./Error.{js,ts,vue}",
    "./error.{js,ts,vue}",
    "./content/**/*.md",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        tablet: "640px",
        desktop: "1280px",
      },
      colors: {
        primary: {
          "blue-ribbon": "#166FFF",
          zumthor: "#E0E7FF",
          periwinkle: "#BED6FF",
          anakiwa: "#94BDFF",
          malibu: "#6AA3FF",
          "dodger-blue": "#4089FF",
          zircon: "#FDFEFF",
        },
        neutral: {
          white: "#FFFFFF",
          "wild-sand": "#F5F5F5",
          "mine-shaft": "#333333",
          scorpion: "#5C5C5C",
          "dove-gray": "#707070",
          gray: "#858585",
          "dusty-gray": "#999999",
          "siver-chalice": "#ADADAD",
          silver: "#C2C2C2",
          alto: "#D6D6D6",
          gallery: "#EBEBEB",
        },
        error: "#FF1635",
        success: "#09CD09",
      },
      backgroundImage: {
        gradient: "linear-gradient(92.51deg, #166FFF 3.15%, #76AFFB 105.73%);",
      },
    },
  },
};

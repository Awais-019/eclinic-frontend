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
        tablet: "765px",
        desktop: "1280px",
        mobile: { max: "765px" },
        "3xl": "1920px",
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
        "torch-red": "#FF1635",
        success: "#09CD09",
        "green-haze": "#09CD09",
      },
      backgroundImage: {
        gradient: "linear-gradient(92.51deg, #166FFF 3.15%, #76AFFB 105.73%);",
      },
      gridTemplateColumns: {
        nav: "1fr 2fr",
      },
      boxShadow: {
        variant1: "8px 16px 32px rgba(22, 111, 255, 0.15);",
        variant2: "6px 6px 24px rgba(38, 50, 56, 0.15);",
      },
    },
  },
};

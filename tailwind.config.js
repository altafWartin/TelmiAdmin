/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        royalblue: {
          "100": "#237dff",
          "200": "#227dff",
          "300": "rgba(35, 125, 255, 0.1)",
          "400": "rgba(34, 125, 255, 0.05)",
          "500": "rgba(34, 125, 255, 0.1)",
        },
        "background-2": "#fff",
        darkslategray: {
          "100": "#2d3845",
          "200": "#333",
        },
        gray: {
          "100": "#fcfcfc",
          "200": "#fafafa",
          "300": "#0c2333",
          "400": "#0b2333",
          "500": "rgba(0, 0, 0, 0.1)",
          "600": "rgba(255, 255, 255, 0.3)",
        },
        aliceblue: {
          "100": "#e7f5ff",
          "200": "#ebf3fc",
          "300": "#e9f3f9",
        },
        lightslategray: {
          "100": "#8aa5b7",
          "200": "#8288a0",
        },
        darkorange: {
          "100": "#fb831c",
          "200": "#fc831a",
        },
        black: "#000",
        dodgerblue: "#4788ec",
        silver: {
          "100": "#c4c4c4",
          "200": "#b8b8b8",
          "300": "#b5b5b5",
        },
        coral: "#ff8548",
        gainsboro: "#d9d9d9",
        springgreen: "#36fe60",
        tomato: "#fb3536",
        "light-secondary": "#6f7f95",
        "highlights-highlight-1": "#734cc9",
        "light-primary": "#3b3551",
      },
      spacing: {},
      fontFamily: {
        "heading-heading-4": "Inter",
        gilroy: "Gilroy",
        manrope: "Manrope",
        "font-awesome-6-pro": "'Font Awesome 6 Pro'",
        poppins: "Poppins",
      },
      borderRadius: {
        xl: "20px",
        sm: "14px",
        "3xs": "10px",
        "13xl": "32px",
        "101xl": "120px",
        mini: "15px",
        "21xl": "40px",
        "4xs-9": "8.9px",
        "4xs-1": "8.1px",
      },
    },
    fontSize: {
      lg: "1.125rem",
      "4xl": "1.438rem",
      "5xl": "1.5rem",
      lgi: "1.188rem",
      xs: "0.75rem",
      sm: "0.875rem",
      mini: "0.938rem",
      xl: "1.25rem",
      base: "1rem",
      "3xs": "0.625rem",
      "smi-4": "0.775rem",
      "2xs-2": "0.638rem",
      "base-4": "0.963rem",
      "mini-6": "0.913rem",
      "xs-4": "0.713rem",
      inherit: "inherit",
    },
    screens: {
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq1000: {
        raw: "screen and (max-width: 1000px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq725: {
        raw: "screen and (max-width: 725px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq650: {
        raw: "screen and (max-width: 650px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};

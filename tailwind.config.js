/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--poppins)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: {
        "05": "#580505",
        "04": "#790404",
        "03": "#BA0000",
        "02": "#E43D3D",
        "01": "#F36B6B",
      },
      secondary: {
        "05": "#0B0C0D",
        "04": "#0C0E0F",
        "03": "#171818",
        "02": "#212324",
        "01": "#343434",
      },
      gray: {
        "05": "#3E3E3E",
        "04": "#535353",
        "03": "#7C7C7C",
        "02": "#989898",
        "01": "#CECECE",
      },
      neutral: {
        "05": "#E4E4E4",
        "04": "#F3EEEE",
        "03": "#F3F3F3",
        "02": "#F8F8F8",
        "01": "#FEFEFE",
      },
      success: {
        "01": "#237C00",
        "02": "#3EB80E",
        "03": "#E4F9DA",
      },
      danger: {
        "01": "#EA172E",
        "02": "#EE4B4B",
        "03": "#FCD2D2",
      },
      info: {
        "01": "#1F62A5",
        "02": "#61AEE7",
        "03": "#C7DEEF",
      },
      waiting: {
        "01": "#F8BA1B",
        "02": "#FFD234",
      },
      link: {
        "01": "#3201BE",
        "02": "#2420F9",
      },
    },
  },
  plugins: [],
};

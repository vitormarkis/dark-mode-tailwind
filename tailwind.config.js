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
      transparent: "transparent",
      current: "currentColor",
      primary: {
        "05": "var(--primary-05)",
        "04": "var(--primary-04)",
        "03": "var(--primary-03)",
        "02": "var(--primary-02)",
        "01": "var(--primary-01)",
      },
      secondary: {
        "05": "var(--secondary-05)",
        "04": "var(--secondary-04)",
        "03": "var(--secondary-03)",
        "02": "var(--secondary-02)",
        "01": "var(--secondary-01)",
      },
      gray: {
        "05": "var(--gray-05)",
        "04": "var(--gray-04)",
        "03": "var(--gray-03)",
        "02": "var(--gray-02)",
        "01": "var(--gray-01)",
      },
      neutral: {
        "05": "var(--neutral-05)",
        "04": "var(--neutral-04)",
        "03": "var(--neutral-03)",
        "02": "var(--neutral-02)",
        "01": "var(--neutral-01)",
      },
      success: {
        "01": "var(--success-01)",
        "02": "var(--success-02)",
        "03": "var(--success-03)",
      },
      danger: {
        "01": "var(--danger-01)",
        "02": "var(--danger-02)",
        "03": "var(--danger-03)",
      },
      info: {
        "01": "var(--info-01)",
        "02": "var(--info-02)",
        "03": "var(--info-03)",
      },
      waiting: {
        "01": "var(--waiting-01)",
        "02": "var(--waiting-02)",
      },
      link: {
        "01": "var(--link-01)",
        "02": "var(--link-02)",
      },
    },
  },
  plugins: [],
};

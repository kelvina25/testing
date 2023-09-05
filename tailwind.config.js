/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
  
      fontSize: {
        "6xl": [
          "25px",
          {
            lineHeight: "24px",
            letterSpacing: "0.369px",
            fontWeight: "700",
          },
        ],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      borderRadius: {
        "4xl": "20px",
      },

      height: {
        115: "27.5rem",
      },

      width: {
        68: "14.125rem",
        69: "16.25rem",
      },

      boxShadow: {
        "3xl": "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
};

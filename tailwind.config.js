/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        primary:'#03346E',
        secondary:'#B8183D',
        title:'#E3E3E1',
        subtitle:'#A8CFFF',
        background:'#F6F6F6',
        lineblue:'#2E8FD9',
        linered:'#DB234E',
      }
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-diagonal': 'linear-gradient(45deg, #111112, #333333)',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
};

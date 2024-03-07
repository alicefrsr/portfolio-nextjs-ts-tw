/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // screens: {
      //   sm: '640px',
      //   md: '768px',
      //   lg: '1024px',
      //   xl: '1280px',
      //   '2xl': '1536px',
      // },
      height: {
        screen: '100dvh',
      },
      fontFamily: {
        inter: 'Inter, sans-serif',
        dm: 'DM Mono, monospace',
        fira: 'Fira Code, monospace ',
      },
      colors: {
        primaryLight: '#138cd3',
        secondaryLight: '#C7E2F0',
        primaryDark: '#6A618D',
        secondaryDark: '#724E69',
        lightOrange: '#ffdfc3',
        focusColor: '#ffa565',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

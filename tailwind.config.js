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
        dancing: 'Dancing Script, cursive',
        brush: 'Nanum Brush Script, sans-serif',
        satisfy: 'Satisfy, cursive',
        fira: 'Fira Code, monospace ',
      },
      colors: {
        primaryLight: '#138cd3',
        primaryDark: '#684A63',
        focusColor: '#ffa565',
        white: '#fff',
        greyDark: '#343a40',
        greyMedium: '#9095a7',
        greyLight: '#e9e9e9',
        greyVeryLight: '#fafafa',
        blueDark: '#1E2A47',
        blueDarkest: '#141D2F',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

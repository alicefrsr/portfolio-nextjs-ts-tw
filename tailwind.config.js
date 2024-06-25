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
        fira: 'Fira Code, monospace',
        atk: 'Atkinson_Hyperlegible, sans-serif',
      },
      colors: {
        // primaryLightTW: '#0ea5e9',
        primaryLight: '#138cd3',
        secondaryLight: '#C7E2F0',
        lightOrange: '#ffdfc3',
        focusColor: '#ffa565',
        primaryDark: '#6A618D',
        secondaryDark: '#724E69',
        lightPurple: '#724E69',
        oldPink: '#d09fb6',
        brightPinkTW: '#f472b6',
        brightPinkDracula: '##FF78C6',
        darkGrey: '#1E293B',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

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
        navLight: '#C7E2F0',
        primaryLight: '#138cd3',
        cardBgLight: '#fff',
        techTagsLight: '#138cd3',
        // secondaryLight: '#C7E2F0',
        secondaryLight: '#ffa565',

        navDark: '#6A618D',
        primaryDark: '#ffa565',
        cardBgDark: '#1E293B',
        techTagsDark: '#724E69',
        secondaryDark: '#6A618D',

        focusColor: '#ffa565',
        // not in use
        // lightOrange: '#ffdfc3',
        // oldPink: '#d09fb6',
        // brightPinkTW: '#f472b6',
        // brightPinkDracula: '#FF78C6',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

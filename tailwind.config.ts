import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      '--background': '#F9F0EEFF',
      '--calm-gren': '#B8C5BDFF',
      '--pi-pink': '#D9BCD1FF',
      '--bi-blue': '#C0D6D8FF',
      '--craton-gey': '#746164FF',
      '--stone-blue': '#083344',
    },
    extend: {
      fontFamily: {
        alegreyaSans: ['Alegreya Sans', "sans-serif"],
        alegreya: ['Alegreya', "serif"],
        robotoFlex: ['Roboto Flex', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}
export default config

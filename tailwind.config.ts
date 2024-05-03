import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: "selector",
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
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
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}
export default config

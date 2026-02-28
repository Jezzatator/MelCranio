import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        alegreyaSans: ['Alegreya Sans', "sans-serif"],
        alegreya: ['Alegreya', "serif"],
        robotoFlex: ['Roboto Flex', 'sans-serif'],
      },
    },
  },
  plugins: [require('@heroui/theme').heroui()],
  darkMode: 'selector',
}
export default config

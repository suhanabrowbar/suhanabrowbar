import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#b87968',
        secondary: '#f1c7b7',
      },
    },
  },
  plugins: [],
} satisfies Config

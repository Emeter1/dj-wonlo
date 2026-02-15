import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        dj: {
          black: '#0a0a0a',
          dark: '#121212',
          paper: '#1E1E1E',
          primary: '#0077DD',
          gold: '#0077DD', // Alias for backward compatibility during refactor
          'gold-light': '#3399FF', // Lighter shade of primary
          text: '#E0E0E0',
          muted: '#A0A0A0'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Oswald"', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
}

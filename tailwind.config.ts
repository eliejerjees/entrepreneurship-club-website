import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Davidson green color scheme - matching the logo
        accent: {
          50: '#f0f9f4',
          100: '#dbf0e4',
          200: '#bae0cc',
          300: '#8cc9a9',
          400: '#5aab82',
          500: '#2d8a5e', // Primary green from logo
          600: '#1f7049',
          700: '#1a5a3c', // Darker green from logo
          800: '#18472f',
          900: '#153b28',
          950: '#0a2117',
        },
        // Cool neutrals to complement the green
        neutral: {
          50: '#f8fafa',
          100: '#f1f4f4',
          200: '#e3e8e8',
          300: '#cdd5d5',
          400: '#9ca8a8',
          500: '#6b7a7a',
          600: '#535f5f',
          700: '#434c4c',
          800: '#2a3030',
          900: '#1a1f1f',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Georgia', 'Times New Roman', 'serif'],
      },
      fontSize: {
        // Typography scale
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.625' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      spacing: {
        // Consistent spacing scale
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      },
      maxWidth: {
        'content': '65ch',
        'wide': '80rem',
      },
    },
  },
  plugins: [],
}

export default config

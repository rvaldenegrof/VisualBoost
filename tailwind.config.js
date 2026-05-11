/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff5ff',
          100: '#d9e7ff',
          200: '#b4c8ff',
          300: '#7b9cf5',
          400: '#4a71e0',
          500: '#2a58cb',
          600: '#2148a6',
          700: '#1a3b85',
          800: '#152f64',
          900: '#10244d',
        },
        accent: {
          50: '#fff4e8',
          100: '#ffe3c1',
          200: '#ffc58a',
          300: '#ff9e42',
          400: '#ff7819',
          500: '#ff6600',
          600: '#e25b00',
          700: '#bb4700',
          800: '#943600',
          900: '#6f2600',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

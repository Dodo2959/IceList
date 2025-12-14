module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ice: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c2d6b',
          950: '#051e3e',
        },
        glacial: {
          dark: '#0a0e27',
          darker: '#050812',
          card: 'rgba(30, 58, 138, 0.1)',
          border: 'rgba(14, 165, 233, 0.2)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        snowfall: 'snowfall 10s linear infinite',
        shimmer: 'shimmer 2s linear infinite',
        pulse_glow: 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        snowfall: {
          '0%': { transform: 'translateY(-10vh) translateX(0)', opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) translateX(100px)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)' },
          '50%': { opacity: '0.8', boxShadow: '0 0 40px rgba(14, 165, 233, 0.8)' },
        }
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(14, 165, 233, 0.3)',
        'glow': '0 0 20px rgba(14, 165, 233, 0.5)',
        'glow-lg': '0 0 40px rgba(14, 165, 233, 0.7)',
        'glass': '0 8px 32px 0 rgba(14, 165, 233, 0.1)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'snowflake': 'radial-gradient(circle, rgba(14, 165, 233, 0.5) 30%, transparent 70%)',
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'accent': ['Playfair Display', 'serif'],
      },
      colors: {
        'pink': '#FF69B4',
        'blue': '#4A90E2',
        'yellow': '#FFD700',
        'green': '#32CD32',
        'purple': '#9370DB',
        'rainbow-pink': '#FF69B4',
        'rainbow-yellow': '#FFD700',
        'rainbow-green': '#32CD32',
        'rainbow-blue': '#4A90E2',
        'rainbow-purple': '#9370DB',
        'purple-400': '#C084FC',
        'purple-500': '#A855F7',
        'purple-600': '#9333EA',
        'purple-700': '#7C3AED',
        'purple-800': '#6B21A8',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'rainbow-wipe': 'rainbowWipe 0.8s ease-in-out',
        'hamburger-rotate': 'hamburgerRotate 0.3s ease-in-out',
        'text-reveal': 'textReveal 0.6s ease-out',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
        'scroll-left': 'scroll-left 40s linear infinite',
        'scroll-right': 'scroll-right 40s linear infinite',
        'blob': 'blob 7s infinite',
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
        rainbowWipe: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        hamburgerRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(45deg)' },
        },
        textReveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'scroll-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addUtilities }) {
      addUtilities({
        '.pause': {
          'animation-play-state': 'paused',
        },
        '.animation-delay-2000': {
          'animation-delay': '2s',
        },
        '.animation-delay-4000': {
          'animation-delay': '4s',
        },
      })
    },
  ],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary
        white: '#FFFFFF',
        cream: {
          light: '#FAF9F6',
          DEFAULT: '#F7F6F3',
        },
        // Text
        charcoal: {
          DEFAULT: '#1A1A1A',
          light: '#2C2C2C',
        },
        gray: {
          warm: '#6B6B6B',
          light: '#8C8C8C',
          border: '#E5E5E5',
          'border-light': '#F0F0F0',
        },
        // Accent (use sparingly)
        bronze: {
          DEFAULT: '#A0826D',
          dark: '#8B7355',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Montserrat', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['11px', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        'sm': ['13px', { lineHeight: '1.6', letterSpacing: '0.02em' }],
        'base': ['16px', { lineHeight: '1.7', letterSpacing: '0.02em' }],
        'lg': ['18px', { lineHeight: '1.7', letterSpacing: '0.02em' }],
        'xl': ['20px', { lineHeight: '1.5', letterSpacing: '0.02em' }],
        '2xl': ['24px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
        '3xl': ['32px', { lineHeight: '1.3', letterSpacing: '0.03em' }],
        '4xl': ['40px', { lineHeight: '1.2', letterSpacing: '0.03em' }],
        '5xl': ['48px', { lineHeight: '1.2', letterSpacing: '0.02em' }],
        '6xl': ['56px', { lineHeight: '1.1', letterSpacing: '0.02em' }],
        '7xl': ['72px', { lineHeight: '1.1', letterSpacing: '0.02em' }],
      },
      fontWeight: {
        light: '300',
        normal: '400',
      },
      letterSpacing: {
        'tight': '-0.01em',
        'normal': '0.02em',
        'wide': '0.03em',
        'wider': '0.08em',
        'widest': '0.12em',
        'luxury': '0.15em',
      },
      lineHeight: {
        'tight': '1.1',
        'snug': '1.2',
        'normal': '1.4',
        'relaxed': '1.6',
        'loose': '1.7',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
      },
      maxWidth: {
        'content': '1400px',
        'wide': '1600px',
      },
      boxShadow: {
        'soft': '0 2px 12px rgba(0, 0, 0, 0.04)',
        'card': '0 8px 24px rgba(0, 0, 0, 0.08)',
        'elevated': '0 16px 48px rgba(0, 0, 0, 0.12)',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'smooth': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'slide-up': 'slideUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'bounce-gentle': 'gentleBounce 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
    },
  },
  plugins: [],
};

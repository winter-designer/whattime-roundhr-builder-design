import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard', 'sans-serif'],
      },
      colors: {
        // 메인 컬러는 변경 가능하도록 CSS 변수로 설정
        primary: {
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
          dark: 'var(--color-primary-dark)',
        },
        // Secondary는 메인 컬러의 아주 옅은 배경
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          light: 'var(--color-secondary-light)',
        },
        // 텍스트 컬러
        text: {
          DEFAULT: 'var(--color-text)',
          secondary: 'var(--color-text-secondary)',
          tertiary: 'var(--color-text-tertiary)',
          muted: 'var(--color-text-muted)',
        },
        // 보더 & 디바이더
        border: 'var(--color-border)',
        divider: 'var(--color-divider)',
        // Gray scale
        gray: {
          100: '#F0F2F2',
          200: '#E2E6E6',
          300: '#D1D5D5',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      screens: {
        'md': {'max': '768px'},
        'sm': {'max': '640px'},
      },
    },
  },
  plugins: [],
}
export default config

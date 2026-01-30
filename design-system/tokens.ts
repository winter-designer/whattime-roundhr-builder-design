/**
 * 디자인 시스템 토큰
 * 모든 디자인 값의 단일 소스
 * 
 * 메인 컬러 변경: globals.css의 :root 섹션에서 --color-primary 값 수정
 */

export const designTokens = {
  // 컬러
  colors: {
    primary: {
      DEFAULT: '#1656df',
      light: '#4a7de8',
      dark: '#0d3fa8',
    },
    secondary: {
      DEFAULT: 'rgba(22, 86, 223, 0.05)',
      light: 'rgba(22, 86, 223, 0.02)',
    },
    text: {
      DEFAULT: '#000000',
      secondary: 'rgba(0, 0, 0, 0.6)',
      tertiary: 'rgba(0, 0, 0, 0.4)',
      muted: 'rgba(0, 0, 0, 0.8)',
    },
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
    border: '#e6e6e6',
    divider: '#E2E6E6',
    white: '#FFFFFF',
    black: '#000000',
  },

  // 타이포그래피
  typography: {
    fontFamily: {
      sans: ['Pretendard', 'sans-serif'],
    },
    // 데스크톱 사이즈
    desktop: {
      hero: '46px',      // 상단 배너 제목
      h1: '32px',        // 섹션 제목
      h2: '28px',        // 서브 제목
      h3: '24px',        // 카드 제목
      h4: '22px',        // 피처 제목
      h5: '20px',        // 소제목
      body: '18px',      // 캡션
      base: '16px',      // 본문
      sm: '14px',        // 설명
      xs: '12px',        // 워터마크
    },
    // 모바일 사이즈 (공통 적용)
    mobile: {
      hero: '28px',
      h1: '24px',
      h2: '20px',
      h3: '20px',
      h4: '18px',
      h5: '16px',
      body: '16px',
      base: '14px',
      sm: '12px',
      xs: '12px',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      none: 1,
      tight: 1.4,
      normal: 1.5,
      relaxed: 1.6,
      loose: 1.7,
    },
  },

  // 스페이싱
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '18px',
    xl: '24px',
    '2xl': '32px',
    '3xl': '42px',
    '4xl': '70px',
  },

  // 섹션 레이아웃
  section: {
    desktop: {
      paddingX: '120px',
      paddingY: '110px',
      gap: '70px',
    },
    mobile: {
      paddingX: '20px',
      paddingY: '60px',
      gap: '40px',
    },
    maxWidth: '1200px',
  },

  // 버튼 사이즈
  button: {
    sizes: {
      small: {
        padding: '8px 16px',
        fontSize: '14px',
        height: '32px',
      },
      medium: {
        padding: '12px 24px',
        fontSize: '16px',
        height: '40px',
      },
      large: {
        padding: '8px 22px',
        fontSize: '16px',
        height: '46px',
      },
    },
  },

  // 카드 스타일
  card: {
    borderRadius: '14px',
    padding: '24px',
    minHeight: {
      vision: '230px',
      workStyle: '340px',
      benefit: '184px',
    },
  },

  // 이미지 스타일
  image: {
    borderRadius: '16px',
    height: {
      service: '290px',
      office: '290px',
      slider: '180px',
    },
  },

  // 레이아웃 그리드
  grid: {
    columns: {
      two: 2,
      three: 3,
      four: 4,
    },
    gap: '32px',
    mobileGap: '16px',
  },
} as const

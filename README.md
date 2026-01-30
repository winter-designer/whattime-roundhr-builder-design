# Builder Landing

반응형 랜딩페이지 빌더 프로젝트

## 디자인 시스템

### 폰트
- 기본 폰트: **Pretendard** (모든 텍스트에 적용)

### 아이콘
- **Phosphor Icons** 사용 (`phosphor-react` 패키지)
- https://phosphoricons.com/

### 컬러 시스템
- 메인 컬러: `#1656df` (CSS 변수로 변경 가능)
- Secondary: `rgba(22, 86, 223, 0.05)` (메인 컬러의 아주 옅은 배경)
- 텍스트: 검정, 60% 투명도, 40% 투명도
- 보더/디바이더: `#e6e6e6`, `#E2E6E6`

### 레이아웃
- 전체 너비 고정 (`width: 100%`)
- 최대 콘텐츠 너비: `1200px`
- 데스크톱 패딩: `120px` (좌우), `110px` (상하)
- 모바일 패딩: `20px` (좌우), `60px` (상하)

---

## 섹션 컴포넌트

### TopBanner
상단 히어로 배너

```tsx
<TopBanner
  backgroundImage="/image.jpg"
  title="제목"
  description="설명"
  buttonText="버튼 텍스트"
/>
```

### ServiceIntro
서비스 소개 섹션 (2단 이미지 + 3단 피처)

```tsx
<ServiceIntro
  title="제목"
  description="설명"
  services={[{ image, title, description }]}
  features={[{ icon: 'chart' | 'shield' | 'rocket', title }]}
/>
```

### Vision
비전 섹션 (3단 카드 + Core Value)

```tsx
<Vision
  caption="Vision"
  title="제목"
  description="설명"
  cards={[{ title, description }]}
  coreValues={[{ title, items: [], summary }]}
/>
```

### WorkStyle
일하는 방식 섹션 (4단 카드 + CTA 배너)

```tsx
<WorkStyle
  caption="How to work"
  title="제목"
  cards={[{ number, title, subtitle, description }]}
  cta={{ title, description }}
/>
```

### Benefits
복지 혜택 섹션 (4단 카드 + 이미지 슬라이더)

```tsx
<Benefits
  caption="Benefit"
  title="제목"
  cards={[{ icon: 'clock' | 'coins' | 'graduation' | 'cookie', title, description }]}
  images={[]}
/>
```

### OfficeLocation
오피스 위치 섹션 (2단 이미지 + 주소 + 지도)

```tsx
<OfficeLocation
  caption="Office"
  title="제목"
  images={[]}
  officeName="오피스명"
  address="주소"
  mapImage="/map.jpg"
/>
```

### FullBanner
풀 배너 CTA

```tsx
<FullBanner
  backgroundImage="/image.jpg"
  title="제목"
  buttonText="버튼 텍스트"
/>
```

### Footer
푸터

```tsx
<Footer
  companyName="회사명"
  contactInfo="연락처 정보"
/>
```

---

## 버튼 컴포넌트

### Variants
- `primary`: 메인 컬러 배경
- `outline`: 메인 컬러 보더
- `ghost`: 배경색 없음
- `secondary`: 메인 컬러의 아주 옅은 배경

### Sizes
- `small`: 32px 높이
- `medium`: 40px 높이 (기본값)
- `large`: 46px 높이

```tsx
import { Button } from '@/components/Button'
import { Heart } from 'phosphor-react'

<Button variant="primary" size="large">버튼</Button>
<Button variant="outline" icon={Heart}>아이콘 버튼</Button>
```

---

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

---

## 프로젝트 구조

```
builder-landing/
├── app/
│   ├── globals.css     # 전역 스타일 + CSS 변수
│   ├── layout.tsx      # 루트 레이아웃
│   └── page.tsx        # 홈 페이지
├── components/
│   ├── Button/         # 버튼 컴포넌트
│   ├── Layout/         # 레이아웃 컴포넌트
│   └── Section/        # 섹션 컴포넌트들
│       ├── TopBanner.tsx
│       ├── ServiceIntro.tsx
│       ├── Vision.tsx
│       ├── WorkStyle.tsx
│       ├── Benefits.tsx
│       ├── OfficeLocation.tsx
│       ├── FullBanner.tsx
│       ├── Footer.tsx
│       └── TitleSection.tsx
├── design-system/
│   └── tokens.ts       # 디자인 토큰 정의
└── package.json
```

---

## 메인 컬러 변경하기

`app/globals.css` 파일의 `:root` 섹션에서 CSS 변수를 수정하세요:

```css
:root {
  --color-primary: #1656df;
  --color-primary-light: #4a7de8;
  --color-primary-dark: #0d3fa8;
  --color-secondary: rgba(22, 86, 223, 0.05);
}
```

---

## 반응형 브레이크포인트

- **Desktop**: 기본 (769px 이상)
- **Mobile**: 768px 이하 (`md:` prefix)

모바일 스타일은 모든 섹션에 공통 적용됩니다.

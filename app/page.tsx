import {
  TopBanner,
  ServiceIntro,
  Vision,
  WorkStyle,
  Benefits,
  OfficeLocation,
  FullBanner,
  Footer,
} from '@/components/Section'

// 샘플 이미지 URL (실제 사용 시 교체)
const sampleImage = 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* 상단 배너 */}
      <TopBanner
        backgroundImage={sampleImage}
        title="금융의 복잡함을 데이터로 해결합니다"
        description="PayBridge는 금융을 이해하고 더 나은 선택을 할 수 있도록 돕는 핀테크 기술 기업입니다."
        buttonText="채용 중인 포지션 보기"
      />
      
      {/* 서비스 소개 */}
      <ServiceIntro
        title="데이터로 금융의 복잡함을 해결하는 핀테크 스타트업 페이브릿지입니다."
        description="개인·소상공인을 위한 금융 데이터 기반 자산 관리 및 결제 최적화 플랫폼"
        services={[
          {
            image: sampleImage,
            title: '개인 자산 통합·소비 분석 서비스',
            description: '여러 금융기관에 흩어진 계좌와 카드를 한 번에 연결해 사용자의 소비 패턴과 자산 흐름을 직관적인 데이터로 제공합니다. AI 기반 분석을 통해 월별 소비 예측과 절약 인사이트를 제안합니다.',
          },
          {
            image: sampleImage,
            title: '소상공인 결제 데이터 분석 솔루션',
            description: 'POS·PG 결제 데이터를 실시간으로 수집·분석해 매출 추이, 시간대별 매출, 재방문 고객 비율 등을 한눈에 확인할 수 있습니다. 소상공인이 숫자로 사업 현황을 이해하도록 돕는 SaaS 솔루션입니다.',
          },
        ]}
        features={[
          { icon: 'chart', title: '실시간 금융 데이터 처리\n및 분석 기술' },
          { icon: 'shield', title: '보안과 규제를 기본값으로 설계한\n금융 인프라' },
          { icon: 'rocket', title: '빠르게 성장 중인\n초기 핀테크 스타트업' },
        ]}
        buttonText="더 자세히 보기"
      />
      
      {/* 비전 */}
      <Vision
        caption="Vision"
        title="지금보다 더 크게 성장하는 방법"
        description="단기 성과보다, 지속 가능한 금융 데이터 비즈니스를 만듭니다."
        cards={[
          {
            title: '개인 → 소상공인 → B2B 확장',
            description: '개인 금융 데이터 분석에서 출발해 소상공인 SaaS, 나아가 금융사·플랫폼을 위한 데이터 API 인프라로 확장합니다.',
          },
          {
            title: '기술 중심 성장',
            description: '데이터 표준화, 실시간 처리, AI 분석을 핵심 경쟁력으로 삼아 기능을 만드는 회사를 넘어 기술 기반 인프라 기업으로 성장합니다.',
          },
          {
            title: '신뢰 기반 확장',
            description: '보안과 컴플라이언스를 선제적으로 대응해 금융사가 안심하고 선택할 수 있는 신뢰받는 파트너가 되는 것을 목표로 합니다.',
          },
        ]}
        coreValues={[
          {
            title: '팀 성장',
            items: ['지속 성장', '시너지', '최고 인재 채용'],
            summary: '팀의 성장은 비전 달성을 가능하게 하는 힘입니다.',
          },
          {
            title: '신뢰',
            items: ['win win 전략', '협력', '솔직한 태도'],
            summary: '신뢰는 비전 달성을 위한 가장 중요한 기반입니다.',
          },
        ]}
      />
      
      {/* 일하는 방식 */}
      <WorkStyle
        caption="How to work"
        title="PayBridge 팀은 이렇게 일합니다"
        description="스스로 문제를 정의하고 해결하며, 동료와의 협업 속에서 더 큰 가치를 만들어낼 수 있는 분을 기다립니다."
        cards={[
          {
            number: '01',
            title: '문제 정의',
            subtitle: 'Solution보다 Problem에 집중합니다',
            description: '무엇을 만들지보다, 왜 만들어야 하는지를 먼저 합의합니다.\n\n모든 업무는 명확한 문제 정의와 목표 설정에서 출발합니다.',
          },
          {
            number: '02',
            title: '데이터 중심',
            subtitle: '감이 아닌 근거로 결정합니다',
            description: '의사결정은 개인의 경험이 아니라 지표, 사용자 데이터, 실험 결과를 기준으로 합니다.',
          },
          {
            number: '03',
            title: '정보 공유',
            subtitle: '정보는 공유될수록 팀이 강해집니다',
            description: '진행 상황과 맥락을 숨기지 않고 공유합니다.\n\n직무와 직급에 상관없이 자유롭게 의견을 나눕니다.',
          },
          {
            number: '04',
            title: '책임감',
            subtitle: '내 일의 끝은 결과입니다',
            description: '역할에만 머무르지 않고, 결과에 오너십을 가집니다.\n\n문제가 생기면 회피하지 않고 해결까지 책임집니다.',
          },
        ]}
        cta={{
          title: 'PayBridge에 대해 더 알고싶다면?',
          description: '우리 팀의 이야기를 직접 들어보세요',
        }}
      />
      
      {/* 복지 혜택 */}
      <Benefits
        caption="Benefit"
        title="업무에 집중할 수 있는 환경"
        description="일 잘하는 환경이 곧 최고의 복지라고 믿습니다."
        cards={[
          {
            icon: 'clock',
            title: '근무 제도',
            description: '선택적 근로시간제 (코어타임 13~16시), 주 2회 재택근무',
          },
          {
            icon: 'coins',
            title: '보상',
            description: '업계 상위 수준 연봉, 성과 기반 스톡옵션',
          },
          {
            icon: 'graduation',
            title: '성장 지원',
            description: '연 200만 원 교육·컨퍼런스 지원, 직무별 성장 로드맵',
          },
          {
            icon: 'cookie',
            title: '생활 지원',
            description: '식대 지원, 커피·간식 무제한, 연 1회 건강검진',
          },
        ]}
        images={[sampleImage, sampleImage, sampleImage, sampleImage]}
      />
      
      {/* 오피스 위치 */}
      <OfficeLocation
        caption="Office Location"
        title="우리는 여기에서 일하고 있습니다"
        description="하이브리드 근무를 기본으로, 필요할 때 모입니다."
        images={[sampleImage, sampleImage]}
        officeName="PayBridge 본사"
        address="서울특별시 강남구 테헤란로 501, 패스트파이브 삼성2호점"
        mapImage={sampleImage}
      />
      
      {/* 풀 배너 CTA */}
      <FullBanner
        backgroundImage={sampleImage}
        title="금융의 기준을 함께 만들 동료를 찾고 있습니다"
        buttonText="지금 바로 지원하기"
      />
      
      {/* 푸터 */}
      <Footer
        companyName="SNJ LAB Inc."
        contactInfo="hr@snjlab.com · 서울특별시 강남구 학동로 343, 9층 (논현동, The Pinnacle Gangnam)"
        watermark={{ text: 'made with' }}
      />
    </main>
  )
}

export type CtaLink = {
  label: string;
  href: string;
};

export type FeatureItem = {
  id: string;
  label: string;
  title: string;
  description: string;
  bullets: string[];
  accent: string;
  preview: 'radar' | 'path' | 'priority' | 'handoff';
};

// Replace copy, links, and contact values here when the final brand assets arrive.
export const siteContent = {
  hero: {
    badge: 'Adaptive Audio Guidance',
    title: '소리를, 보이는 감각으로 전환하다.',
    description:
      'SoundSight는 주변의 음향 정보를 더 빠르게 읽을 수 있는 시각 신호로 재구성해, 복잡한 순간에도 방향과 우선순위를 직관적으로 이해하도록 돕는 경험형 서비스입니다.',
    primaryCta: {
      label: '데모 흐름 보기',
      href: '#demo',
    },
    secondaryCta: {
      label: '핵심 기능 살펴보기',
      href: '#features',
    },
    stats: [
      { label: 'Realtime Layering', value: 'Live' },
      { label: 'Directional Cues', value: '360deg' },
      { label: 'Mobile Ready', value: 'iOS / Android' },
    ],
  },
  features: {
    eyebrow: 'Core Features',
    title: '실제 사용 맥락을 기준으로 설계된 핵심 흐름',
    description:
      '기능 설명, 비주얼 카드, 데모 연결 지점을 분리해 두어서 실제 제품 기능이 정리되는 즉시 손쉽게 카피와 콘텐츠를 교체할 수 있도록 만들었습니다.',
    items: [
      {
        id: 'detect',
        label: '01 Signal Capture',
        title: '주변 소리를 빠르게 구분해 의미 있는 신호만 남깁니다.',
        description:
          '복잡한 환경 속에서도 중요한 이벤트를 먼저 읽어낼 수 있도록 음향 신호를 계층화하고, 사용자에게 필요한 정보만 압축해 보여줍니다.',
        bullets: ['환경음과 핵심 알림 분리', '시각적 패턴으로 즉시 전환', '복잡도에 따라 피드백 밀도 조절'],
        accent: '#A1A1F7',
        preview: 'radar',
      },
      {
        id: 'direction',
        label: '02 Direction Mapping',
        title: '어디에서 소리가 오는지 한 번에 이해할 수 있습니다.',
        description:
          '소리의 방향과 거리, 강도를 공간적인 시각 큐로 전달해 사용자가 맥락을 빠르게 파악하고 움직일 수 있도록 지원합니다.',
        bullets: ['방향성에 따른 색상 변화', '강도 기반 레이어 강조', '실시간 경로 힌트 제공'],
        accent: '#0388A6',
        preview: 'path',
      },
      {
        id: 'priority',
        label: '03 Priority Focus',
        title: '지금 중요한 것부터 보이도록 우선순위를 정리합니다.',
        description:
          '모든 알림을 동일하게 다루지 않고, 상황의 긴급도와 relevance에 맞춰 액션 가능한 순서로 시각 피드백을 재조합합니다.',
        bullets: ['긴급 이벤트 우선 노출', '중요도에 따른 애니메이션 차등', '반복 신호의 노이즈 감소'],
        accent: '#F9B95C',
        preview: 'priority',
      },
      {
        id: 'handoff',
        label: '04 Demo to Adoption',
        title: '데모에서 실제 사용으로 넘어가는 흐름까지 매끄럽게 연결합니다.',
        description:
          '랜딩 페이지에서 시연, 문의, 앱 진입 버튼까지 이어지는 구조를 한 번에 설계해 홍보용 페이지와 전환 경로를 동시에 확보합니다.',
        bullets: ['웹 데모 또는 영상 연결 가능', '문의 CTA 강조 구조', '추후 다운로드 버튼 추가 용이'],
        accent: '#C81C30',
        preview: 'handoff',
      },
    ] satisfies FeatureItem[],
  },
  demo: {
    eyebrow: 'Demo Section',
    title: '데모 영상, 시연 링크, 앱 다운로드를 한 자리에서 연결할 준비',
    description:
      '현재는 placeholder 구조로 구현해 두었고, 실제 데모 영상 URL 또는 앱 링크가 준비되는 즉시 이 섹션만 교체해도 전체 전환 흐름이 유지되도록 만들었습니다.',
    primaryCta: {
      label: '시연 요청하기',
      href: '#contact',
    },
    secondaryCta: {
      label: '기능 다시 보기',
      href: '#features',
    },
    checkpoints: [
      '하이라이트 카드에서 데모 요점을 짧게 전달',
      '실제 영상 또는 iframe 삽입 위치 확보',
      '문의/다운로드 CTA를 같은 시선 흐름에 배치',
    ],
  },
  footer: {
    contactLabel: 'Contact',
    contactValue: 'hello@soundsight.app',
    copyright: '© 2026 SoundSight. All rights reserved.',
  },
  socialLinks: [
    { label: 'YouTube', href: 'https://www.youtube.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
  ],
};

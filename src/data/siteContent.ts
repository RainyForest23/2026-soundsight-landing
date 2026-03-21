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

export type DemoReferenceLink = {
  title: string;
  videoId: string;
  href: string;
};

export const siteContent = {
  hero: {
    badge: 'Google Solution Challenge 2026',
    title: '청각적 감정을 시각적 경험으로 전환하는 SoundSight',
    description:
      'SoundSight는 영상 속 대사, 배경음, 긴장감의 변화를 읽고 이를 직관적인 시각 레이어로 재구성합니다. Vertex AI 기반 분석과 2-Track 감정 구조를 통해 소리의 분위기와 사건성을 더 쉽게 이해할 수 있도록 돕습니다.',
    primaryCta: {
      label: '데모 구조 보기',
      href: '#demo',
    },
    secondaryCta: {
      label: '핵심 시스템 보기',
      href: '#features',
    },
    stats: [
      { label: 'AI Pipeline', value: 'Vertex AI' },
      { label: 'Emotion Model', value: '2-Track' },
      { label: 'Deployment Ready', value: 'Web + Cloud' },
    ],
  },
  features: {
    eyebrow: 'Core Features',
    title: '영상 오디오를 해석 가능한 시각 흐름으로 바꾸는 핵심 시스템',
    description:
      '참고 문서와 브랜칭 자료를 바탕으로, 현재 SoundSight의 설명 축을 오디오 추출, AI 추론, 감정 매핑, 시야 레이어 설계 순으로 정리했습니다.',
    items: [
      {
        id: 'detect',
        label: '01 Audio Extraction',
        title: '오디오 피처를 추출해 장면의 감정 변화를 읽기 시작합니다.',
        description:
          'SoundSight는 영상 속 대사와 배경음을 분석 가능한 신호로 분해해, 시간대별 감정 단서를 추출하는 첫 번째 레이어를 구성합니다.',
        bullets: ['구간별 오디오 피처 추출', '대사와 배경음 흐름 분리', '감정 추론용 타임라인 데이터 생성'],
        accent: '#9678F8',
        preview: 'radar',
      },
      {
        id: 'direction',
        label: '02 AI Interpretation',
        title: 'Vertex AI 기반 해석으로 소리의 맥락을 더 깊게 읽습니다.',
        description:
          '브랜칭 자료의 흐름처럼 오디오 파형을 그대로 보여주는 데서 멈추지 않고, Vertex AI와 Gemini 계열 추론 파이프를 통해 장면의 의미를 감정 문맥으로 번역합니다.',
        bullets: ['Vertex AI 연결 구조', '장면 맥락 기반 감정 해석', '시연용 시각 출력 포맷 정리'],
        accent: '#1297BE',
        preview: 'path',
      },
      {
        id: 'priority',
        label: '03 Emotion Mapping',
        title: 'State와 Event를 분리한 2-Track 구조로 감정을 맵핑합니다.',
        description:
          'PDF 자료에 나온 2-Track System과 Russell Valence-Arousal 구조를 반영해, 지속 상태와 순간 사건을 구분하고 감정 좌표로 시각화합니다.',
        bullets: ['State / Event 분리 설계', 'Russell Valence-Arousal 반영', '색과 모션으로 감정 밀도 표현'],
        accent: '#F4B758',
        preview: 'priority',
      },
      {
        id: 'handoff',
        label: '04 Vision Layer',
        title: '주변시야와 중심시야를 나눠 이해 가능한 인터페이스로 보여줍니다.',
        description:
          '최종 출력 단계에서는 주변시야에 전체 분위기와 사건감을, 중심시야에 현재 장면의 핵심 정보를 두어 과도한 시각 피로 없이 이해를 돕는 방향을 제안합니다.',
        bullets: ['중심시야 / 주변시야 역할 분리', '하이라이트 중심 시각 가이드', '모바일 화면에도 맞는 간결한 구조'],
        accent: '#D61C3A',
        preview: 'handoff',
      },
    ] satisfies FeatureItem[],
  },
  demo: {
    eyebrow: 'Demo Section',
    title: '실제 웹 데모와 영화 샘플 링크를 한 흐름으로 연결해 바로 시연할 수 있습니다',
    description:
      '실제 SoundSight 데모 웹앱으로 바로 이동할 수 있고, 아래 영화 샘플 링크는 발표나 시연 중 곧바로 복사해서 활용할 수 있도록 구성했습니다.',
    primaryCta: {
      label: '데모 바로가기',
      href: 'https://sc-soundsight.web.app/',
    },
    secondaryCta: {
      label: '시스템 다시 보기',
      href: '#features',
    },
    checkpoints: [
      '실제 SoundSight 웹 데모로 바로 이어지는 CTA',
      '시연용 영화 샘플 링크를 클릭 즉시 복사하는 구조',
      '오디오 해석 흐름과 발표 자료 연결에 맞춘 설명 영역',
    ],
    referenceVideos: [
      {
        title: '인터스텔라',
        videoId: 'LmZB58uBRpm6WalM0nNz',
        href: 'https://www.youtube.com/watch?v=gIHjXDxghqE',
      },
      {
        title: '헤어질결심',
        videoId: '0iIgjQfSqS4',
        href: 'https://www.youtube.com/watch?v=0iIgjQfSqS4',
      },
      {
        title: '리틀포레스트',
        videoId: 'KWG4tYGYgR8ZSnT5HC6K',
        href: 'https://www.youtube.com/watch?v=6TH1u3n1UY4',
      },
    ] satisfies DemoReferenceLink[],
  },
  footer: {
    contactLabel: 'Contact',
    contactValue: 'soundsight.team@gmail.com',
    copyright: '© 2026 SoundSight. All rights reserved.',
  },
  socialLinks: [
    { label: 'YouTube', href: 'https://www.youtube.com/' },
    { label: 'Instagram', href: 'https://www.instagram.com/' },
  ],
};

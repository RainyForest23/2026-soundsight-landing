# SoundSight Landing Page

SoundSight 홍보용 원페이지 랜딩 페이지 프로젝트입니다. Vite + React + TypeScript 기반으로 구성했고, 유체형 그라디언트 메시 배경과 스크롤 중심 인터랙션에 맞춰 구조를 분리해 두었습니다.

## Quick Start

```bash
npm install
npm run dev
```

## Directory Structure

```text
.
├── .github
│   └── pull_request_template.md
├── docs
│   └── git-branch-lifecycle.md
├── public
│   └── favicon.svg
├── src
│   ├── components
│   │   ├── background
│   │   ├── brand
│   │   └── common
│   ├── data
│   ├── hooks
│   ├── lib
│   ├── sections
│   └── styles
│       └── index.css
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Content Update Points

- 최종 카피, CTA 링크, 연락처, SNS 링크는 `src/data/siteContent.ts`에서 한 번에 바꿀 수 있습니다.
- 실제 로고 에셋이 들어오면 `src/components/brand/SoundSightMark.tsx`를 교체하면 됩니다.
- 데모 영상, iframe, 앱 다운로드 버튼은 `src/sections/DemoSection.tsx`와 `src/components/common/DemoHighlight.tsx`에서 연결할 수 있습니다.

## Git Workflow

브랜치 운영 규칙은 [`docs/git-branch-lifecycle.md`](./docs/git-branch-lifecycle.md)에 정리했습니다. 작업은 `main`에서 직접 하지 않고, `codex/` 접두사 브랜치에서 진행하도록 맞춰 두었습니다.

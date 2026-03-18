# Git Branch Lifecycle

## Branch Rules

- `main`: 항상 배포 가능한 상태를 유지합니다.
- `codex/<scope>`: 구현 작업 브랜치입니다. 예: `codex/landing-foundation`, `codex/hero-polish`
- `release/<yyyy-mm-dd>`: 배포 직전 최종 점검이 필요할 때만 생성합니다.
- `hotfix/<scope>`: 운영 중 긴급 수정이 필요할 때 사용합니다.

## Recommended Lifecycle

1. `main` 최신 기준에서 새 작업 브랜치를 생성합니다.
2. 하나의 브랜치는 하나의 목표만 다룹니다.
3. 작업 중간에도 의미 단위로 자주 커밋합니다.
4. PR에서 디자인, 반응형, SEO, 성능 체크를 완료합니다.
5. 머지 후 작업 브랜치는 삭제합니다.

## Suggested Commands

```bash
git switch main
git pull origin main
git switch -c codex/<scope>
```

작업 후:

```bash
git status
git add .
git commit -m "feat: <summary>"
git push -u origin codex/<scope>
```

머지 후 정리:

```bash
git switch main
git pull origin main
git branch -d codex/<scope>
```

## Pull Request Checklist

- Hero, Features, Demo, Footer 흐름이 한 페이지에서 자연스럽게 이어지는가
- 모바일 `100vh` 대응이 깨지지 않는가
- CTA 링크가 올바른 목적지로 연결되는가
- placeholder 카피/링크가 남아 있지 않은가
- 애니메이션이 과도하게 성능을 떨어뜨리지 않는가
- SEO 기본 메타가 반영되어 있는가

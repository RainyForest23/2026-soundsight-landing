import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { DemoHighlight } from '../components/common/DemoHighlight';
import { SectionHeading } from '../components/common/SectionHeading';
import { siteContent } from '../data/siteContent';
import { fadeUp, viewport } from '../lib/motion';
import styles from './DemoSection.module.css';

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value);
    return;
  }

  const fallback = document.createElement('textarea');
  fallback.value = value;
  fallback.setAttribute('readonly', '');
  fallback.style.position = 'absolute';
  fallback.style.opacity = '0';
  document.body.appendChild(fallback);
  fallback.select();
  document.execCommand('copy');
  document.body.removeChild(fallback);
}

export function DemoSection() {
  const { demo } = siteContent;
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [copyError, setCopyError] = useState<string | null>(null);
  const copyTimerRef = useRef<number | null>(null);
  const isExternalDemo = demo.primaryCta.href.startsWith('http');

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) {
        window.clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  const handleCopy = async (videoId: string, href: string) => {
    try {
      await copyText(href);
      setCopiedId(videoId);
      setCopyError(null);

      if (copyTimerRef.current) {
        window.clearTimeout(copyTimerRef.current);
      }

      copyTimerRef.current = window.setTimeout(() => {
        setCopiedId(null);
      }, 1800);
    } catch {
      setCopiedId(null);
      setCopyError('브라우저에서 복사를 허용하지 않았습니다.');
    }
  };

  return (
    <section className={`section ${styles.section}`} id="demo">
      <Container className={styles.layout}>
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp(0)}>
          <SectionHeading eyebrow={demo.eyebrow} title={demo.title} description={demo.description} />
        </motion.div>

        <div className={styles.grid}>
          <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp(0.08)}>
            <DemoHighlight checkpoints={demo.checkpoints} />
          </motion.div>

          <motion.aside
            className={styles.ctaPanel}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp(0.16)}
          >
            <span className={styles.panelEyebrow}>Demo Structure</span>
            <h3>샘플 장면과 해석 결과를 곧바로 연결하는 설명 영역</h3>
            <p>
              현재는 레퍼런스 PDF 기준으로 설명 흐름을 맞춰 두었습니다. 실제 데모 영상, 시연 링크, 팀
              소개 자료가 준비되면 이 영역에서 바로 공개용 액션으로 전환할 수 있습니다.
            </p>

            <div className="buttonRow">
              <a
                className="buttonPrimary"
                href={demo.primaryCta.href}
                target={isExternalDemo ? '_blank' : undefined}
                rel={isExternalDemo ? 'noreferrer' : undefined}
              >
                {demo.primaryCta.label}
              </a>
              <a className="buttonSecondary" href={demo.secondaryCta.href}>
                {demo.secondaryCta.label}
              </a>
            </div>

            <div className={styles.referenceBlock}>
              <div className={styles.referenceHeader}>
                <span className={styles.referenceLabel}>YouTube Samples</span>
                <p>아래 항목을 누르면 유튜브 링크가 열리지 않고 바로 복사됩니다.</p>
              </div>

              <div className={styles.referenceList}>
                {demo.referenceVideos.map((video) => (
                  <button
                    key={video.videoId}
                    type="button"
                    className={styles.referenceButton}
                    onClick={() => void handleCopy(video.videoId, video.href)}
                  >
                    <span className={styles.referenceText}>
                      <strong>{video.title}</strong>
                      <span>{video.videoId}</span>
                    </span>
                    <span className={styles.referenceAction}>
                      {copiedId === video.videoId ? '복사됨' : '링크 복사'}
                    </span>
                  </button>
                ))}
              </div>

              {copyError ? <p className={styles.copyError}>{copyError}</p> : null}
            </div>

            <div className={styles.notes}>
              <div>
                <span>Demo Asset</span>
                <strong>https://sc-soundsight.web.app/</strong>
              </div>
              <div>
                <span>Sample Flow</span>
                <strong>Interstellar, 헤어질결심, 리틀포레스트 링크 복사</strong>
              </div>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}

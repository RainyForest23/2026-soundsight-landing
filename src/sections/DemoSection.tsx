import { motion } from 'framer-motion';
import { Container } from '../components/common/Container';
import { DemoHighlight } from '../components/common/DemoHighlight';
import { SectionHeading } from '../components/common/SectionHeading';
import { siteContent } from '../data/siteContent';
import { fadeUp, viewport } from '../lib/motion';
import styles from './DemoSection.module.css';

export function DemoSection() {
  const { demo } = siteContent;

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
              <a className="buttonPrimary" href={demo.primaryCta.href}>
                {demo.primaryCta.label}
              </a>
              <a className="buttonSecondary" href={demo.secondaryCta.href}>
                {demo.secondaryCta.label}
              </a>
            </div>

            <div className={styles.notes}>
              <div>
                <span>Demo Asset</span>
                <strong>영상 샘플 또는 시연 URL</strong>
              </div>
              <div>
                <span>Supporting Docs</span>
                <strong>포스터, 발표자료, 프로젝트 소개서</strong>
              </div>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}

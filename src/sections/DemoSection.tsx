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
            <span className={styles.panelEyebrow}>Action Layer</span>
            <h3>데모 연결 전환율을 높이기 위한 CTA 집중 영역</h3>
            <p>
              실제 영상, 앱스토어 링크, 웹 데모 URL 중 어떤 자산이 먼저 준비되더라도 이 영역만 교체해서
              즉시 연결할 수 있도록 설계했습니다.
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
                <span>Embed Ready</span>
                <strong>iframe / HTML5 video slot</strong>
              </div>
              <div>
                <span>Conversion</span>
                <strong>contact, install, signup</strong>
              </div>
            </div>
          </motion.aside>
        </div>
      </Container>
    </section>
  );
}

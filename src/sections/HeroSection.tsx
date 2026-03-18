import { motion } from 'framer-motion';
import { SoundSightMark } from '../components/brand/SoundSightMark';
import { Container } from '../components/common/Container';
import { ScrollCue } from '../components/common/ScrollCue';
import { siteContent } from '../data/siteContent';
import { fadeUp } from '../lib/motion';
import styles from './HeroSection.module.css';

export function HeroSection() {
  const { hero } = siteContent;

  return (
    <section className={`section ${styles.hero}`} id="top">
      <Container className={styles.layout}>
        <motion.div className={styles.copy} initial="hidden" animate="visible" variants={fadeUp(0)}>
          <motion.div className={styles.brandRow} variants={fadeUp(0.05)}>
            <SoundSightMark className={styles.logo} />
            <div>
              <span className={styles.brandName}>SoundSight</span>
              <span className={styles.brandTag}>{hero.badge}</span>
            </div>
          </motion.div>

          <motion.h1 className={styles.title} variants={fadeUp(0.1)}>
            {hero.title}
          </motion.h1>
          <motion.p className={styles.description} variants={fadeUp(0.16)}>
            {hero.description}
          </motion.p>

          <motion.div className="buttonRow" variants={fadeUp(0.24)}>
            <a className="buttonPrimary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
            </a>
            <a className="buttonSecondary" href={hero.secondaryCta.href}>
              {hero.secondaryCta.label}
            </a>
          </motion.div>

          <motion.div className={styles.stats} variants={fadeUp(0.3)}>
            {hero.stats.map((item) => (
              <div key={item.label} className={styles.statCard}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div className={styles.scrollWrap} variants={fadeUp(0.36)}>
            <ScrollCue href="#features" />
          </motion.div>
        </motion.div>

        <motion.div className={styles.visual} initial="hidden" animate="visible" variants={fadeUp(0.18)}>
          <div className={styles.visualShell}>
            <div className={styles.visualHeader}>
              <span>Live Direction Feed</span>
              <strong>Spatial Overview</strong>
            </div>

            <div className={styles.radarStage}>
              <div className={styles.centerCore} />
              <div className={styles.ring} />
              <div className={styles.ring} />
              <div className={styles.ring} />
              <div className={styles.signalPath} />
              <div className={styles.signalDot} />
              <div className={styles.angleChip}>Incoming signal · 2 o&apos;clock</div>
            </div>

            <div className={styles.visualMetrics}>
              <div className={styles.metricCard}>
                <span>Priority</span>
                <strong>Urgent sound surfaced first</strong>
              </div>
              <div className={styles.metricCard}>
                <span>Mode</span>
                <strong>Mobile-first live demo ready</strong>
              </div>
            </div>
          </div>

          <div className={styles.floatingCard}>
            <span>Signal Layers</span>
            <strong>Context, direction, intensity</strong>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

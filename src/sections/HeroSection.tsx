import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { SoundSightMark } from '../components/brand/SoundSightMark';
import { Container } from '../components/common/Container';
import { ScrollCue } from '../components/common/ScrollCue';
import { siteContent } from '../data/siteContent';
import { fadeUp } from '../lib/motion';
import styles from './HeroSection.module.css';

export function HeroSection() {
  const { hero } = siteContent;
  const waveHeights = [14, 20, 28, 38, 52, 70, 86, 98, 86, 68, 54, 42, 58, 76, 94, 100, 88, 64, 48, 36, 46, 62, 78, 90, 82, 64, 50, 36, 24, 16];

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
              <span>Audio to Vision Flow</span>
              <strong>Scene Interpretation</strong>
            </div>

            <div className={styles.pipelineStage}>
              <div className={styles.sceneCard}>
                <span className={styles.sceneLabel}>Sample Scene</span>
                <div className={styles.sceneFrame}>
                  <div className={styles.sceneGlow} />
                  <div className={styles.sceneCaption}>Come on. Ease it up.</div>
                </div>
              </div>

              <div className={styles.bridge}>
                <div className={styles.bridgeGlow} />
                <SoundSightMark className={styles.pipelineLogo} />
              </div>

              <div className={styles.waveWrap}>
                <span className={styles.waveLabel}>Emotion Wave</span>
                <div className={styles.waveform}>
                  {waveHeights.map((height, index) => (
                    <span
                      key={index}
                      style={
                        {
                          height: `${height}%`,
                          opacity: 0.45 + (index % 5) * 0.1,
                        } as CSSProperties
                      }
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.visualMetrics}>
              <div className={styles.metricCard}>
                <span>Model</span>
                <strong>Vertex AI + Gemini pipeline</strong>
              </div>
              <div className={styles.metricCard}>
                <span>Mapping</span>
                <strong>State / Event + Valence-Arousal</strong>
              </div>
            </div>
          </div>

          <div className={styles.floatingCard}>
            <span>Visual Output</span>
            <strong>Peripheral context, central focus</strong>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

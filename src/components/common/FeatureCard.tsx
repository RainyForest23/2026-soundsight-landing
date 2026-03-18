import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import type { FeatureItem } from '../../data/siteContent';
import { fadeUp, viewport } from '../../lib/motion';
import styles from './FeatureCard.module.css';

type FeatureCardProps = {
  feature: FeatureItem;
  index: number;
};

function Preview({ preview }: Pick<FeatureItem, 'preview'>) {
  return (
    <div className={styles.preview} data-preview={preview}>
      <div className={styles.previewGlow} />
      <div className={styles.previewFrame}>
        <div className={styles.previewLabel}>Live Pattern</div>
        {preview === 'radar' && (
          <>
            <span className={styles.ring} />
            <span className={styles.ring} />
            <span className={styles.radarDot} />
            <span className={styles.waveLine} />
          </>
        )}
        {preview === 'path' && (
          <>
            <span className={styles.pathPoint} />
            <span className={styles.pathPoint} />
            <span className={styles.pathPoint} />
            <svg className={styles.pathLine} viewBox="0 0 240 140" preserveAspectRatio="none">
              <path d="M12 118C48 112 74 74 118 76C162 78 166 22 228 28" pathLength="100" />
            </svg>
          </>
        )}
        {preview === 'priority' && (
          <div className={styles.priorityBars}>
            <span />
            <span />
            <span />
            <span />
          </div>
        )}
        {preview === 'handoff' && (
          <div className={styles.handoffFlow}>
            <span className={styles.flowChip}>Landing</span>
            <span className={styles.flowArrow} />
            <span className={styles.flowChip}>Demo</span>
            <span className={styles.flowArrow} />
            <span className={styles.flowChip}>Action</span>
          </div>
        )}
      </div>
    </div>
  );
}

export function FeatureCard({ feature, index }: FeatureCardProps) {
  return (
    <motion.article
      className={styles.card}
      style={{ '--accent': feature.accent } as CSSProperties}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp(index * 0.08)}
    >
      <div className={styles.content}>
        <span className={styles.label}>{feature.label}</span>
        <h3 className={styles.title}>{feature.title}</h3>
        <p className={styles.description}>{feature.description}</p>
        <ul className={styles.list}>
          {feature.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </div>
      <Preview preview={feature.preview} />
    </motion.article>
  );
}

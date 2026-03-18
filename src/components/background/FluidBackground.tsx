import type { CSSProperties } from 'react';
import styles from './FluidBackground.module.css';

const orbs = [
  'var(--mesh-lavender)',
  'var(--mesh-gold)',
  'var(--mesh-teal)',
];

const liquidBlobs = [
  'var(--mesh-lavender)',
  'var(--mesh-teal)',
];

export function FluidBackground() {
  return (
    <div className={styles.backdrop} aria-hidden="true">
      <div className={styles.gradientBase} />
      <div className={styles.haze} />
      {orbs.map((color, index) => (
        <span
          key={color}
          className={styles.orb}
          style={
            {
              '--orb-color': color,
              '--orb-index': index,
            } as CSSProperties
          }
        />
      ))}
      <div className={styles.liquidField}>
        {liquidBlobs.map((color, index) => (
          <span
            key={`${color}-${index}`}
            className={styles.liquidBlob}
            style={
              {
                '--liquid-color': color,
                '--liquid-delay': `${index * -3.5}s`,
              } as CSSProperties
            }
          />
        ))}
      </div>
      <div className={styles.rippleField}>
        <span className={styles.ripple} />
        <span className={styles.ripple} />
      </div>
      <div className={styles.noise} />
    </div>
  );
}

import type { CSSProperties } from 'react';
import styles from './FluidBackground.module.css';

const orbs = [
  'var(--mesh-lavender)',
  'var(--mesh-cherry)',
  'var(--mesh-olive)',
  'var(--mesh-butter)',
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
      <div className={styles.rippleField}>
        <span className={styles.ripple} />
        <span className={styles.ripple} />
        <span className={styles.ripple} />
      </div>
      <div className={styles.noise} />
    </div>
  );
}

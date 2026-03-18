import styles from './ScrollCue.module.css';

type ScrollCueProps = {
  href: string;
};

export function ScrollCue({ href }: ScrollCueProps) {
  return (
    <a className={styles.cue} href={href}>
      <span className={styles.mouse}>
        <span className={styles.dot} />
      </span>
      <span className={styles.label}>Scroll to explore</span>
    </a>
  );
}

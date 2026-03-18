import styles from './DemoHighlight.module.css';

type DemoHighlightProps = {
  checkpoints: string[];
};

export function DemoHighlight({ checkpoints }: DemoHighlightProps) {
  return (
    <div className={styles.panel}>
      <div className={styles.previewWindow}>
        <div className={styles.previewHeader}>
          <span />
          <span />
          <span />
        </div>
        <div className={styles.previewStage}>
          <div className={styles.primaryWave} />
          <div className={styles.sideMetric}>
            <strong>Spatial Feed</strong>
            <span>Signal active</span>
          </div>
          <div className={styles.timeline}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <ul className={styles.checklist}>
        {checkpoints.map((checkpoint) => (
          <li key={checkpoint}>{checkpoint}</li>
        ))}
      </ul>
    </div>
  );
}

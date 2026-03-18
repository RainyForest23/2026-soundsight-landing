import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { SoundSightMark } from '../components/brand/SoundSightMark';
import { Container } from '../components/common/Container';
import { ScrollCue } from '../components/common/ScrollCue';
import { siteContent } from '../data/siteContent';
import { fadeUp } from '../lib/motion';
import styles from './HeroSection.module.css';

type IntroTransform = {
  scale: number;
  x: number;
  y: number;
};

export function HeroSection() {
  const { hero } = siteContent;
  const shouldReduceMotion = useReducedMotion();
  const [introActive, setIntroActive] = useState(!shouldReduceMotion);
  const [logoTransform, setLogoTransform] = useState<IntroTransform>({ scale: 0.28, x: 0, y: 0 });
  const [wordmarkTransform, setWordmarkTransform] = useState<IntroTransform>({ scale: 0.42, x: 0, y: 0 });
  const introLogoRef = useRef<HTMLDivElement | null>(null);
  const introWordmarkRef = useRef<HTMLSpanElement | null>(null);
  const brandLogoRef = useRef<HTMLDivElement | null>(null);
  const brandNameRef = useRef<HTMLSpanElement | null>(null);
  const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const waveHeights = [14, 20, 28, 38, 52, 70, 86, 98, 86, 68, 54, 42, 58, 76, 94, 100, 88, 64, 48, 36, 46, 62, 78, 90, 82, 64, 50, 36, 24, 16];

  useEffect(() => {
    if (shouldReduceMotion) {
      setIntroActive(false);
      return;
    }

    setIntroActive(true);
    const timeout = window.setTimeout(() => {
      setIntroActive(false);
    }, 1750);

    return () => window.clearTimeout(timeout);
  }, [shouldReduceMotion]);

  useLayoutEffect(() => {
    if (!introActive || shouldReduceMotion) {
      return;
    }

    const updateTransforms = () => {
      if (!introLogoRef.current || !introWordmarkRef.current || !brandLogoRef.current || !brandNameRef.current) {
        return;
      }

      const introLogoRect = introLogoRef.current.getBoundingClientRect();
      const introWordmarkRect = introWordmarkRef.current.getBoundingClientRect();
      const brandLogoRect = brandLogoRef.current.getBoundingClientRect();
      const brandNameRect = brandNameRef.current.getBoundingClientRect();
      const hiddenYOffset = 56;

      const logoX = brandLogoRect.left + brandLogoRect.width / 2 - (introLogoRect.left + introLogoRect.width / 2);
      const logoY = brandLogoRect.top + brandLogoRect.height / 2 - hiddenYOffset - (introLogoRect.top + introLogoRect.height / 2);
      const wordmarkX = brandNameRect.left + brandNameRect.width / 2 - (introWordmarkRect.left + introWordmarkRect.width / 2);
      const wordmarkY = brandNameRect.top + brandNameRect.height / 2 - hiddenYOffset - (introWordmarkRect.top + introWordmarkRect.height / 2);
      const logoScale = brandLogoRect.width / introLogoRect.width;
      const wordmarkScale = brandNameRect.width / introWordmarkRect.width;

      setLogoTransform({
        scale: Math.max(0.18, Math.min(logoScale, 0.34)),
        x: logoX,
        y: logoY,
      });
      setWordmarkTransform({
        scale: Math.max(0.24, Math.min(wordmarkScale, 0.46)),
        x: wordmarkX,
        y: wordmarkY,
      });
    };

    const frame = window.requestAnimationFrame(updateTransforms);
    const handleResize = () => window.requestAnimationFrame(updateTransforms);
    window.addEventListener('resize', handleResize);

    document.fonts?.ready.then(updateTransforms).catch(() => {});

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', handleResize);
    };
  }, [introActive, shouldReduceMotion]);

  return (
    <section className={`section ${styles.hero}`} id="top">
      <AnimatePresence>
        {!shouldReduceMotion && introActive ? (
          <motion.div
            className={styles.introOverlay}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.72, ease: easeCurve } }}
          >
            <motion.div
              className={styles.introInner}
              initial={{ opacity: 0, scale: 0.8, y: 28, filter: 'blur(18px)' }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0.14, filter: 'blur(10px)' }}
              transition={{ duration: 1.18, ease: easeCurve }}
            >
              <motion.div
                ref={introLogoRef}
                className={styles.introLogoWrap}
                initial={{ opacity: 0, scale: 0.86, y: 28 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{
                  opacity: 0.9,
                  scale: logoTransform.scale,
                  x: logoTransform.x,
                  y: logoTransform.y,
                }}
                transition={{ duration: 1.08, ease: easeCurve }}
              >
                <SoundSightMark className={styles.introLogo} />
              </motion.div>
              <motion.span
                ref={introWordmarkRef}
                className={styles.introWordmark}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{
                  opacity: 0.82,
                  scale: wordmarkTransform.scale,
                  x: wordmarkTransform.x,
                  y: wordmarkTransform.y,
                }}
                transition={{ duration: 1.02, delay: 0.08, ease: easeCurve }}
              >
                SoundSight
              </motion.span>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <Container className={styles.layout}>
        <motion.div className={styles.copy} initial="hidden" animate={introActive ? 'hidden' : 'visible'} variants={fadeUp(0)}>
          <motion.div className={styles.brandRow} variants={fadeUp(0.05)}>
            <div ref={brandLogoRef} className={styles.logoSlot}>
              <SoundSightMark className={styles.logo} />
            </div>
            <div className={styles.brandText}>
              <span ref={brandNameRef} className={styles.brandName}>
                SoundSight
              </span>
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

        <motion.div className={styles.visual} initial="hidden" animate={introActive ? 'hidden' : 'visible'} variants={fadeUp(0.18)}>
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

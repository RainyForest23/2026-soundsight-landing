import { Container } from '../components/common/Container';
import { FeatureCard } from '../components/common/FeatureCard';
import { SectionHeading } from '../components/common/SectionHeading';
import { siteContent } from '../data/siteContent';
import { motion } from 'framer-motion';
import { fadeUp, viewport } from '../lib/motion';
import styles from './FeaturesSection.module.css';

export function FeaturesSection() {
  const { features } = siteContent;

  return (
    <section className={`section ${styles.section}`} id="features">
      <Container className={styles.layout}>
        <motion.div initial="hidden" whileInView="visible" viewport={viewport} variants={fadeUp(0)}>
          <SectionHeading
            eyebrow={features.eyebrow}
            title={features.title}
            description={features.description}
          />
        </motion.div>

        <div className={styles.grid}>
          {features.items.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}

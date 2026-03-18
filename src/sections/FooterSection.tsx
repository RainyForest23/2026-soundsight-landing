import { Container } from '../components/common/Container';
import { SocialIconLink } from '../components/common/SocialIconLink';
import { siteContent } from '../data/siteContent';
import styles from './FooterSection.module.css';

export function FooterSection() {
  const { footer, socialLinks } = siteContent;

  return (
    <footer className={styles.footer} id="contact">
      <Container className={styles.layout}>
        <div className={styles.summary}>
          <span className={styles.label}>SoundSight</span>
          <p>
            데모 링크, 로고 에셋, 서비스 소개 문구가 확정되면 이 랜딩 페이지는 그대로 유지한 채 콘텐츠만 빠르게
            교체할 수 있도록 구조화했습니다.
          </p>
        </div>

        <div className={styles.contact}>
          <span className={styles.contactLabel}>{footer.contactLabel}</span>
          <a href={`mailto:${footer.contactValue}`}>{footer.contactValue}</a>
          <div className={styles.socials}>
            {socialLinks.map((social) => (
              <SocialIconLink
                key={social.label}
                label={social.label as 'YouTube' | 'Instagram'}
                href={social.href}
              />
            ))}
          </div>
        </div>
      </Container>

      <Container>
        <div className={styles.bottomRow}>
          <span>{footer.copyright}</span>
          <a href="#top">Back to top</a>
        </div>
      </Container>
    </footer>
  );
}

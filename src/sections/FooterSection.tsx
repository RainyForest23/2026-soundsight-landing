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
            발표자료 레퍼런스와 프로젝트 브랜치 문서를 바탕으로 핵심 메시지를 정리해두었습니다. 실제 데모
            자산과 최종 링크만 추가하면 공개용 랜딩으로 바로 전환할 수 있습니다.
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

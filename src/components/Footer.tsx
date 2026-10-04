import { links } from "../data/links";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./Footer.module.css";

export function Footer() {
  const { content } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {year} Kayke Celli. {content.footer.rights}
        </p>
        <div className={styles.links}>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href={links.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={`mailto:${links.email}`}>Email</a>
        </div>
      </div>
    </footer>
  );
}

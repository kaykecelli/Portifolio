import { links } from "../data/links";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./Contact.module.css";

export function Contact() {
  const { content } = useLanguage();
  const { contact } = content;

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="section__inner">
        <p className="section__eyebrow">{contact.eyebrow}</p>
        <h2 className="section__title">{contact.title}</h2>
        <p className="section__lead">{contact.lead}</p>

        <div className={styles.grid}>
          <div className={styles.block}>
            <h3 className={styles.label}>{contact.emailLabel}</h3>
            <a className={styles.value} href={`mailto:${links.email}`}>
              {links.email}
            </a>
          </div>

          <div className={styles.block}>
            <h3 className={styles.label}>{contact.phoneLabel}</h3>
            <a className={styles.value} href={links.whatsapp} target="_blank" rel="noreferrer">
              {links.phone}
            </a>
          </div>

          <div className={styles.block}>
            <h3 className={styles.label}>{contact.socialLabel}</h3>
            <div className={styles.socials}>
              <a href={links.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={links.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

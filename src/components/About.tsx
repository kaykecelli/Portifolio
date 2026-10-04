import { useLanguage } from "../i18n/LanguageContext";
import styles from "./About.module.css";

export function About() {
  const { content } = useLanguage();
  const { about } = content;

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="section__inner">
        <p className="section__eyebrow">{about.eyebrow}</p>
        <h2 className="section__title">{about.title}</h2>
        <p className="section__lead">{about.lead}</p>
        <div className={styles.body}>
          {about.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <ul className={styles.focus} aria-label="Focus areas">
          {about.focus.map((item) => (
            <li key={item} className={styles.chip}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

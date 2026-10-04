import { links } from "../data/links";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./Hero.module.css";

export function Hero() {
  const { content } = useLanguage();
  const { hero } = content;

  return (
    <section id="home" className={styles.hero} aria-label={hero.name}>
      <div className={styles.inner}>
        <p className={styles.greeting}>{hero.greeting}</p>
        <h1 className={styles.name}>{hero.name}</h1>
        <p className={styles.title}>{hero.title}</p>
        <p className={styles.subtitle}>{hero.subtitle}</p>
        <div className={styles.ctas}>
          <a className="btn btn--primary" href="#contact">
            {hero.ctaContact}
          </a>
          <a
            className="btn btn--ghost"
            href={links.cv}
            target="_blank"
            rel="noreferrer"
          >
            {hero.ctaCv}
          </a>
        </div>
      </div>
    </section>
  );
}

import { useLanguage } from "../i18n/LanguageContext";
import styles from "./Resume.module.css";

export function Resume() {
  const { content } = useLanguage();
  const { resume } = content;

  return (
    <section id="resume" className={`section ${styles.resume}`}>
      <div className="section__inner">
        <p className="section__eyebrow">{resume.eyebrow}</p>
        <h2 className="section__title">{resume.title}</h2>
        <p className="section__lead">{resume.lead}</p>

        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.blockTitle}>{resume.experienceTitle}</h3>
            <ol className={styles.timeline}>
              {resume.experience.map((item) => (
                <li key={`${item.company}-${item.role}-${item.period}`} className={styles.item}>
                  <div className={styles.dot} aria-hidden />
                  <div>
                    <p className={styles.period}>{item.period}</p>
                    <h4 className={styles.itemTitle}>{item.role}</h4>
                    <p className={styles.itemMeta}>{item.company}</p>
                    <p className={styles.itemDesc}>{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <h3 className={styles.blockTitle}>{resume.educationTitle}</h3>
            <ul className={styles.eduList}>
              {resume.education.map((item) => (
                <li key={`${item.school}-${item.degree}`} className={styles.eduItem}>
                  <p className={styles.period}>{item.period}</p>
                  <h4 className={styles.itemTitle}>{item.degree}</h4>
                  <p className={styles.itemMeta}>{item.school}</p>
                  {item.detail ? <p className={styles.itemDesc}>{item.detail}</p> : null}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.blockTitle}>{resume.skillsTitle}</h3>
            <ul className={styles.skills}>
              {resume.skills.map((skill) => (
                <li key={skill.name} className={styles.skill}>
                  <div className={styles.skillHead}>
                    <span>{skill.name}</span>
                    <span className={styles.skillPct}>{skill.level}%</span>
                  </div>
                  <div className={styles.bar} role="presentation">
                    <div
                      className={styles.barFill}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

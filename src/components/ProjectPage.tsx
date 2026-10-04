import { useEffect } from "react";
import { asset } from "../data/asset";
import { sortedProjects, type Project } from "../data/projects";
import type { Lang } from "../data/types";
import { useLanguage } from "../i18n/LanguageContext";
import { HOME_HREF, projectHref } from "../router";
import { ProjectGallery } from "./ProjectGallery";
import styles from "./ProjectPage.module.css";

const SITE_TITLE = "Kayke Celli";

type Props = {
  id: string;
};

export function ProjectPage({ id }: Props) {
  const { content, lang } = useLanguage();
  const labels = content.portfolio;
  const index = sortedProjects.findIndex((p) => p.id === id);
  const project = sortedProjects[index];
  const title = project?.[lang].title;

  useEffect(() => {
    const previousTitle = document.title;
    if (title) document.title = `${title} | ${SITE_TITLE}`;
    return () => {
      document.title = previousTitle;
    };
  }, [title]);

  if (!project) {
    return (
      <section className={`section ${styles.page}`}>
        <div className="section__inner">
          <a href={HOME_HREF} className={styles.back}>
            ← {labels.backLabel}
          </a>
          <p className={styles.summary}>{labels.notFound}</p>
        </div>
      </section>
    );
  }

  const copy = project[lang];
  const previous = sortedProjects[index - 1];
  const next = sortedProjects[index + 1];

  const externalLinks = [
    project.links?.itch && { href: project.links.itch, label: "itch.io" },
    project.links?.github && { href: project.links.github, label: "GitHub" },
    project.links?.event && { href: project.links.event, label: labels.eventLinkLabel },
  ].filter(Boolean) as Array<{ href: string; label: string }>;

  return (
    <article className={`section ${styles.page}`}>
      <div className="section__inner">
        <a href={HOME_HREF} className={styles.back}>
          ← {labels.backLabel}
        </a>

        <header className={styles.header}>
          <p className="section__eyebrow">
            {copy.studio} · {copy.period}
          </p>
          <h1 className={styles.title}>{copy.title}</h1>
          <p className={styles.headline}>{copy.headline}</p>
          <p className={styles.summary}>{copy.summary}</p>
        </header>

        <dl className={styles.facts}>
          {copy.facts.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>

        {project.media.length > 0 ? (
          <div className={styles.gallery}>
            <ProjectGallery
              images={project.media.map(asset)}
              alt={copy.title}
              prevLabel={labels.galleryPrev}
              nextLabel={labels.galleryNext}
              closeLabel={labels.galleryClose}
            />
          </div>
        ) : null}

        <section className={styles.block}>
          <h2 className={styles.blockTitle}>{labels.responsibilitiesLabel}</h2>
          <ul className={styles.list}>
            {copy.responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        {copy.sections?.map((section) => (
          <section key={section.title} className={styles.block}>
            <h2 className={styles.blockTitle}>{section.title}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </section>
        ))}

        {externalLinks.length > 0 ? (
          <section className={styles.block}>
            <h2 className={styles.blockTitle}>{labels.linksLabel}</h2>
            <div className={styles.linkRow}>
              {externalLinks.map((link) => (
                <a
                  key={link.href}
                  className={styles.link}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        ) : null}

        <nav className={styles.pager} aria-label={content.nav.portfolio}>
          {previous ? (
            <PagerLink project={previous} lang={lang} label={labels.previousProjectLabel} />
          ) : (
            <span />
          )}
          {next ? (
            <PagerLink project={next} lang={lang} label={labels.nextProjectLabel} alignEnd />
          ) : null}
        </nav>
      </div>
    </article>
  );
}

type PagerLinkProps = {
  project: Project;
  lang: Lang;
  label: string;
  alignEnd?: boolean;
};

function PagerLink({ project, lang, label, alignEnd }: PagerLinkProps) {
  return (
    <a
      href={projectHref(project.id)}
      className={`${styles.pagerLink} ${alignEnd ? styles.pagerEnd : ""}`}
    >
      <img src={asset(project.cover)} alt="" loading="lazy" />
      <span className={styles.pagerText}>
        <span className={styles.pagerLabel}>{label}</span>
        <span className={styles.pagerTitle}>{project[lang].title}</span>
      </span>
    </a>
  );
}

import { asset } from "../data/asset";
import type { Project } from "../data/projects";
import type { Lang } from "../data/types";
import type { SiteContent } from "../data/types";
import { ProjectGallery } from "./ProjectGallery";
import styles from "./ProjectCard.module.css";

type Props = {
  project: Project;
  lang: Lang;
  labels: SiteContent["portfolio"];
  reverse?: boolean;
};

export function ProjectCard({ project, lang, labels, reverse }: Props) {
  const copy = project[lang];
  const gallery = (
    project.images && project.images.length > 0
      ? project.images
      : project.image
        ? [project.image]
        : []
  ).map(asset);

  const externalLinks = [
    project.links?.github && { href: project.links.github, label: "GitHub" },
    project.links?.itch && { href: project.links.itch, label: "itch.io" },
    project.links?.artstation && {
      href: project.links.artstation,
      label: "ArtStation",
    },
    project.links?.demo && { href: project.links.demo, label: "Demo" },
  ].filter(Boolean) as Array<{ href: string; label: string }>;

  return (
    <article className={`${styles.card} ${reverse ? styles.reverse : ""}`}>
      <div className={styles.media}>
        {gallery.length > 0 ? (
          <ProjectGallery
            images={gallery}
            alt={copy.title}
            prevLabel={labels.galleryPrev}
            nextLabel={labels.galleryNext}
            closeLabel={labels.galleryClose}
          />
        ) : (
          <div className={styles.placeholder} aria-hidden>
            <span>{copy.engine}</span>
          </div>
        )}
      </div>

      <div className={styles.body}>
        <p className={styles.meta}>
          {copy.engine} · {copy.year}
        </p>
        <h3 className={styles.title}>{copy.title}</h3>
        <p className={styles.roleLine}>
          <span>
            {labels.roleLabel}: {copy.role}
          </span>
          <span>
            {labels.timelineLabel}: {copy.timeline}
          </span>
        </p>
        <p className={styles.description}>{copy.description}</p>

        <div className={styles.block}>
          <h4 className={styles.blockTitle}>{labels.contributionsLabel}</h4>
          <ul className={styles.list}>
            {copy.contributions.map((item, index) => (
              <li key={`${project.id}-c-${index}`}>{item}</li>
            ))}
          </ul>
        </div>

        {externalLinks.length > 0 ? (
          <div className={styles.links}>
            <span className={styles.blockTitle}>{labels.linksLabel}</span>
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
          </div>
        ) : null}
      </div>
    </article>
  );
}

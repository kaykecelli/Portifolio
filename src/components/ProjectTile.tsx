import { asset } from "../data/asset";
import type { Project } from "../data/projects";
import type { Lang } from "../data/types";
import { projectHref } from "../router";
import styles from "./ProjectTile.module.css";

type Props = {
  project: Project;
  lang: Lang;
};

export function ProjectTile({ project, lang }: Props) {
  const copy = project[lang];

  return (
    <a href={projectHref(project.id)} className={styles.tile}>
      <div className={styles.thumb}>
        <img
          src={asset(project.cover)}
          alt=""
          loading="lazy"
          style={{ objectPosition: project.coverPosition }}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{copy.title}</h3>
        <p className={styles.meta}>
          {copy.studio} · {copy.period}
        </p>
      </div>
    </a>
  );
}

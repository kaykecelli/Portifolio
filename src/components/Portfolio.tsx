import { useMemo, useState } from "react";
import { sortedProjects, type ProjectCategory } from "../data/projects";
import { useLanguage } from "../i18n/LanguageContext";
import { ProjectTile } from "./ProjectTile";
import styles from "./Portfolio.module.css";

type Filter = "all" | ProjectCategory;

export function Portfolio() {
  const { content, lang } = useLanguage();
  const { portfolio } = content;
  const [filter, setFilter] = useState<Filter>("all");

  const filtered = useMemo(() => {
    if (filter === "all") return sortedProjects;
    return sortedProjects.filter((p) => p.category === filter);
  }, [filter]);

  const filters: Array<{ id: Filter; label: string }> = [
    { id: "all", label: portfolio.filterAll },
    { id: "academic", label: portfolio.filterAcademic },
    { id: "professional", label: portfolio.filterProfessional },
  ];

  return (
    <section id="portfolio" className={`section ${styles.portfolio}`}>
      <div className="section__inner">
        <p className="section__eyebrow">{portfolio.eyebrow}</p>
        <h2 className="section__title">{portfolio.title}</h2>
        <p className="section__lead">{portfolio.lead}</p>

        <div className={styles.filters} role="tablist" aria-label="Project filters">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={filter === item.id}
              className={`${styles.filterBtn} ${filter === item.id ? styles.filterActive : ""}`}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((project) => (
            <ProjectTile key={project.id} project={project} lang={lang} />
          ))}
        </div>
      </div>
    </section>
  );
}

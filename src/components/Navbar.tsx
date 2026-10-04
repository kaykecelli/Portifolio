import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import styles from "./Navbar.module.css";

const sections = ["home", "about", "portfolio", "resume", "contact"] as const;

export function Navbar() {
  const { content, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);

  const labels: Record<(typeof sections)[number], string> = {
    home: content.nav.home,
    about: content.nav.about,
    resume: content.nav.resume,
    portfolio: content.nav.portfolio,
    contact: content.nav.contact,
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
      let current = "home";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.inner}>
        <a href="#home" className={styles.brand} onClick={close}>
          Kayke Celli
        </a>

        <nav className={styles.desktopNav} aria-label="Primary">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${styles.link} ${active === id ? styles.linkActive : ""}`}
            >
              {labels[id]}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <div className={styles.lang} role="group" aria-label="Language">
            <button
              type="button"
              className={`${styles.langBtn} ${lang === "pt" ? styles.langBtnActive : ""}`}
              onClick={() => setLang("pt")}
              aria-pressed={lang === "pt"}
            >
              PT
            </button>
            <button
              type="button"
              className={`${styles.langBtn} ${lang === "en" ? styles.langBtnActive : ""}`}
              onClick={() => setLang("en")}
              aria-pressed={lang === "en"}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            className={styles.menuBtn}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`${styles.burger} ${open ? styles.burgerOpen : ""}`} />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}
        hidden={!open}
      >
        <nav className={styles.mobileNav} aria-label="Mobile">
          {sections.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`${styles.mobileLink} ${active === id ? styles.linkActive : ""}`}
              onClick={close}
            >
              {labels[id]}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

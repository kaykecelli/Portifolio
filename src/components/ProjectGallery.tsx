import { useEffect, useCallback, useState } from "react";
import styles from "./ProjectGallery.module.css";

type Props = {
  images: string[];
  alt: string;
  prevLabel: string;
  nextLabel: string;
  closeLabel: string;
};

function isVideo(src: string) {
  return /\.(mp4|webm|ogg)(\?|$)/i.test(src);
}

export function ProjectGallery({
  images,
  alt,
  prevLabel,
  nextLabel,
  closeLabel,
}: Props) {
  const [index, setIndex] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const count = images.length;
  const current = images[index] ?? images[0];
  const hasMultiple = count > 1;
  const currentIsVideo = current ? isVideo(current) : false;

  const go = useCallback(
    (delta: number) => {
      if (count <= 1) return;
      setIndex((i) => (i + delta + count) % count);
    },
    [count],
  );

  useEffect(() => {
    if (!lightbox) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox, go]);

  if (!current) {
    return (
      <div className={styles.placeholder} aria-hidden>
        <span>—</span>
      </div>
    );
  }

  return (
    <>
      <div className={styles.gallery}>
        <button
          type="button"
          className={styles.frame}
          onClick={() => setLightbox(true)}
          aria-label={`${alt} — ${index + 1}/${count}`}
        >
          {currentIsVideo ? (
            <video
              className={styles.image}
              src={current}
              muted
              loop
              playsInline
              autoPlay
              aria-label={alt}
            />
          ) : (
            <img className={styles.image} src={current} alt={alt} />
          )}
        </button>

        {hasMultiple ? (
          <>
            <button
              type="button"
              className={`${styles.nav} ${styles.navPrev}`}
              onClick={(e) => {
                e.stopPropagation();
                go(-1);
              }}
              aria-label={prevLabel}
            >
              ‹
            </button>
            <button
              type="button"
              className={`${styles.nav} ${styles.navNext}`}
              onClick={(e) => {
                e.stopPropagation();
                go(1);
              }}
              aria-label={nextLabel}
            >
              ›
            </button>
            <div className={styles.dots} role="tablist" aria-label={alt}>
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`${i + 1} / ${count}`}
                />
              ))}
            </div>
          </>
        ) : null}
      </div>

      {lightbox ? (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          onClick={() => setLightbox(false)}
        >
          <button
            type="button"
            className={styles.close}
            onClick={() => setLightbox(false)}
            aria-label={closeLabel}
          >
            ×
          </button>

          {hasMultiple ? (
            <>
              <button
                type="button"
                className={`${styles.lightboxNav} ${styles.lightboxPrev}`}
                onClick={(e) => {
                  e.stopPropagation();
                  go(-1);
                }}
                aria-label={prevLabel}
              >
                ‹
              </button>
              <button
                type="button"
                className={`${styles.lightboxNav} ${styles.lightboxNext}`}
                onClick={(e) => {
                  e.stopPropagation();
                  go(1);
                }}
                aria-label={nextLabel}
              >
                ›
              </button>
            </>
          ) : null}

          {currentIsVideo ? (
            <video
              className={styles.lightboxImage}
              src={current}
              controls
              autoPlay
              playsInline
              loop
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <img
              className={styles.lightboxImage}
              src={current}
              alt={alt}
              onClick={(e) => e.stopPropagation()}
            />
          )}

          {hasMultiple ? (
            <p className={styles.lightboxCounter}>
              {index + 1} / {count}
            </p>
          ) : null}
        </div>
      ) : null}
    </>
  );
}

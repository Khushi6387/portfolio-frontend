import { FiGithub, FiExternalLink, FiArrowUpRight } from 'react-icons/fi';
import styles from './ProjectCard.module.css';

const statusConfig = {
  'completed':   { label: 'Completed',   color: '#4ecca3', bg: 'rgba(78,204,163,0.15)'  },
  'in-progress': { label: 'In Progress', color: '#ffd166', bg: 'rgba(255,209,102,0.15)' },
  'live':        { label: 'Live',        color: '#4ecca3', bg: 'rgba(78,204,163,0.15)'  },
};

const categoryColor = {
  'Full Stack': '#a89cff',
  'Frontend':   '#61dafb',
  'WordPress':  '#21759b',
};

const ProjectCard = ({ project }) => {
  const {
    title, subtitle, category, description,
    techStack, image, github, live, status,
  } = project;

  const statusInfo = statusConfig[status] || statusConfig['completed'];
  const catColor   = categoryColor[category] || 'var(--primary)';
  const liveUrl    = live || github || '#';

  return (
    <article className={styles.card}>

      {/* ── IMAGE AREA ───────────────────────────────────── */}
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.imageLink}
        tabIndex={liveUrl === '#' ? -1 : 0}
        aria-label={`View ${title}`}
      >
        <div className={styles.imageWrap}>
          {image ? (
            <img
              src={image}
              alt={`${title} preview`}
              className={styles.img}
              loading="lazy"
            />
          ) : (
            <div className={styles.placeholder}>
              <span className={styles.placeholderLetter}>{title.charAt(0)}</span>
              <span className={styles.placeholderSub}>{subtitle || category}</span>
            </div>
          )}

          {/* Hover overlay */}
          <div className={styles.hoverOverlay}>
            <span className={styles.viewLabel}>
              View Project <FiArrowUpRight />
            </span>
          </div>

          {/* Status badge — top-left */}
          <span
            className={styles.statusBadge}
            style={{ color: statusInfo.color, background: statusInfo.bg, borderColor: statusInfo.color }}
          >
            <span className={styles.statusDot} style={{ background: statusInfo.color }} />
            {statusInfo.label}
          </span>

          {/* Category badge — top-right */}
          <span
            className={styles.catBadge}
            style={{ color: catColor, borderColor: `${catColor}55`, background: `${catColor}18` }}
          >
            {category}
          </span>
        </div>
      </a>

      {/* ── BODY ─────────────────────────────────────────── */}
      <div className={styles.body}>

        {/* Title + action buttons */}
        <div className={styles.titleRow}>
          <div className={styles.titleBlock}>
            <h3 className={styles.title}>{title}</h3>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          </div>
          <div className={styles.actions}>
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionBtn}
                aria-label={`${title} on GitHub`}
                title="GitHub"
              >
                <FiGithub />
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.actionBtn} ${styles.actionLive}`}
                aria-label={`${title} live demo`}
                title="Live Demo"
              >
                <FiExternalLink />
              </a>
            )}
          </div>
        </div>

        {/* Description — 2 lines max */}
        <p className={styles.desc}>{description}</p>

        {/* Tech stack + CTA row */}
        <div className={styles.footer}>
          <div className={styles.techRow}>
            {techStack.slice(0, 4).map(t => (
              <span key={t} className={styles.techTag}>{t}</span>
            ))}
            {techStack.length > 4 && (
              <span className={styles.techTag}>+{techStack.length - 4}</span>
            )}
          </div>

          {/* Primary CTA */}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.viewBtn}
            >
              View Live <FiArrowUpRight />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;

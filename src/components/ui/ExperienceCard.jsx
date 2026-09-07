import { FiCalendar, FiMapPin, FiBriefcase } from 'react-icons/fi';
import styles from './ExperienceCard.module.css';

const ExperienceCard = ({ exp, index }) => {
  const { role, company, type, duration, location, techStack, highlights, current } = exp;

  return (
    <div className={`${styles.wrapper} ${index % 2 === 0 ? styles.left : styles.right}`}>
      {/* Timeline node */}
      <div className={styles.node}>
        <div className={`${styles.dot} ${current ? styles.active : ''}`} />
      </div>

      <article className={styles.card}>
        {/* Header */}
        <div className={styles.header}>
          <div>
            <h3 className={styles.role}>{role}</h3>
            <p className={styles.company}>
              <FiBriefcase className={styles.metaIcon} />
              {company}
              <span className={styles.typeBadge}>{type}</span>
            </p>
          </div>
          {current && <span className={styles.currentBadge}>Current</span>}
        </div>

        {/* Meta */}
        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <FiCalendar className={styles.metaIcon} />
            {duration}
          </span>
          <span className={styles.metaItem}>
            <FiMapPin className={styles.metaIcon} />
            {location}
          </span>
        </div>

        {/* Highlights */}
        <ul className={styles.highlights}>
          {highlights.map((item, i) => (
            <li key={i} className={styles.highlight}>
              <span className={styles.bullet}>▹</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className={styles.techStack}>
          {techStack.map((tech) => (
            <span key={tech} className={styles.tech}>{tech}</span>
          ))}
        </div>
      </article>
    </div>
  );
};

export default ExperienceCard;

import SectionTitle from '../ui/SectionTitle';
import ExperienceCard from '../ui/ExperienceCard';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import experience from '../../data/experience';
import certifications from '../../data/certifications';
import styles from './Experience.module.css';

const Experience = () => {
  const timelineRef = useScrollAnimation({ threshold: 0.05 });
  const certRef     = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className={`section ${styles.experience}`}>
      <div className="container">
        <SectionTitle title="Experience" subtitle="My Journey" />

        {/* Timeline */}
        <div ref={timelineRef} className={`reveal ${styles.timeline}`}>
          {/* Vertical line */}
          <div className={styles.timelineLine} aria-hidden="true" />

          {experience.map((exp, index) => (
            <ExperienceCard key={exp.id} exp={exp} index={index} />
          ))}
        </div>

        {/* Certifications */}
        <div className={styles.certSection}>
          <h3 className={styles.certHeading}>Certifications</h3>
          <div ref={certRef} className={`reveal ${styles.certGrid}`}>
            {certifications.map((cert) => (
              <div key={cert.id} className={styles.certCard}>
                <div className={styles.certTop}>
                  <span className={styles.certBadge}>{cert.badge}</span>
                  <div className={styles.certInfo}>
                    <h4 className={styles.certTitle}>{cert.title}</h4>
                    <p className={styles.certIssuer}>{cert.issuer}</p>
                    <p className={styles.certDuration}>{cert.duration}</p>
                  </div>
                </div>
                <p className={styles.certDesc}>{cert.description}</p>
                <div className={styles.certSkills}>
                  {cert.skills.map((s) => (
                    <span key={s} className={styles.certSkill}>{s}</span>
                  ))}
                </div>
                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.certLink}
                  >
                    View Credential →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

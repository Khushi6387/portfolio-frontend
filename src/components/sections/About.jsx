import { FiMapPin, FiMail, FiPhone, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import {
  FaCode, FaJava, FaWordpress, FaLayerGroup,
} from 'react-icons/fa';
import { SiSpringboot } from 'react-icons/si';
import { TbDeviceDesktopCode } from 'react-icons/tb';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import personalInfo from '../../data/personalInfo';
import styles from './About.module.css';

/* ── What I Do cards ─────────────────────────────────────── */
const WHAT_I_DO = [
  {
    icon: <TbDeviceDesktopCode />,
    color: '#61dafb',
    title: 'Frontend Development',
    desc: 'Building responsive, accessible UIs with React.js, HTML5, CSS3, and Bootstrap — focused on clean design and smooth user experience.',
  },
  {
    icon: <FaJava />,
    color: '#f89820',
    title: 'Java Backend Development',
    desc: 'Designing RESTful APIs and server-side logic with Java, Spring Boot, and MySQL — following MVC patterns and best practices.',
  },
  {
    icon: <FaLayerGroup />,
    color: '#a89cff',
    title: 'Full Stack Development',
    desc: 'Connecting frontend and backend end-to-end — from database schema to REST API to React UI — delivering complete working applications.',
  },
  {
    icon: <FaWordpress />,
    color: '#21759b',
    title: 'WordPress Development',
    desc: 'Customizing and deploying live WordPress websites with Elementor, WooCommerce, and cPanel for real clients.',
  },
];

/* ── Quick facts ─────────────────────────────────────────── */
const QUICK_FACTS = [
  { icon: '🎓', label: 'B.Tech Graduate',    sub: 'May 2026' },
  { icon: '☕', label: 'Java Full Stack',     sub: 'Spring Boot · React' },
  { icon: '🌐', label: 'Web Development',    sub: 'Frontend · Backend · WordPress' },
  { icon: '✅', label: 'Open to Work',       sub: 'Entry Level Roles' },
];

const About = () => {
  const leftRef    = useScrollAnimation({ threshold: 0.1 });
  const rightRef   = useScrollAnimation({ threshold: 0.1 });
  const whatRef    = useScrollAnimation({ threshold: 0.05 });
  const goalRef    = useScrollAnimation({ threshold: 0.1 });
  const factsRef   = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className={`section ${styles.about}`}>
      <div className="container">

        {/* ── Page title ── */}
        <SectionTitle title="About Me" subtitle="Get to Know" />

        {/* ══ TOP GRID: photo + intro ══════════════════════ */}
        <div className={styles.topGrid}>

          {/* Left — photo column */}
          <div ref={leftRef} className={`reveal-left ${styles.photoCol}`}>
            <div className={styles.photoFrame}>
              <div className={styles.photoGlow} aria-hidden />
              <img
                src="/profile.jpg"
                alt="Khushi Pal"
                className={styles.photo}
                onError={e => { e.target.style.display = 'none'; }}
              />
              <div className={styles.photoDecor} aria-hidden />
              {/* Open to work ribbon */}
              <div className={styles.openBadge}>
                <span className={styles.openDot} />
                Open to Work
              </div>
            </div>

            {/* Contact mini-card */}
            <div className={styles.contactCard}>
              <a href={`mailto:${personalInfo.email}`} className={styles.contactRow}>
                <FiMail className={styles.cIcon} />
                <span>{personalInfo.email}</span>
              </a>
              <a href={`tel:${personalInfo.phone}`} className={styles.contactRow}>
                <FiPhone className={styles.cIcon} />
                <span>{personalInfo.phone}</span>
              </a>
              <div className={styles.contactRow}>
                <FiMapPin className={styles.cIcon} />
                <span>{personalInfo.location}</span>
              </div>
              <div className={styles.socialRow}>
                <a href={personalInfo.github}   target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="GitHub"><FiGithub /></a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="LinkedIn"><FiLinkedin /></a>
              </div>
            </div>
          </div>

          {/* Right — text column */}
          <div ref={rightRef} className={`reveal-right ${styles.textCol}`}>

            {/* Who I Am */}
            <div className={styles.whoBlock}>
              <span className={styles.miniLabel}>Who I Am</span>
              <h2 className={styles.whoName}>Khushi Pal</h2>
              <p className={styles.whoTitle}>
                Aspiring <span className={styles.accent}>Java Full Stack Developer</span> ·
                B.Tech Computer Science Graduate
              </p>
              <p className={styles.para}>
                I'm a Computer Science graduate (BTech, May 2026) from Sir Chhotu Ram
                Institute of Technology, passionate about building scalable, real-world web
                applications. I thrive at the intersection of clean backend logic and
                intuitive frontend design.
              </p>
            </div>

            {/* My Journey */}
            <div className={styles.journeyBlock}>
              <span className={styles.miniLabel}>My Journey</span>
              <p className={styles.para}>
                My journey in Computer Science started with curiosity about how websites
                work. I began with HTML, CSS, and JavaScript — building simple pages and
                gradually developing a passion for frontend development. As I progressed, I
                discovered the power of React.js for building dynamic UIs and Bootstrap for
                rapid, responsive layouts.
              </p>
              <p className={styles.para}>
                Over time, I expanded into backend development — learning Java, Spring Boot,
                REST APIs, and MySQL to build complete applications from scratch. Through
                internships and training programs, I've shipped real projects end-to-end:
                from a Zerodha-inspired trading platform to a Learning Management System, to
                live WordPress websites for real clients.
              </p>
              <p className={styles.para}>
                Today, my goal is clear — to become a strong Full Stack Developer who can
                design systems, write clean backend APIs, and craft polished frontends,
                contributing meaningfully to a team and growing with every project.
              </p>
            </div>

            {/* Download CTA */}
            <div className={styles.ctaRow}>
              <Button
                href={personalInfo.resumeUrl}
                target="_blank"
                size="md"
                icon={<FiDownload />}
                iconPosition="right"
                download
              >
                Download Resume
              </Button>
            </div>
          </div>
        </div>

        {/* ══ WHAT I DO ════════════════════════════════════ */}
        <div ref={whatRef} className={`reveal ${styles.whatSection}`}>
          <h3 className={styles.subHeading}>
            <span className={styles.accent}>What</span> I Do
          </h3>
          <div className={styles.whatGrid}>
            {WHAT_I_DO.map(({ icon, color, title, desc }) => (
              <div key={title} className={styles.whatCard} style={{ '--wc': color }}>
                <span className={styles.whatIcon}>{icon}</span>
                <h4 className={styles.whatTitle}>{title}</h4>
                <p className={styles.whatDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ══ CAREER GOAL ══════════════════════════════════ */}
        <div ref={goalRef} className={`reveal ${styles.goalSection}`}>
          <div className={styles.goalCard}>
            <div className={styles.goalLeft}>
              <span className={styles.miniLabel}>Career Goal</span>
              <h3 className={styles.goalHeading}>
                Looking for <span className={styles.accent}>Opportunities</span>
              </h3>
              <p className={styles.para}>
                I'm actively seeking an entry-level <strong>Java Developer</strong> or{' '}
                <strong>Full Stack Developer</strong> role where I can apply my technical
                skills on real-world projects, collaborate with experienced developers, and
                continue growing as an engineer.
              </p>
              <ul className={styles.goalList}>
                {[
                  'Apply Java, Spring Boot, and React.js skills on production systems',
                  'Work on challenging real-world projects with business impact',
                  'Learn from experienced developers and engineering teams',
                  'Grow into a confident, independent Full Stack Developer',
                ].map(item => (
                  <li key={item} className={styles.goalItem}>
                    <span className={styles.goalDot}>▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education card on the right */}
            <div className={styles.goalRight}>
              <div className={styles.eduCard}>
                <span className={styles.eduEmoji}>🎓</span>
                <div>
                  <p className={styles.eduDeg}>B.Tech in Computer Science</p>
                  <p className={styles.eduInst}>Sir Chhotu Ram Institute of Technology</p>
                  <p className={styles.eduMeta}>08/2022 – 05/2026 · Meerut, UP</p>
                </div>
              </div>
              <div className={styles.goalBadges}>
                <span className={styles.gBadge}>Java Developer</span>
                <span className={styles.gBadge}>Full Stack Dev</span>
                <span className={styles.gBadge}>Spring Boot</span>
                <span className={styles.gBadge}>React.js</span>
                <span className={styles.gBadge}>Open to Work</span>
              </div>
            </div>
          </div>
        </div>

        {/* ══ QUICK FACTS ══════════════════════════════════ */}
        <div ref={factsRef} className={`reveal ${styles.factsSection}`}>
          <h3 className={styles.subHeading}>
            Quick <span className={styles.accent}>Facts</span>
          </h3>
          <div className={styles.factsGrid}>
            {QUICK_FACTS.map(({ icon, label, sub }) => (
              <div key={label} className={styles.factCard}>
                <span className={styles.factIcon}>{icon}</span>
                <p className={styles.factLabel}>{label}</p>
                <p className={styles.factSub}>{sub}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

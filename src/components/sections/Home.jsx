import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  FiGithub, FiLinkedin, FiMail, FiDownload,
  FiArrowRight, FiExternalLink, FiCode,
  FiBriefcase, FiCalendar, FiMapPin,
} from 'react-icons/fi';
import {
  FaJava, FaReact, FaHtml5, FaCss3Alt,
  FaNodeJs, FaGit, FaGithub,
} from 'react-icons/fa';
import {
  SiSpringboot, SiMysql, SiJavascript,
} from 'react-icons/si';

import Button from '../ui/Button';
import personalInfo from '../../data/personalInfo';
import projectsData  from '../../data/projects';
import experience    from '../../data/experience';
import styles from './Home.module.css';

/* ─── Typewriter ─────────────────────────────────────────── */
const useTypewriter = (words) => {
  const [text,    setText]    = useState('');
  const [wIdx,    setWIdx]    = useState(0);
  const [cIdx,    setCIdx]    = useState(0);
  const [deleting,setDeleting]= useState(false);

  useEffect(() => {
    const word = words[wIdx];
    let t;
    if (!deleting && cIdx < word.length) {
      t = setTimeout(() => { setText(word.slice(0, cIdx + 1)); setCIdx(c => c + 1); }, 80);
    } else if (!deleting && cIdx === word.length) {
      t = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && cIdx > 0) {
      t = setTimeout(() => { setText(word.slice(0, cIdx - 1)); setCIdx(c => c - 1); }, 45);
    } else {
      setDeleting(false);
      setWIdx(i => (i + 1) % words.length);
    }
    return () => clearTimeout(t);
  }, [cIdx, deleting, wIdx, words]);

  return text;
};

/* ─── Tech stack preview items ───────────────────────────── */
const TECH = [
  { name: 'Java',        icon: <FaJava />,       color: '#f89820' },
  { name: 'Spring Boot', icon: <SiSpringboot />,  color: '#6db33f' },
  { name: 'React.js',    icon: <FaReact />,       color: '#61dafb' },
  { name: 'JavaScript',  icon: <SiJavascript />,  color: '#f7df1e' },
  { name: 'HTML5',       icon: <FaHtml5 />,       color: '#e34c26' },
  { name: 'CSS3',        icon: <FaCss3Alt />,     color: '#264de4' },
  { name: 'MySQL',       icon: <SiMysql />,       color: '#4479a1' },
  { name: 'Node.js',     icon: <FaNodeJs />,      color: '#539e43' },
  { name: 'Git',         icon: <FaGit />,         color: '#f05032' },
  { name: 'GitHub',      icon: <FaGithub />,      color: '#a0a0c0' },
];

/* ─── Featured projects (1 per category) ────────────────── */
const FEATURED = [
  projectsData.find(p => p.category === 'Full Stack'),
  projectsData.find(p => p.category === 'Frontend'),
  projectsData.find(p => p.category === 'WordPress'),
].filter(Boolean);

/* ─── Stats ──────────────────────────────────────────────── */
const STATS = [
  { value: '10+', label: 'Projects Built'   },
  { value: '2',   label: 'Internships'      },
  { value: '85%', label: 'Test Coverage'    },
  { value: '15%', label: 'Mobile UX Boost'  },
];

/* ══════════════════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════════════════ */
const Home = () => {
  const navigate = useNavigate();
  const typedText = useTypewriter(personalInfo.taglines);

  return (
    <div className={styles.home}>

      {/* ══ 1. HERO ══════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.blob1} aria-hidden />
          <div className={styles.blob2} aria-hidden />
          <div className={styles.blob3} aria-hidden />
          <div className={styles.gridLines} aria-hidden />
        </div>

        <div className={styles.heroInner}>
          {/* Left */}
          <div className={styles.heroContent}>
            <div className={styles.openBadge}>
              <span className={styles.openDot} />
              Open to Work
            </div>

            <p className={styles.greeting}>
              <span className={styles.wave}>👋</span> Hi there, I'm
            </p>

            <h1 className={styles.name}>
              Khushi <span className={styles.nameGrad}>Pal</span>
            </h1>

            <div className={styles.typeRow}>
              <span className={styles.typePrefix}>I'm a </span>
              <span className={styles.typeText}>
                {typedText}
                <span className={styles.cursor} aria-hidden>|</span>
              </span>
            </div>

            <p className={styles.heroTagline}>
              BTech CS graduate passionate about building scalable full-stack
              applications with <em>Java</em>, <em>Spring Boot</em>,{' '}
              <em>React.js</em> &amp; <em>Node.js</em>.
            </p>

            <div className={styles.heroCtas}>
              <Button size="lg" onClick={() => navigate('/projects')}
                icon={<FiCode />}>
                View Projects
              </Button>
              <Button size="lg" variant="outline"
                href={personalInfo.resumeUrl} target="_blank" download
                icon={<FiDownload />} iconPosition="right">
                Download Resume
              </Button>
              <Button size="lg" variant="ghost"
                onClick={() => navigate('/contact')}
                icon={<FiArrowRight />} iconPosition="right">
                Contact Me
              </Button>
            </div>

            <div className={styles.socials}>
              <a href={personalInfo.github}   target="_blank" rel="noopener noreferrer"
                className={styles.socialBtn} aria-label="GitHub">
                <FiGithub />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className={styles.socialBtn} aria-label="LinkedIn">
                <FiLinkedin />
              </a>
              <a href={`mailto:${personalInfo.email}`}
                className={styles.socialBtn} aria-label="Email">
                <FiMail />
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div className={styles.heroPhoto}>
            <div className={styles.photoRing}   aria-hidden />
            <div className={styles.photoGlow}   aria-hidden />
            <img
              src="/profile.jpg"
              alt="Khushi Pal"
              className={styles.photo}
              onError={e => { e.target.style.display = 'none'; }}
            />
            {/* Floating stat cards */}
            <div className={`${styles.floatCard} ${styles.floatTop}`}>
              <span className={styles.floatVal}>10+</span>
              <span className={styles.floatLbl}>Projects</span>
            </div>
            <div className={`${styles.floatCard} ${styles.floatBot}`}>
              <span className={styles.floatVal}>2</span>
              <span className={styles.floatLbl}>Internships</span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className={styles.scrollHint} aria-hidden>
          <span />
        </div>
      </section>

      {/* ══ 2. STATS BAR ═════════════════════════════════════ */}
      <div className={styles.statsBar}>
        {STATS.map(({ value, label }) => (
          <div key={label} className={styles.stat}>
            <span className={styles.statVal}>{value}</span>
            <span className={styles.statLbl}>{label}</span>
          </div>
        ))}
      </div>

      {/* ══ 3. ABOUT PREVIEW ═════════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.aboutPreview}>
            <div className={styles.aboutText}>
              <p className={styles.previewLabel}>About Me</p>
              <h2 className={styles.previewH2}>
                Passionate about building<br />
                <span className={styles.grad}>meaningful software.</span>
              </h2>
              <p className={styles.previewPara}>
                I'm a Computer Science graduate (BTech, May 2026) from Sir Chhotu Ram
                Institute of Technology. I work across the full stack — Spring Boot
                &amp; Node.js on the backend, React.js on the frontend — and I've
                shipped real-world projects end to end.
              </p>
              <p className={styles.previewPara}>
                I'm actively looking for an entry-level <strong>Java Developer</strong> or{' '}
                <strong>Full Stack Developer</strong> role where I can contribute and grow.
              </p>
              <Link to="/about" className={styles.linkArrow}>
                Read More About Me <FiArrowRight />
              </Link>
            </div>
            <div className={styles.aboutCard}>
              <div className={styles.eduCard}>
                <span className={styles.eduIcon}>🎓</span>
                <div>
                  <p className={styles.eduDeg}>BTech in Computer Science</p>
                  <p className={styles.eduInst}>Sir Chhotu Ram Institute of Technology</p>
                  <p className={styles.eduMeta}>08/2022 – 05/2026 · Meerut, UP</p>
                </div>
              </div>
              <div className={styles.badges}>
                {['Java Developer', 'Full Stack Dev', 'Open to Work'].map(b => (
                  <span key={b} className={styles.pillBadge}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ 4. TECH STACK PREVIEW ════════════════════════════ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <p className={styles.previewLabel}>Tech Stack</p>
          <div className={styles.techHeader}>
            <h2 className={styles.previewH2}>
              Tools &amp; <span className={styles.grad}>Technologies</span>
            </h2>
            <Link to="/skills" className={styles.linkArrow}>
              View All Skills <FiArrowRight />
            </Link>
          </div>

          <div className={styles.techGrid}>
            {TECH.map(({ name, icon, color }) => (
              <div key={name} className={styles.techCard} style={{ '--tc': color }}>
                <span className={styles.techIcon}>{icon}</span>
                <span className={styles.techName}>{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. FEATURED PROJECTS ═════════════════════════════ */}
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.previewLabel}>Featured Work</p>
          <div className={styles.techHeader}>
            <h2 className={styles.previewH2}>
              Selected <span className={styles.grad}>Projects</span>
            </h2>
            <Link to="/projects" className={styles.linkArrow}>
              View All Projects <FiArrowRight />
            </Link>
          </div>

          <div className={styles.projGrid}>
            {FEATURED.map(p => (
              <div key={p.id} className={styles.projCard}>
                <div className={styles.projTop}>
                  <span className={styles.projCat}>{p.category}</span>
                  <div className={styles.projLinks}>
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer"
                        className={styles.projLink} aria-label="GitHub">
                        <FiGithub />
                      </a>
                    )}
                    {p.live && (
                      <a href={p.live} target="_blank" rel="noopener noreferrer"
                        className={styles.projLink} aria-label="Live demo">
                        <FiExternalLink />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className={styles.projTitle}>{p.title}</h3>
                <p className={styles.projSub}>{p.subtitle}</p>
                <p className={styles.projDesc}>{p.description.slice(0, 120)}…</p>
                <div className={styles.projTech}>
                  {p.techStack.slice(0, 4).map(t => (
                    <span key={t} className={styles.techTag}>{t}</span>
                  ))}
                  {p.techStack.length > 4 && (
                    <span className={styles.techTag}>+{p.techStack.length - 4}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. EXPERIENCE PREVIEW ════════════════════════════ */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <p className={styles.previewLabel}>Experience</p>
          <div className={styles.techHeader}>
            <h2 className={styles.previewH2}>
              Work <span className={styles.grad}>Experience</span>
            </h2>
            <Link to="/experience" className={styles.linkArrow}>
              View My Experience <FiArrowRight />
            </Link>
          </div>

          <div className={styles.expList}>
            {experience.map(exp => (
              <div key={exp.id} className={styles.expCard}>
                <div className={styles.expDot} />
                <div className={styles.expBody}>
                  <div className={styles.expHeader}>
                    <div>
                      <h4 className={styles.expRole}>{exp.role}</h4>
                      <p className={styles.expCompany}>
                        <FiBriefcase className={styles.expIcon} />
                        {exp.company}
                      </p>
                    </div>
                    <div className={styles.expMeta}>
                      <span><FiCalendar className={styles.expIcon} />{exp.duration}</span>
                      <span><FiMapPin  className={styles.expIcon} />{exp.location}</span>
                    </div>
                  </div>
                  <div className={styles.expTech}>
                    {exp.techStack.slice(0, 5).map(t => (
                      <span key={t} className={styles.techTag}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 7. CTA BANNER ════════════════════════════════════ */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaGlow} aria-hidden />
        <div className={styles.container}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaH2}>
              Let's Build Something<br />
              <span className={styles.grad}>Great Together</span>
            </h2>
            <p className={styles.ctaText}>
              I'm open to <strong>Java Developer</strong> and{' '}
              <strong>Full Stack Developer</strong> opportunities.
              Let's connect and create something impactful.
            </p>
            <div className={styles.ctaBtns}>
              <Button size="lg" onClick={() => navigate('/contact')}
                icon={<FiMail />}>
                Contact Me
              </Button>
              <Button size="lg" variant="outline"
                href={personalInfo.resumeUrl} target="_blank" download
                icon={<FiDownload />} iconPosition="right">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;

import {
  FaJava, FaReact, FaHtml5, FaCss3Alt, FaBootstrap,
  FaNodeJs, FaGit, FaGithub, FaWordpress, FaCode, FaDatabase,
} from 'react-icons/fa';
import {
  SiSpringboot, SiMysql, SiTailwindcss,
  SiJavascript, SiElementor,
} from 'react-icons/si';
import { TbApi, TbServer } from 'react-icons/tb';
import { MdStorage, MdNetworkCheck } from 'react-icons/md';
import { BsStack } from 'react-icons/bs';

import SectionTitle from '../ui/SectionTitle';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from './Skills.module.css';

/* ══════════════════════════════════════════
   SKILL DATA — defined directly here
══════════════════════════════════════════ */
const CATEGORIES = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: '🎨',
    color: '#61dafb',
    desc: 'Building responsive, accessible user interfaces',
    skills: [
      { name: 'HTML5',       icon: <FaHtml5 />,       color: '#e34c26', desc: 'Semantic markup & structure' },
      { name: 'CSS3',        icon: <FaCss3Alt />,     color: '#264de4', desc: 'Styling, layouts & animations' },
      { name: 'JavaScript',  icon: <SiJavascript />,  color: '#f7df1e', desc: 'Dynamic behavior & DOM' },
      { name: 'React.js',    icon: <FaReact />,       color: '#61dafb', desc: 'Component-based UI development' },
      { name: 'Bootstrap',   icon: <FaBootstrap />,   color: '#7952b3', desc: 'Responsive UI framework' },
      { name: 'Tailwind CSS',icon: <SiTailwindcss />, color: '#38bdf8', desc: 'Utility-first CSS framework' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: '⚙️',
    color: '#6db33f',
    desc: 'Server-side logic, APIs and application architecture',
    skills: [
      { name: 'Java',        icon: <FaJava />,        color: '#f89820', desc: 'Core language for backend' },
      { name: 'Spring Boot', icon: <SiSpringboot />,  color: '#6db33f', desc: 'REST APIs & microservices' },
      { name: 'REST APIs',   icon: <TbApi />,         color: '#a89cff', desc: 'API design & integration' },
      { name: 'Node.js',     icon: <FaNodeJs />,      color: '#539e43', desc: 'JS runtime for server-side' },
    ],
  },
  {
    id: 'database',
    title: 'Database',
    icon: '🗄️',
    color: '#4479a1',
    desc: 'Data storage, querying and database management',
    skills: [
      { name: 'MySQL',  icon: <SiMysql />,     color: '#4479a1', desc: 'Relational database design' },
      { name: 'SQL',    icon: <FaDatabase />,  color: '#336791', desc: 'Queries, joins & optimization' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Technologies',
    icon: '🛠️',
    color: '#f05032',
    desc: 'Development tools, deployment and productivity',
    skills: [
      { name: 'Git',       icon: <FaGit />,        color: '#f05032', desc: 'Version control & branching' },
      { name: 'GitHub',    icon: <FaGithub />,     color: '#a0a0c0', desc: 'Code hosting & collaboration' },
      { name: 'WordPress', icon: <FaWordpress />,  color: '#21759b', desc: 'CMS development & deployment' },
      { name: 'Elementor', icon: <SiElementor />,  color: '#e0244a', desc: 'Visual WordPress page builder' },
      { name: 'cPanel',    icon: <TbServer />,     color: '#ff6c2c', desc: 'Web hosting management' },
    ],
  },
  {
    id: 'cs',
    title: 'Programming & CS',
    icon: '💻',
    color: '#a89cff',
    desc: 'Core computer science concepts and fundamentals',
    skills: [
      { name: 'OOP',                  icon: <BsStack />,        color: '#a89cff', desc: 'Object-Oriented Programming' },
      { name: 'Data Structures & Algo', icon: <FaCode />,       color: '#ffd166', desc: 'Problem solving & DSA' },
      { name: 'DBMS',                 icon: <MdStorage />,      color: '#4ecca3', desc: 'Database management systems' },
      { name: 'Computer Networks',    icon: <MdNetworkCheck />, color: '#61dafb', desc: 'Networking fundamentals' },
      { name: 'CS Fundamentals',      icon: <FaCode />,         color: '#ff6584', desc: 'OS, compilers, architecture' },
    ],
  },
];

/* ── Currently strengthening ─────────────────────────────── */
const STRENGTHENING = [
  { name: 'Java',        icon: <FaJava />,       color: '#f89820' },
  { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6db33f' },
  { name: 'React.js',    icon: <FaReact />,      color: '#61dafb' },
  { name: 'DSA',         icon: <FaCode />,       color: '#ffd166' },
  { name: 'SQL',         icon: <SiMysql />,      color: '#4479a1' },
];

/* ── Interested in ───────────────────────────────────────── */
const INTERESTED = [
  'Backend Development',
  'Full Stack Development',
  'Scalable Web Applications',
  'REST API Architecture',
  'Cloud & Deployment',
];

/* ── Sub-component: Category Card ───────────────────────── */
const CategorySection = ({ cat }) => {
  const ref = useScrollAnimation({ threshold: 0.05 });
  return (
    <div ref={ref} className={`reveal ${styles.catBlock}`}>
      <div className={styles.catHeader}>
        <span className={styles.catIcon}>{cat.icon}</span>
        <div>
          <h3 className={styles.catTitle} style={{ '--cc': cat.color }}>
            {cat.title}
          </h3>
          <p className={styles.catDesc}>{cat.desc}</p>
        </div>
      </div>
      <div className={styles.skillsGrid}>
        {cat.skills.map(({ name, icon, color, desc }) => (
          <div key={name} className={styles.skillCard} style={{ '--sc': color }}>
            <div className={styles.skillTop}>
              <span className={styles.skillIcon}>{icon}</span>
              <span className={styles.skillName}>{name}</span>
            </div>
            {desc && <p className={styles.skillDesc}>{desc}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ══════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════ */
const Skills = () => {
  const bottomRef = useScrollAnimation({ threshold: 0.05 });

  return (
    <section className={`section ${styles.skills}`}>
      <div className="container">
        <SectionTitle title="Skills & Technologies" subtitle="What I Work With" />

        {/* Categories */}
        <div className={styles.categoriesList}>
          {CATEGORIES.map(cat => (
            <CategorySection key={cat.id} cat={cat} />
          ))}
        </div>

        {/* ── Bottom: Strengthening + Interested ── */}
        <div ref={bottomRef} className={`reveal ${styles.bottomRow}`}>
          {/* Currently Strengthening */}
          <div className={styles.bottomCard}>
            <h4 className={styles.bottomTitle}>
              <span className={styles.titleDot} style={{ background: '#ffd166' }} />
              Currently Strengthening
            </h4>
            <p className={styles.bottomSub}>
              Skills I'm actively deepening through projects and practice.
            </p>
            <div className={styles.strengthGrid}>
              {STRENGTHENING.map(({ name, icon, color }) => (
                <div key={name} className={styles.strengthCard} style={{ '--sc': color }}>
                  <span className={styles.strengthIcon}>{icon}</span>
                  <span className={styles.strengthName}>{name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interested In */}
          <div className={styles.bottomCard}>
            <h4 className={styles.bottomTitle}>
              <span className={styles.titleDot} style={{ background: '#4ecca3' }} />
              Interested In
            </h4>
            <p className={styles.bottomSub}>
              Areas I'm excited to work on and explore in my career.
            </p>
            <div className={styles.interestList}>
              {INTERESTED.map(item => (
                <div key={item} className={styles.interestItem}>
                  <span className={styles.interestArrow}>▹</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;

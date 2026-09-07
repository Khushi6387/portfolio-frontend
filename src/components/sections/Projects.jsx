import { useState } from 'react';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import projectsData from '../../data/projects';
import styles from './Projects.module.css';

const TABS = [
  {
    key: 'Full Stack',
    label: 'Full Stack',
    icon: '🚀',
    desc: 'End-to-end applications built with Java, Spring Boot, React.js, Node.js and more.',
  },
  {
    key: 'Frontend',
    label: 'Frontend',
    icon: '🎨',
    desc: 'Responsive interfaces built with HTML, CSS, JavaScript, React and Bootstrap.',
  },
  {
    key: 'WordPress',
    label: 'WordPress',
    icon: '🌐',
    desc: 'Live client websites developed and deployed during my internship at Click Catcher.',
  },
];

const Projects = () => {
  const [active, setActive] = useState('Full Stack');

  const filtered = projectsData.filter((p) => p.category === active);
  const currentTab = TABS.find((t) => t.key === active);

  return (
    <section className={`section ${styles.projects}`}>
      <div className="container">
        <SectionTitle title="My Projects" subtitle="What I've Built" />

        {/* Section sub-headline */}
        <p className={styles.sectionSubtitle}>
          Selected projects and real-world websites I've built using modern web technologies.
        </p>

        {/* ── Category Tabs ── */}
        <div className={styles.tabs} role="tablist" aria-label="Project categories">
          {TABS.map(({ key, label, icon }) => {
            const count = projectsData.filter((p) => p.category === key).length;
            return (
              <button
                key={key}
                role="tab"
                aria-selected={active === key}
                className={`${styles.tab} ${active === key ? styles.tabActive : ''}`}
                onClick={() => setActive(key)}
              >
                <span className={styles.tabIcon}>{icon}</span>
                <span className={styles.tabLabel}>{label}</span>
                <span className={styles.tabCount}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* ── Active tab description ── */}
        <p className={styles.tabDesc}>{currentTab.desc}</p>

        {/* ── Cards grid — animated on tab change ── */}
        <div
          key={active}            /* remount on tab switch → triggers CSS animation */
          className={`${styles.grid} ${
            active === 'WordPress' ? styles.gridThree : styles.gridTwo
          }`}
        >
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className={styles.empty}>No projects in this category yet.</p>
        )}
      </div>
    </section>
  );
};

export default Projects;

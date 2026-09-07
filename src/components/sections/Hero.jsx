import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from 'react-icons/fi';
import Button from '../ui/Button';
import personalInfo from '../../data/personalInfo';
import styles from './Hero.module.css';

const Hero = () => {
  const [typedText,    setTypedText]    = useState('');
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [charIndex,    setCharIndex]    = useState(0);
  const [deleting,     setDeleting]     = useState(false);
  const navigate = useNavigate();

  const taglines = personalInfo.taglines;

  // Typewriter effect
  useEffect(() => {
    const current = taglines[taglineIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => { setTypedText(current.slice(0, charIndex + 1)); setCharIndex((c) => c + 1); }, 80);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => { setTypedText(current.slice(0, charIndex - 1)); setCharIndex((c) => c - 1); }, 45);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setTaglineIndex((i) => (i + 1) % taglines.length);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, taglineIndex, taglines]);

  return (
    <section className={styles.hero}>
      {/* Background */}
      <div className={styles.blob1} aria-hidden="true" />
      <div className={styles.blob2} aria-hidden="true" />
      <div className={styles.grid}  aria-hidden="true" />

      <div className={styles.container}>
        {/* Left: Text content */}
        <div className={styles.content}>
          <p className={styles.greeting}>
            <span className={styles.wave}>👋</span> Hi there, I'm
          </p>

          <h1 className={styles.name}>
            Khushi<br />
            <span className={styles.nameAccent}>Pal</span>
          </h1>

          <div className={styles.typewriterRow}>
            <span className={styles.typewriterLabel}>I'm a </span>
            <span className={styles.typewriter}>
              {typedText}
              <span className={styles.cursor} aria-hidden="true">|</span>
            </span>
          </div>

          <p className={styles.summary}>
            BTech CS graduate building full-stack web apps with{' '}
            <span className={styles.accent}>Java</span>,{' '}
            <span className={styles.accent}>Spring Boot</span>,{' '}
            <span className={styles.accent}>React.js</span> &amp;{' '}
            <span className={styles.accent}>Node.js</span>.
            Passionate about clean code, RESTful APIs, and scalable UIs.
          </p>

          {/* CTA Buttons */}
          <div className={styles.ctas}>
            <Button
              href={personalInfo.resumeUrl}
              target="_blank"
              size="lg"
              icon={<FiDownload />}
              iconPosition="right"
              download
            >
              Download Resume
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => navigate('/contact')}
              icon={<FiArrowRight />}
              iconPosition="right"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social icons */}
          <div className={styles.socials}>
            <a href={personalInfo.github}   target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub"><FiGithub /></a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn"><FiLinkedin /></a>
            <a href={`mailto:${personalInfo.email}`} className={styles.socialLink} aria-label="Email"><FiMail /></a>
            <span className={styles.socialLine} aria-hidden="true" />
          </div>
        </div>

        {/* Right: Profile photo */}
        <div className={styles.imageWrapper}>
          <div className={styles.imageRing} aria-hidden="true" />
          <div className={styles.imageBg}   aria-hidden="true" />
          <img
            src="/profile.jpg"
            alt="Khushi Pal — Full Stack Developer"
            className={styles.profileImg}
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Open to work
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

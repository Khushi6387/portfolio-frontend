import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiPhone, FiHeart } from 'react-icons/fi';
import personalInfo from '../../data/personalInfo';
import styles from './Footer.module.css';

const navLinks = [
  { label: 'Home',       to: '/'           },
  { label: 'About',      to: '/about'      },
  { label: 'Skills',     to: '/skills'     },
  { label: 'Projects',   to: '/projects'   },
  { label: 'Experience', to: '/experience' },
  { label: 'Contact',    to: '/contact'    },
];

const socialLinks = [
  { icon: <FiGithub />,   href: personalInfo.github,              label: 'GitHub'   },
  { icon: <FiLinkedin />, href: personalInfo.linkedin,            label: 'LinkedIn' },
  { icon: <FiMail />,     href: `mailto:${personalInfo.email}`,   label: 'Email'    },
];

const Footer = () => {
  const handleNav = () => window.scrollTo({ top: 0, behavior: 'instant' });

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Top row */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brand}>
            <Link to="/" className={styles.logo} onClick={handleNav}>
              <span className={styles.bracket}>&lt;</span>KP<span className={styles.bracket}>/&gt;</span>
            </Link>
            <p className={styles.tagline}>
              Full Stack Developer · Java · Spring Boot · React.js
            </p>
            <div className={styles.contact}>
              <a href={`mailto:${personalInfo.email}`} className={styles.contactItem}>
                <FiMail /> {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className={styles.contactItem}>
                <FiPhone /> {personalInfo.phone}
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className={styles.links}>
            <h4 className={styles.linksTitle}>Quick Links</h4>
            <nav aria-label="Footer navigation">
              {navLinks.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  className={styles.navLink}
                  onClick={handleNav}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div className={styles.socials}>
            <h4 className={styles.linksTitle}>Connect</h4>
            <div className={styles.socialIcons}>
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label={label}
                  title={label}
                >
                  {icon}
                </a>
              ))}
            </div>
            <a
              href={personalInfo.resumeUrl}
              download
              target="_blank"
              rel="noopener noreferrer"
              className={styles.resumeLink}
            >
              Download Resume ↓
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom row */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Khushi Pal. All rights reserved.
          </p>
          <p className={styles.made}>
            Made with <FiHeart className={styles.heart} /> using React.js
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

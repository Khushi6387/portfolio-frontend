import { useState } from 'react';
import {
  FiMail, FiPhone, FiMapPin, FiGithub,
  FiLinkedin, FiSend, FiCheckCircle, FiAlertCircle,
  FiLoader,
} from 'react-icons/fi';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import { isValidEmail } from '../../utils/helpers';
import personalInfo from '../../data/personalInfo';
import styles from './Contact.module.css';

/* ── API URL from environment variable ───────────────────── */
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

/* ── Static data ─────────────────────────────────────────── */
const contactDetails = [
  { icon: <FiMail />,   label: 'Email',    value: personalInfo.email,    href: `mailto:${personalInfo.email}` },
  { icon: <FiPhone />,  label: 'Phone',    value: personalInfo.phone,    href: `tel:${personalInfo.phone}`    },
  { icon: <FiMapPin />, label: 'Location', value: personalInfo.location, href: null                           },
];

const socialLinks = [
  { icon: <FiGithub />,   href: personalInfo.github,              label: 'GitHub'   },
  { icon: <FiLinkedin />, href: personalInfo.linkedin,            label: 'LinkedIn' },
  { icon: <FiMail />,     href: `mailto:${personalInfo.email}`,   label: 'Email'    },
];

const initialForm = { name: '', email: '', subject: '', message: '' };

/* ════════════════════════════════════════════════════════════
   CONTACT COMPONENT
════════════════════════════════════════════════════════════ */
const Contact = () => {
  const [form,   setForm]   = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [serverMsg, setServerMsg] = useState('');

  const leftRef  = useScrollAnimation({ threshold: 0.1 });
  const rightRef = useScrollAnimation({ threshold: 0.1 });

  /* ── Client-side validation ── */
  const validate = () => {
    const e = {};
    if (!form.name.trim())              e.name    = 'Name is required.';
    if (!form.email.trim())             e.email   = 'Email is required.';
    else if (!isValidEmail(form.email)) e.email   = 'Enter a valid email address.';
    if (!form.message.trim())           e.message = 'Message is required.';
    else if (form.message.trim().length < 10)
                                        e.message = 'Message must be at least 10 characters.';
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    // Clear field error as user types
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  /* ── Submit to backend API ── */
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
      return;
    }

    setStatus('sending');
    setServerMsg('');

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name:    form.name.trim(),
          email:   form.email.trim(),
          subject: form.subject.trim() || undefined,
          message: form.message.trim(),
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus('success');
        setServerMsg(data.message || 'Message sent successfully!');
        setForm(initialForm);
      } else if (response.status === 422 && data.errors) {
        // Map backend validation errors back to fields
        const backendErrors = {};
        data.errors.forEach(({ field, message }) => {
          backendErrors[field] = message;
        });
        setErrors(backendErrors);
        setStatus('idle');
      } else {
        setStatus('error');
        setServerMsg(data.message || 'Something went wrong. Please try again.');
      }
    } catch {
      // Network error — backend unavailable
      setStatus('error');
      setServerMsg('');
    }
  };

  /* ── Render ── */
  return (
    <section className={`section ${styles.contact}`}>
      <div className="container">
        <SectionTitle title="Get In Touch" subtitle="Contact Me" />

        <div className={styles.grid}>

          {/* ── Left: contact info ── */}
          <div ref={leftRef} className={`reveal-left ${styles.info}`}>
            <h3 className={styles.infoHeading}>Let's work together</h3>
            <p className={styles.infoText}>
              I'm currently open to new opportunities. Whether you have a job opening,
              a project idea, or just want to say hi — my inbox is always open!
            </p>

            <div className={styles.details}>
              {contactDetails.map(({ icon, label, value, href }) => (
                <div key={label} className={styles.detailRow}>
                  <span className={styles.detailIcon}>{icon}</span>
                  <div>
                    <p className={styles.detailLabel}>{label}</p>
                    {href
                      ? <a href={href} className={styles.detailValue}>{value}</a>
                      : <p className={styles.detailValue}>{value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.socials}>
              {socialLinks.map(({ icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                  className={styles.socialIcon} aria-label={label} title={label}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* ── Right: form ── */}
          <div ref={rightRef} className={`reveal-right ${styles.formWrapper}`}>

            {/* ── Success state ── */}
            {status === 'success' ? (
              <div className={styles.successMsg}>
                <FiCheckCircle className={styles.successIcon} />
                <h4>Message sent!</h4>
                <p>{serverMsg || "Thanks for reaching out. I'll get back to you soon."}</p>
                <Button variant="outline" size="sm" onClick={() => { setStatus('idle'); setServerMsg(''); }}>
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form} noValidate>

                {/* Name + Email row */}
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="name" className={styles.label}>Name *</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Khushi Pal"
                      value={form.name} onChange={handleChange}
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                      autoComplete="name"
                      disabled={status === 'sending'}
                    />
                    {errors.name && (
                      <span className={styles.error}><FiAlertCircle /> {errors.name}</span>
                    )}
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="email" className={styles.label}>Email *</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="you@example.com"
                      value={form.email} onChange={handleChange}
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                      autoComplete="email"
                      disabled={status === 'sending'}
                    />
                    {errors.email && (
                      <span className={styles.error}><FiAlertCircle /> {errors.email}</span>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div className={styles.field}>
                  <label htmlFor="subject" className={styles.label}>Subject</label>
                  <input
                    id="subject" name="subject" type="text"
                    placeholder="Job opportunity / Collaboration / Hello"
                    value={form.subject} onChange={handleChange}
                    className={styles.input}
                    disabled={status === 'sending'}
                  />
                </div>

                {/* Message */}
                <div className={styles.field}>
                  <label htmlFor="message" className={styles.label}>Message *</label>
                  <textarea
                    id="message" name="message" rows={5}
                    placeholder="Hi Khushi, I'd love to discuss..."
                    value={form.message} onChange={handleChange}
                    className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    disabled={status === 'sending'}
                  />
                  {errors.message && (
                    <span className={styles.error}><FiAlertCircle /> {errors.message}</span>
                  )}
                </div>

                {/* Network / server error banner */}
                {status === 'error' && (
                  <div className={styles.errorBanner}>
                    <FiAlertCircle />
                    {serverMsg
                      ? serverMsg
                      : <>Unable to reach the server. Please email me directly at{' '}
                          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>.
                        </>
                    }
                  </div>
                )}

                {/* Submit button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={status === 'sending'}
                  icon={status === 'sending' ? <FiLoader className={styles.spinIcon} /> : <FiSend />}
                  iconPosition="right"
                  className={styles.submitBtn}
                >
                  {status === 'sending' ? 'Sending…' : 'Send Message'}
                </Button>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

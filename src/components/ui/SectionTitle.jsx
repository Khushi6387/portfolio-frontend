import styles from './SectionTitle.module.css';

const SectionTitle = ({ title, subtitle, align = 'center' }) => {
  return (
    <div className={`${styles.wrapper} ${styles[align]}`}>
      <p className={styles.label}>
        <span className={styles.line} />
        {subtitle}
        <span className={styles.line} />
      </p>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.underline} />
    </div>
  );
};

export default SectionTitle;

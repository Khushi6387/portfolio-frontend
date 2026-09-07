import styles from './SkillBadge.module.css';

const SkillBadge = ({ name, level }) => {
  return (
    <div className={styles.badge} title={level ? `Proficiency: ${level}%` : name}>
      <span className={styles.name}>{name}</span>
      {level && (
        <span className={styles.level}>{level}%</span>
      )}
    </div>
  );
};

export default SkillBadge;

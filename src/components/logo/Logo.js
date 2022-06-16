import styles from "./Logo.module.scss";

const Logo = function () {
  return (
    <div className={styles.logo}>
      <a href='/' className={styles.logo__link}>
        <span className={styles.logo__text}>Biase</span>
      </a>
    </div>
  );
};

export default Logo;

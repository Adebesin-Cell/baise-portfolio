import styles from "./Intro.module.scss";

const Intro = function () {
  return (
    <section className={styles.intro}>
      <h3 className={styles.intro__sub}>Hi, my name is</h3>
      <h1 className={styles.intro__heading}>Ismail Abdul-Baise.</h1>
      <p className={styles.intro__paragraph}>I'm an affiliate marketer.</p>
      <p className={styles.intro__text}>
        I help business owners move the numbers that matter; sales, leads,
        inbound traffic by building automated systems that pepertually bring the
        goods with little effort.
      </p>
      <a href='/' className={styles.intro__link}>
        Get in touch
      </a>
    </section>
  );
};

export default Intro;

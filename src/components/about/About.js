import styles from "./About.module.scss";

const About = function () {
  return (
    <section className={styles.about} id='about'>
      <div className={styles.about__wrapper}>
        <div className={styles.about__left}>
          <h3 className={styles.about__title}>
            <span className={styles["about__title--green"]}>01.</span>
            <span className={styles["about__title--text"]}>About</span>
            <hr className={styles.about__line} />
          </h3>
          <p className={styles.about__paragraph}>
            Hi there! I am Biase. I am an affliate marketer and I live in
            Nigeria. I have always been in awe of the how the entire market
            structure works. I enjoy crafting amazing digital experiences for my
            clients.
          </p>
        </div>
        <div className={styles.about__right}>&nbsp;</div>
      </div>
    </section>
  );
};

export default About;
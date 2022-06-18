import styles from "./About.module.scss";
import avatar from "../../assets/images/avatar.jpg";
import { ReactComponent as ChevronRight } from "../../assets/svgs/icon-chevron-right.svg";

const ServicesOffered = [
  {
    type: "branding",
  },
  {
    type: "Digital Advertising",
  },
  {
    type: "Coaching & Mentorship",
  },
  {
    type: "Marketing Strategy",
  },
];

const About = function () {
  return (
    <section className={styles.about} id='about'>
      <div className={styles.about__wrapper}>
        <div className={styles.about__left}>
          <h3 className={styles.about__title}>
            <span className={styles["about__title--green"]}>01.</span>
            <span className={styles["about__title--text"]}>About me</span>
            <hr className={styles.about__line} />
          </h3>
          <p className={styles.about__paragraph}>
            Hi there! I am Biase. I am an affiliate marketer and I live in
            Nigeria. I have always been in awe of the how the entire market
            structure works. I enjoy crafting amazing digital experiences for my
            clients.
          </p>
          <p className={styles.about__text}>Here are services I offer:</p>
          <ul className={styles.about__list}>
            {ServicesOffered.map((service, i) => (
              <li key={i} className={styles.about__item}>
                <span className={styles.icon}>
                  <ChevronRight />
                </span>
                <span className={styles.text}>{service.type}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.about__right}>
          <div className={styles["about__image--box"]}>
            <img src={avatar} alt='avatar' className={styles.about__image} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

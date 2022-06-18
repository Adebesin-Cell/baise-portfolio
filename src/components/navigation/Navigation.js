import styles from "./Navigation.module.scss";

const NavLinks = [
  {
    text: "about",
    url: "#about",
  },
  {
    text: "contact",
    url: "#contact",
  },
  {
    text: "socials",
    url: "#socials",
  },
];

const Navigation = function (props) {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__list}>
        {NavLinks.map((link, i) => (
          <li className={styles.nav__item} key={i}>
            <a href={link.url} className={styles.nav__link} name={link.text}>
              <span className={styles["nav__link--green"]}>0{i + 1}.</span>
              <span className={styles["nav__link--text"]}>{link.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

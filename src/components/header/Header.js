import styles from "./Header.module.scss";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";

const Header = function (props) {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
    </header>
  );
};

export default Header;

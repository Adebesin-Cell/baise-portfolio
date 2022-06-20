import styles from "./Header.module.scss";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import { ReactComponent as MenuIcon } from "../../assets/svgs/icon-menu.svg";

const Header = function (props) {
  return (
    <header className={styles.header}>
      <Logo />
      <Navigation />
      <div className={styles.header__menu}>
        <MenuIcon />
      </div>
    </header>
  );
};

export default Header;

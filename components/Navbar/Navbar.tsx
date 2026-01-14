import React from "react";
import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import styles from "./Navbar.module.css";

type Props = {
  menuItems?: string[];
  className?: string;
};

const Navbar: React.FC<Props> = ({
  menuItems = ["Home", "Services", "About", "Contact"],
  className = "",
}) => {
  return (
    <nav className={`${styles.nav} ${className}`}>
      <div className={styles.left}>
        <Logo className={styles.logo} />
      </div>

      <ul className={styles.desktopMenu}>
        {menuItems.map((m) => (
          <li key={m}>
            <a href={`/${m.toLowerCase()}`} className={styles.link}>
              {m}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.mobileMenu}>
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;

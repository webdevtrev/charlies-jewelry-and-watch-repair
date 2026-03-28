import React from "react";
import Logo from "../Logo/Logo";
import MobileMenu from "../MobileMenu/MobileMenu";
import styles from "./Navbar.module.css";
import { client } from "@/sanity/lib/client";
import { contactInformationQuery } from "@/sanity/lib/queries";

type Props = {
  menuItems?: string[];
  className?: string;
};

type ContactInfo = {
  phone?: string;
  email?: string;
  instagram?: string;
  facebook?: string;
};

async function getContactInfo(): Promise<ContactInfo | null> {
  return client.fetch(contactInformationQuery);
}

const Navbar = async ({
  menuItems = ["Home", "Services", "About", "Contact"],
  className = "",
}: Props) => {
  const contactInfo = await getContactInfo();
  const normalizeUrl = (url?: string) => {
    if (!url) return undefined;
    return /^https?:\/\//i.test(url) ? url : `https://${url}`;
  };
  const instagramUrl = normalizeUrl(contactInfo?.instagram);
  const facebookUrl = normalizeUrl(contactInfo?.facebook);

  return (
    <nav className={`${styles.nav} ${className}`}>
      <div className={styles.left}>
        <Logo className={styles.logo} />
      </div>

      <ul className={styles.desktopMenu}>
        {menuItems.map((m) => (
          <li key={m}>
            <a
              href={m === "Home" ? "/" : `/${m.toLowerCase()}`}
              className={styles.link}
            >
              {m}
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.mobileMenu}>
        <MobileMenu
          instagramUrl={instagramUrl}
          facebookUrl={facebookUrl}
          phone={contactInfo?.phone}
          email={contactInfo?.email}
        />
      </div>
    </nav>
  );
};

export default Navbar;

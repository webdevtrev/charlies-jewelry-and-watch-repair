import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import { FaInstagram, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer + " section-alt"}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <Logo className={styles.logo} />
            <div className={styles.social} aria-label="Social links">
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <FaInstagram size={24} aria-hidden />
              </a>
              <a
                href="tel:+1234567890"
                className={styles.socialLink}
                aria-label="Phone"
              >
                <FaPhoneAlt size={24} aria-hidden />
              </a>
              <a
                href="mailto:info@example.com"
                className={styles.socialLink}
                aria-label="Email"
              >
                <FaEnvelope size={24} aria-hidden />
              </a>
            </div>
          </div>
          <nav className={styles.nav} aria-label="Footer navigation">
            <a href="/services">Services</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/privacy">Privacy</a>
          </nav>
        </div>
        <p className={styles.copy}>
          © {year} Charlie's Jewelry &amp; Watch Repair. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

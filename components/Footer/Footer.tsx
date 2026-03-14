import styles from "./Footer.module.css";
import Logo from "../Logo/Logo";
import {
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { client } from "@/sanity/lib/client";
import { contactInformationQuery } from "@/sanity/lib/queries";

type ContactInfo = {
  phone?: string;
  email?: string;
  instagram?: string;
  facebook?: string;
};

async function getContactInfo(): Promise<ContactInfo | null> {
  return client.fetch(contactInformationQuery);
}

export default async function Footer() {
  const contactInfo = await getContactInfo();
  const year = new Date().getFullYear();
  const instagram = contactInfo?.instagram;
  const facebook = contactInfo?.facebook;
  const phone = contactInfo?.phone;
  const email = contactInfo?.email;
  const phoneHref = phone ? phone.replace(/[^+0-9]/g, "") : "";
  const normalizeUrl = (url?: string) => {
    if (!url) return undefined;
    return /^https?:\/\//i.test(url) ? url : `https://${url}`;
  };
  const instagramUrl = normalizeUrl(instagram);
  const facebookUrl = normalizeUrl(facebook);
  return (
    <footer className={styles.footer + " section-alt"}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <Logo className={styles.logo} />
            <div className={styles.social} aria-label="Social links">
              {instagramUrl && (
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Instagram"
                >
                  <FaInstagram size={24} aria-hidden />
                </a>
              )}
              {facebookUrl && (
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label="Facebook"
                >
                  <FaFacebookF size={24} aria-hidden />
                </a>
              )}
              {phone && (
                <a
                  href={`tel:${phoneHref}`}
                  className={styles.socialLink}
                  aria-label="Phone"
                >
                  <FaPhoneAlt size={24} aria-hidden />
                </a>
              )}
              {email && (
                <a
                  href={`mailto:${email}`}
                  className={styles.socialLink}
                  aria-label="Email"
                >
                  <FaEnvelope size={24} aria-hidden />
                </a>
              )}
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

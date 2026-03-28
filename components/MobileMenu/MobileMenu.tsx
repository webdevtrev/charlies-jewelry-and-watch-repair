"use client";
import React, { useEffect, useState } from "react";
import styles from "./MobileMenu.module.css";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import {
  FaInstagram,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

type Props = {
  open?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
  instagramUrl?: string;
  facebookUrl?: string;
  phone?: string;
  email?: string;
};

const MobileMenu: React.FC<Props> = ({
  open: openProp,
  onClose,
  onOpen,
  instagramUrl,
  facebookUrl,
  phone,
  email,
}) => {
  const [openInternal, setOpenInternal] = useState<boolean>(!!openProp);

  const isControlled = typeof openProp === "boolean";
  const isOpen = isControlled ? !!openProp : openInternal;
  const phoneHref = phone ? phone.replace(/[^+0-9]/g, "") : "";
  const hasSocialLinks = !!(instagramUrl || facebookUrl || phoneHref || email);

  useEffect(() => {
    if (isControlled) setOpenInternal(!!openProp);
  }, [openProp, isControlled]);

  const openMenu = () => {
    if (isControlled) {
      onOpen?.();
    } else {
      setOpenInternal(true);
    }
  };

  const closeMenu = () => {
    if (isControlled) {
      onClose?.();
    } else {
      setOpenInternal(false);
    }
  };

  return (
    <>
      <button
        className={styles.hamburger}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={isOpen ? closeMenu : openMenu}
      >
        <FaBars />
      </button>

      {isOpen && (
        <div className={styles.overlay} role="dialog" aria-modal="true">
          <div className={styles.panel}>
            <button
              className={styles.close}
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <IoMdClose />
            </button>
            <nav>
              <ul className={styles.list}>
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </nav>
            {hasSocialLinks && (
              <div className={styles.social} aria-label="Social links">
                {instagramUrl && (
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="Instagram"
                  >
                    <FaInstagram size={20} aria-hidden />
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
                    <FaFacebookF size={20} aria-hidden />
                  </a>
                )}
                {phoneHref && (
                  <a
                    href={`tel:${phoneHref}`}
                    className={styles.socialLink}
                    aria-label="Phone"
                  >
                    <FaPhoneAlt size={20} aria-hidden />
                  </a>
                )}
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className={styles.socialLink}
                    aria-label="Email"
                  >
                    <FaEnvelope size={20} aria-hidden />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;

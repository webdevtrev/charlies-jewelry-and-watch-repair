"use client";
import React, { useEffect, useState } from "react";
import styles from "./MobileMenu.module.css";
import { FaBars } from "react-icons/fa6";

type Props = {
  open?: boolean;
  onClose?: () => void;
  onOpen?: () => void;
};

const MobileMenu: React.FC<Props> = ({ open: openProp, onClose, onOpen }) => {
  const [openInternal, setOpenInternal] = useState<boolean>(!!openProp);

  const isControlled = typeof openProp === "boolean";
  const isOpen = isControlled ? !!openProp : openInternal;

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
              ×
            </button>
            <nav>
              <ul className={styles.list}>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileMenu;

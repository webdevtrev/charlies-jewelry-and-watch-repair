import React from "react";
import styles from "./CardService.module.css";
import IconWrapper from "../IconWrapper/IconWrapper";

type Props = {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  link?: string;
  className?: string;
};

const CardService: React.FC<Props> = ({
  icon,
  title,
  description,
  link,
  className = "",
}) => {
  return (
    <article className={`${styles.card} ${className}`}>
      <div className={styles.iconRow}>
        <IconWrapper size={48} className={styles.icon}>
          {icon ?? "⌚"}
        </IconWrapper>
      </div>

      <h3 className={styles.title}>{title}</h3>

      {description && <p className={styles.description}>{description}</p>}

      {link && (
        <div className={styles.learnMore}>
          <a href={link}>Learn more →</a>
        </div>
      )}
    </article>
  );
};

export default CardService;

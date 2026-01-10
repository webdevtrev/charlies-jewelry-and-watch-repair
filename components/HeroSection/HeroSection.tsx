import React from "react";
import styles from "./HeroSection.module.css";

type Props = {
  headline: string;
  subtext?: string;
  backgroundImage?: { src: string; alt?: string };
  children?: React.ReactNode;
  className?: string;
};

const HeroSection: React.FC<Props> = ({
  headline,
  subtext,
  backgroundImage,
  children,
  className = "",
}) => {
  const bgStyle: React.CSSProperties | undefined = backgroundImage
    ? {
        backgroundImage: `linear-gradient(to left, rgba(255,255,255,0.3), rgba(255,255,255,0.9)), url(${backgroundImage.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : undefined;

  return (
    <section className={`${styles.wrapper} ${className}`} style={bgStyle}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h1 className={styles.title}>{headline}</h1>
          {subtext && <p className={styles.subtitle}>{subtext}</p>}
          {children}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

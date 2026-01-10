"use client";

import React, { useRef } from "react";
import styles from "./HeroSection.module.css";

type BackgroundImage = { src: string; alt?: string };
type BackgroundVideo = {
  src: string;
  type?: string;
  poster?: string;
  muted?: boolean;
  playsInline?: boolean;
};

type Props = {
  headline: string;
  subtext?: string;
  backgroundImage?: BackgroundImage;
  backgroundVideo?: BackgroundVideo;
  children?: React.ReactNode;
  className?: string;
};

const HeroSection: React.FC<Props> = ({
  headline,
  subtext,
  backgroundImage,
  backgroundVideo,
  children,
  className = "",
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const bgStyle: React.CSSProperties | undefined =
    !backgroundVideo && backgroundImage
      ? {
          backgroundImage: `linear-gradient(to left, rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url(${backgroundImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }
      : undefined;

  const handleVideoEnded = () => {
    const v = videoRef.current;
    if (!v) return;
    // Pause and seek to the last frame — subtract a tiny epsilon to ensure
    // the browser displays the final rendered frame instead of resetting.
    try {
      const last = Math.max(0, (v.duration || 0) - 0.04);
      v.pause();
      v.currentTime = last;
    } catch (e) {
      // If seeking fails for any reason, just ensure the video is paused.
      v.pause();
    }
  };

  return (
    <section className={`${styles.wrapper} ${className}`} style={bgStyle}>
      {backgroundVideo && (
        <div className={styles.videoWrap} aria-hidden="true">
          <video
            ref={videoRef}
            className={styles.video}
            src={backgroundVideo.src}
            poster={backgroundVideo.poster}
            muted={backgroundVideo.muted ?? true}
            playsInline={backgroundVideo.playsInline ?? true}
            autoPlay
            preload="auto"
            onEnded={handleVideoEnded}
          />
          <div className={styles.videoOverlay} />
        </div>
      )}

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

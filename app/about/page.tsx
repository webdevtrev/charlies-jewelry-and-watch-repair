import HeroSection from "@/components/HeroSection/HeroSection";
import styles from "./page.module.css";
export default function About() {
  const heroContent = {
    headline: "About Charlie's Jewelry and Watch Repair",
    subtitle:
      "Serving the Dayton community with expert jewelry and watch repair services for over 30 years.",
    backgroundImage: {
      src: "/images/about/hero.jpeg",
      alt: "jeweler working on a piece of jewelry",
    },
  };
  const aboutContent = {
    title: "Our Story",
    text: [
      "Founded in 1990, Charlie's Jewelry and Watch Repair has been a trusted name in the Dayton community for over three decades. Our family-owned business is built on a foundation of skilled craftsmanship, integrity, and personalized service.",
      "At Charlie's, we understand the sentimental value of your jewelry and timepieces. That's why we treat each piece with the utmost care and attention to detail, ensuring that every repair and restoration meets our high standards of quality.",
      "Our team of experienced jewelers and watchmakers are passionate about their craft and dedicated to providing exceptional service. Whether you're looking to repair a cherished heirloom or design a custom piece, we're here to help bring your vision to life.",
    ],
    image: {
      src: "/images/about/placeholder.jpeg",
      alt: "Workbench with jewelry tools",
    },
  };
  console.log(styles);
  return (
    <>
      <HeroSection {...heroContent} />
      <section className="section">
        <div className={"container " + styles.content}>
          <div>
            <h2>{aboutContent.title}</h2>
            {aboutContent.text.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className={styles.imageContainer}>
            <img src={aboutContent.image.src} alt={aboutContent.image.alt} />
          </div>
        </div>
      </section>
    </>
  );
}

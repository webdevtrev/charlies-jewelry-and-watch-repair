import React from "react";
import ContactSection from "@/components/ContactSection/ContactSection";
import CardService from "@/components/CardService/CardService";
import HeroSection from "@/components/HeroSection/HeroSection";
import { FaGem, FaRegClock, FaTools } from "react-icons/fa";
import image from "../../components/HeroSection/pexels-pixabay-277320.jpg";
import styles from "./home.module.css";

const services = [
  {
    title: "Jewelry Repair",
    description:
      "Expert repair services for all types of jewelry, from rings to necklaces.",
    link: "#",
    icon: <FaGem />,
  },
  {
    title: "Watch Repair",
    description:
      "Professional watch repair and maintenance for all brands and styles.",
    link: "#",
    icon: <FaRegClock />,
  },
  {
    title: "Custom Jewelry Design",
    description:
      "Bespoke jewelry design services to create unique pieces tailored to your style.",
    link: "#",
    icon: <FaTools />,
  },
];
export default function Home() {
  return (
    <main>
      <HeroSection
        headline="Charlie's Jewelry & Watch Repair"
        subtext="Quality Craftsmanship, Timeless Elegance"
        backgroundImage={{
          src: image.src,
          alt: "Gold watch on a man with a white shirt",
        }}
      />
      <section aria-labelledby="services-heading" className="section">
        <div className={styles.serviceIntro}>
          <h2 id="services-heading" className="section-title">
            Our Services
          </h2>
          <p>
            From delicate restorations to custom creations, we bring decades of
            expertise to every piece
          </p>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <CardService
              key={index}
              title={service.title}
              description={service.description}
              link={service.link}
              icon={service.icon}
            />
          ))}
        </div>
      </section>
      <ContactSection />
    </main>
  );
}

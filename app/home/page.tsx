import React from "react";
import ContactSection from "@/components/ContactSection/ContactSection";
import CardService from "@/components/CardService/CardService";
import HeroSection from "@/components/HeroSection/HeroSection";
import { FaGem, FaRegClock, FaTools, FaAward } from "react-icons/fa";

import image from "../../components/HeroSection/pexels-pixabay-277320.jpg";
import styles from "./home.module.css";

import watch from "@/components/CardProduct/watch.png";
import pocketwatch from "@/components/CardProduct/pocketwatch.png";
import CardProduct from "@/components/CardProduct/CardProduct";

const video = "/videos/hero.mp4";

import workbench from "@/assets/workbench.png";

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
const awards = [
  "Family-owned for three generations",
  "40 years of combined experience",
  "Better Business Bureau Accredited",
];
const featuredProducts = [
  {
    title: "Vintage Pocket Watch",
    description:
      "A beautifully restored vintage pocket watch with intricate engraving and a durable movement.",
    imageSrc: pocketwatch.src,
    imageAlt: "Vintage pocket watch",
    price: "249",
  },
  {
    title: "Antique Gold Watch",
    description:
      "This antique gold watch features hand-polished casing and a sapphire crystal. Fully serviced and guaranteed for a year. Perfect for collectors and everyday wear.",
    imageSrc: watch.src,
    imageAlt: "Antique gold watch",
    price: "1450",
  },
];
export default function Home() {
  return (
    <main>
      <HeroSection
        headline="Every item is precious"
        subtext="Quality Craftsmanship, Timeless Elegance"
        backgroundVideo={{
          src: video,
          poster: image.src,
          muted: true,
          playsInline: true,
        }}
      />
      <section>
        <div className="container">
          <h2 className={styles.featuredProductsHeading}>Featured Products</h2>
          <div className={styles.products}>
            {featuredProducts.map((product, index) => (
              <CardProduct
                key={index}
                title={product.title}
                description={product.description}
                imageSrc={product.imageSrc}
                imageAlt={product.imageAlt}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </section>
      <section aria-labelledby="services-heading" className="section">
        <div className="container">
          <div className={styles.serviceIntro}>
            <h2 id="services-heading" className="section-title">
              Our Services
            </h2>
            <p>
              From delicate restorations to custom creations, we bring decades
              of expertise to every piece
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
        </div>
      </section>
      <section
        aria-labelledby="contact-heading"
        className="section section-alt"
      >
        <div className={"container " + styles.experience}>
          <div>
            <h2>Master Craftsman, Family Trusted</h2>
            <p>
              For over 40 years, our family-owned business has been the trusted
              choice for jewelry and watch repair in the community. Spanning
              three generations, our craft has been passed down through hands-on
              mentorship, time-honored techniques, and a shared respect for
              traditional workmanship.
            </p>
            <p>
              As a proud Better Business Bureau-accredited business, we believe
              trust is earned through honesty, transparency, and standing behind
              every piece we service. This commitment has guided our family for
              decades and continues to shape the way we care for each item
              entrusted to us.
            </p>
            <p>
              Whether it's a cherished heirloom needing delicate restoration or
              a modern timepiece requiring expert attention, every piece is
              treated with patience, precision, and respect.
            </p>
            <div className={styles.awards}>
              {awards.map((award, index) => (
                <div key={index} className={styles.award}>
                  <FaAward size={24} />
                  <span>{award}</span>
                </div>
              ))}
            </div>
          </div>
          <img src={workbench.src} alt="Workbench with jewelry tools" />
        </div>
      </section>
      <ContactSection />
    </main>
  );
}

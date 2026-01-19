import React from "react";
import ContactSection from "@/components/ContactSection/ContactSection";
import CardService from "@/components/CardService/CardService";
import HeroSection from "@/components/HeroSection/HeroSection";
import CardProduct from "@/components/CardProduct/CardProduct";
import { FaGem, FaRegClock, FaTools, FaAward } from "react-icons/fa";
import styles from "./home.module.css";

import { client } from "@/sanity/lib/client";
import { homePageQuery, contactInformationQuery } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { ptComponents } from "@/components/PortableText/portableTextComponents";

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

async function getHomeData() {
  return await client.fetch(homePageQuery);
}

async function getContactInformation() {
  return await client.fetch(contactInformationQuery);
}

export default async function Home() {
  const data = await getHomeData();
  const contactInfo = await getContactInformation();

  const heroContent = {
    headline: data?.hero?.headline,
    subtext: data?.hero?.subtext,
    backgroundImage: data?.hero?.backgroundImage
      ? { src: data.hero.backgroundImage }
      : undefined,
    backgroundVideo: data?.hero?.backgroundVideo
      ? {
          src: data.hero.backgroundVideo.videoUrl,
          poster: data.hero.backgroundVideo.posterUrl,
        }
      : undefined,
  };
  const featuredProducts = data?.featuredProducts ?? [];
  const awards = data?.awards ?? [];
  const experience = data?.experience ?? { title: "", paragraphs: [] };
  console.log("Home page data:", data);
  console.log("Featured Products:", featuredProducts);
  console.log("Experience Section:", experience);

  return (
    <main>
      <HeroSection {...heroContent} />

      {featuredProducts?.length > 0 && (
        <section>
          <div className="container">
            <h2 className={styles.featuredProductsHeading}>
              Featured Products
            </h2>
            <div className={styles.products}>
              {featuredProducts?.map((product: any) => (
                <CardProduct
                  key={product._id}
                  title={product.name}
                  description={product.shortDescription}
                  imageSrc={product.imageUrl}
                  imageAlt={product.name}
                  price={product.price}
                />
              ))}
            </div>
          </div>
        </section>
      )}

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
            {services?.map((service, index) => (
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

      <section className="section section-alt">
        <div className={"container " + styles.experience}>
          <div>
            <h2>{experience.title}</h2>
            {experience?.paragraphs && experience.paragraphs.length > 0 ? (
              <PortableText
                value={experience.paragraphs}
                components={ptComponents}
              />
            ) : null}
            <div className={styles.awards}>
              {awards?.map((award: string, index: number) => (
                <div key={index} className={styles.award}>
                  <FaAward size={24} />
                  <span>{award}</span>
                </div>
              ))}
            </div>
          </div>
          {experience.imageUrl && (
            <div className={styles.experienceImageContainer}>
              <img
                src={experience.imageUrl}
                alt={experience.title || "Experience image"}
              />
            </div>
          )}
        </div>
      </section>

      <ContactSection contactInfo={contactInfo} />
    </main>
  );
}

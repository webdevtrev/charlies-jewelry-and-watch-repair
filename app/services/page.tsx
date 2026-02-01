import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection/HeroSection";
import { client } from "@/sanity/lib/client";
import { servicesPageQuery, servicesQuery } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

async function getServicesPage() {
  return client.fetch(servicesPageQuery);
}

async function getServices() {
  console.log("test");
  return client.fetch(servicesQuery);
}
interface Service {
  _id: string;
  title: string;
  subtitle: string;
  features: string[];
  price: number;
  image: {
    url: string;
    crop?: object;
    hotspot?: { x: number; y: number };
  };
  slug: string;
  order: number;
}

export default async function Services() {
  const data = await getServicesPage();
  const servicesData = await getServices();
  console.log(servicesData);
  const hero = data?.hero;
  const services = [
    {
      id: "watch-repair",
      title: "Watch Repair & Restoration",
      subtitle: "Expert servicing for all types of timepieces",
      features: [
        "Battery replacement and movement servicing",
        "Crystal and crown replacement",
        "Band and bracelet repair",
        "Water resistance testing",
        "Complete movement overhaul",
        "Vintage watch restoration",
      ],
      startingAt: 75,
      image: {
        src: "/images/services/parts.jpeg",
        alt: "watch repair tools and watch",
      },
    },
    {
      id: "jewelry-repair",
      title: "Jewelry Repair & Restoration",
      subtitle: "Professional care for your precious pieces",
      features: [
        "Ring sizing and reshaping",
        "Stone setting and replacement",
        "Prong retipping and repair",
        "Chain and clasp repair",
        "Pearl and bead restringing",
        "Engraving and polishing",
      ],
      startingAt: 50,
      image: {
        src: "/images/services/repair.jpeg",
        alt: "jewelry repair tools and ring",
      },
    },
    {
      id: "custom-design",
      title: "Custom Design",
      subtitle: "Bring your unique vision to life",
      features: [
        "Engagement and wedding rings",
        "Anniversary and special occasion pieces",
        "Family heirloom redesign",
        "CAD design and 3D modeling",
        "Stone sourcing and selection",
        "Complete handcrafted fabrication",
      ],
      startingAt: null,
      priceLabel: "Custom quote",
      image: {
        src: "/images/services/design.jpeg",
        alt: "custom jewelry design sketches",
      },
    },
  ];
  const frequentlyAskedQuestions = data?.frequentlyAskedQuestions ?? [];
  const proccessIntro = data?.processesIntro;
  const processSteps = data?.processSteps ?? [];
  function padZeroOnLeft(num: number): string {
    return num.toString().padStart(2, "0");
  }
  function formatPrice(price: number): string {
    if (price % 1 === 0) {
      return `$${price.toFixed(0)}`;
    }
    return `$${price.toFixed(2)}`;
  }
  return (
    <div>
      {hero && (
        <HeroSection
          headline={hero.headline}
          subtext={hero.subtext}
          backgroundImage={
            hero.backgroundImage ? { src: hero.backgroundImage } : undefined
          }
        />
      )}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionTitle}>
            <h2>{data?.serviceIntro?.title}</h2>
            <p className="p-large muted">{data?.serviceIntro?.subtitle}</p>
          </div>
          <div className={styles.servicesGrid}>
            {servicesData.map((service: Service) => (
              <div
                key={service._id}
                className={styles.serviceCard}
                id={service.slug}
              >
                <div className={styles.imageContainer}>
                  {service.image && (
                    <img
                      src={urlFor(service.image).url()}
                      alt={service.title}
                      className={styles.serviceImage}
                      style={{
                        objectPosition: service.image.hotspot
                          ? `${service.image.hotspot.x * 100}% ${service.image.hotspot.y * 100}%`
                          : "center",
                      }}
                    />
                  )}
                </div>
                <div>
                  <h3 className="h2">{service.title}</h3>
                  <p className={styles.serviceSubtitle + " p-large muted"}>
                    {service.subtitle}
                  </p>
                  <ul className={styles.featuresList + " checkList"}>
                    {service.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <p className={styles.startingAt + " special-note"}>
                    {service.price !== null
                      ? `Starting at ${formatPrice(service.price)}`
                      : "Custom quote"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section--muted">
        <div className="container">
          <div className={styles.sectionTitle}>
            <h2>{proccessIntro?.title}</h2>
            <p className="p-large muted">{proccessIntro?.subtitle}</p>
          </div>
          <div className={styles.processSteps}>
            {processSteps.map((step: any, index: number) => (
              <div key={index} className={styles.processStep + " card"}>
                <span className="h2">{padZeroOnLeft(index + 1)}</span>
                <h3 className="h3">{step.title}</h3>
                <p className="p">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className={styles.sectionTitle}>
            <h2>Frequently Asked Questions</h2>
            <p className="p-large muted">
              Answers to common inquiries about our services
            </p>
          </div>
          <div className={styles.faqSection}>
            {frequentlyAskedQuestions.map((faq: any, index: number) => (
              <div key={index} className={styles.faqItem + " card"}>
                <h3 className="h4">{faq.question}</h3>
                <p className="p">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import styles from "./page.module.css";
import HeroSection from "@/components/HeroSection/HeroSection";

export default function Services() {
  const HeroContent = {
    headline: "Expert Services for Your Treasured Pieces",
    subtext:
      "From delicate repairs to custom creations, our master craftsmen bring decades of expertise to every project.",
    backgroundImage: {
      src: "/images/services/services-hero.jpg",
      alt: "repair man at a workbench",
    },
  };
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
  const frequentlyAskedQuestions = [
    {
      question: "How long does typical repair take?",
      answer:
        "Repair timelines vary by service — simple repairs like battery replacement or ring sizing typically take a few days, while complex restorations can take several weeks. We'll provide an estimated timeline during your consultation.",
    },
    {
      question: "Do you offer warranties on repair?",
      answer:
        "Yes — we provide a limited warranty covering workmanship. Specific terms depend on the service performed; details will be provided on your receipt or during consultation.",
    },
    {
      question: "What if I don't know what repairs are needed?",
      answer:
        "Bring your piece to our studio for a free evaluation. Our master craftsmen will assess the item, explain the necessary repairs, and provide a detailed estimate.",
    },
  ];
  const processSteps = [
    {
      title: "Consultation",
      description:
        "Bring your item to our studio for a free evaluation. We'll discuss the issue, timeline, and provide a detailed estimate.",
    },
    {
      title: "Expert Assessment",
      description:
        "Our master craftsmen examine your piece thoroughly, identifying all necessary repairs and restoration work.",
    },
    {
      title: "Skilled Restoration",
      description:
        "Using traditional techniques and modern tools, we carefully restore your treasured piece to its original beauty.",
    },
    {
      title: "Quality Assurance",
      description:
        "Each piece undergoes rigorous inspection to ensure it meets our exacting standards before return to you.",
    },
  ];
  function padZeroOnLeft(num: number): string {
    return num.toString().padStart(2, "0");
  }
  return (
    <div>
      <HeroSection {...HeroContent} />
      <section className={styles.servicesSection}>
        <div className="container">
          <div className={styles.sectionTitle}>
            <h2>Our Services</h2>
            <p className="p-large muted">
              Comprehensive care for fine jewelry and timepieces
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <div key={service.id} className={styles.serviceCard}>
                <div className={styles.imageContainer}>
                  <img
                    src={service.image.src}
                    alt={service.image.alt}
                    className={styles.serviceImage}
                  />
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
                    {service.startingAt !== null
                      ? `Starting at $${service.startingAt}`
                      : service.priceLabel}
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
            <h2>Our Process</h2>
            <p className="p-large muted">
              A seamless journey from consultation to completion
            </p>
          </div>
          <div className={styles.processSteps}>
            {processSteps.map((step, index) => (
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
            {frequentlyAskedQuestions.map((faq, index) => (
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

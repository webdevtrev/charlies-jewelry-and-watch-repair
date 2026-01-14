import HeroSection from "@/components/HeroSection/HeroSection";
import ContactSection from "@/components/ContactSection/ContactSection";
export default function Contact() {
  const HeroContent = {
    headline: "Get in Touch with Charlie's Jewelry & Watch Repair",
    subtext:
      "Have questions or need assistance? Our friendly team is here to help with all your jewelry and watch repair needs.",
    backgroundImage: {
      src: "/images/contact/hero.jpg",
      alt: "customer service representative assisting a customer",
    },
  };
  return (
    <main>
      <HeroSection {...HeroContent} />
      <ContactSection />
    </main>
  );
}

import HeroSection from "@/components/HeroSection/HeroSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import { client } from "@/sanity/lib/client";
import {
  contactInformationQuery,
  contactPageQuery,
} from "@/sanity/lib/queries";

async function getContactData() {
  const [contactInfo, page] = await Promise.all([
    client.fetch(contactInformationQuery),
    client.fetch(contactPageQuery),
  ]);
  return { contactInfo, page };
}

export default async function Contact() {
  const { contactInfo, page } = await getContactData();
  const hero = page?.hero ?? {
    headline: "Get in Touch",
    subtext: "",
    backgroundImage: null,
  };

  return (
    <main>
      <HeroSection
        headline={hero.headline}
        subtext={hero.subtext}
        backgroundImage={
          hero.backgroundImage ? { src: hero.backgroundImage } : undefined
        }
      />
      <ContactSection contactInfo={contactInfo} />
    </main>
  );
}

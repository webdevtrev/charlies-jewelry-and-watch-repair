import HeroSection from "@/components/HeroSection/HeroSection";
import styles from "./page.module.css";
import { client } from "@/sanity/lib/client";
import { aboutPageQuery } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { ptComponents } from "@/components/PortableText/portableTextComponents";

async function getAbout() {
  return await client.fetch(aboutPageQuery);
}

export default async function About() {
  const data = await getAbout();
  const hero = data?.hero ?? { headline: "", backgroundImage: null };
  const content = data?.content ?? { title: "", text: [], imageUrl: null };

  return (
    <>
      <HeroSection
        headline={hero.headline}
        backgroundImage={
          hero.backgroundImage ? { src: hero.backgroundImage } : undefined
        }
      />
      <section className="section">
        <div className={"container " + styles.content}>
          <div>
            <h2>{content.title}</h2>
            <PortableText value={content.text} components={ptComponents} />
          </div>
          {content.imageUrl && (
            <div className={styles.imageContainer}>
              <img
                src={content.imageUrl}
                alt={content.title || "About image"}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

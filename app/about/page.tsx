import HeroSection from "@/components/HeroSection/HeroSection";
export default function About() {
  const heroContent = {
    headline: "About Charlie's Jewelry and Watch Repair",
    subtitle:
      "Serving the Dayton community with expert jewelry and watch repair services for over 30 years.",
  };
  return <HeroSection {...heroContent} />;
}

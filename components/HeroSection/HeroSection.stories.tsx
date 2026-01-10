import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import HeroSection from "./HeroSection";
import banner from "./pexels-pixabay-277320.jpg";
const video = "/videos/hero.mp4";
export default {
  title: "Hero Area/HeroSection",
  component: HeroSection,
} as Meta;

const Template: StoryFn<any> = (args) => <HeroSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  headline: "Quality Jewelry & Watch Repair",
  subtext:
    "Trusted local service for repairs, appraisals, and custom jewelry work.",
  primaryButton: (
    <a
      href="#services"
      style={{
        padding: "10px 16px",
        background: "#b9864c",
        color: "#fff",
        borderRadius: 6,
      }}
    >
      Our Services
    </a>
  ),
  secondaryButton: (
    <a href="#contact" style={{ padding: "10px 16px", borderRadius: 6 }}>
      Contact Us
    </a>
  ),
  backgroundImage: banner,
};
export const WithVideoBackground = Template.bind({});
WithVideoBackground.args = {
  headline: "Experience the Elegance",
  subtext:
    "Discover our exquisite collection of jewelry and watches, crafted to perfection.",
  backgroundVideo: {
    src: video,
    poster: banner,
    muted: true,
    playsInline: true,
  },
};

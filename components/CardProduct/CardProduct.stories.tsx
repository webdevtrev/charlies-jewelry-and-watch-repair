import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CardProduct from "./CardProduct";
import watch from "./watch.png";
import pocketwatch from "./pocketwatch.png";

export default {
  title: "Products/CardProduct",
  component: CardProduct,
} as Meta;

const Template: StoryFn<any> = (args) => (
  <div style={{ width: "300px" }}>
    <CardProduct {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: "Vintage Pocket Watch",
  description:
    "A beautifully restored vintage pocket watch with intricate engraving and a durable movement.",
  imageSrc: pocketwatch.src,
  imageAlt: "Vintage pocket watch",
  price: "249",
};

export const LongDescription = Template.bind({});
LongDescription.args = {
  title: "Antique Gold Watch",
  description:
    "This antique gold watch features hand-polished casing and a sapphire crystal. Fully serviced and guaranteed for a year. Perfect for collectors and everyday wear.",
  imageSrc: watch.src,
  imageAlt: "Antique gold watch",
  price: "1450",
};

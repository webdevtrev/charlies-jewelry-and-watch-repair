import React from "react";
import type { Meta, StoryFn } from "@storybook/react";

type Args = {
  text: string;
};

const meta: Meta<Args> = {
  title: "Design/Typography",
  argTypes: {
    text: { control: "text" },
  },
};

export default meta;

const styles: { key: string; class?: string; label: string }[] = [
  { key: "display", class: "display-hero", label: "Display" },
  { key: "h1", label: "H1 / Heading XL" },
  { key: "h2", label: "H2 / Heading L" },
  { key: "h3", label: "H3 / Heading M" },
  { key: "h4", label: "H4 / Heading S" },
  { key: "p", label: "Paragraph" },
];

function TypographyDemo({ text }: Args) {
  const value =
    text && text.length > 0
      ? text
      : "The quick brown fox jumps over the lazy dog";

  return (
    <div className="typography-container">
      {styles.map((s) => {
        const Wrapper = (s.key || "div") as React.ElementType;
        return (
          <div>
            <div className="typography-label">{s.label}</div>
            <Wrapper key={s.key} className={s.class}>
              {value}
            </Wrapper>
          </div>
        );
      })}
    </div>
  );
}

const Template: StoryFn<Args> = (args) => <TypographyDemo {...args} />;

export const Playground = Template.bind({});
Playground.args = {
  text: "The quick brown fox jumps over the lazy dog",
};

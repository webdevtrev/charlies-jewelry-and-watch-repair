import React from 'react';
import TextBlock from '../TextBlock/TextBlock';

type Props = {
  title: string;
  paragraph: string;
  decorative?: React.ReactNode;
  className?: string;
};

const AboutSection: React.FC<Props> = ({ title, paragraph, decorative, className = '' }) => {
  return (
    <section className={className} style={{ padding: 24 }}>
      <h2>{title}</h2>
      <TextBlock>{paragraph}</TextBlock>
      {decorative}
    </section>
  );
};

export default AboutSection;

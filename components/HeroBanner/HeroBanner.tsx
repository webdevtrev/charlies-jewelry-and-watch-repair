import React from 'react';

type ButtonNode = React.ReactNode;

type Props = {
  headline: string;
  subtext?: string;
  image?: string;
  backgroundPattern?: React.ReactNode;
  primaryButton?: ButtonNode;
  secondaryButton?: ButtonNode;
  className?: string;
};

const HeroBanner: React.FC<Props> = ({
  headline,
  subtext,
  image,
  backgroundPattern,
  primaryButton,
  secondaryButton,
  className = '',
}) => {
  return (
    <section className={className} style={{ padding: '48px 16px', textAlign: 'center' }}>
      {backgroundPattern}
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <h1>{headline}</h1>
        {subtext && <p>{subtext}</p>}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 16 }}>
          {primaryButton}
          {secondaryButton}
        </div>
      </div>
      {image && <img src={image} alt="hero" style={{ maxWidth: '100%', marginTop: 24 }} />}
    </section>
  );
};

export default HeroBanner;

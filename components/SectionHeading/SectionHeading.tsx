import React from 'react';

type Props = {
  title: string;
  subtitle?: string;
  className?: string;
};

export const SectionHeading: React.FC<Props> = ({ title, subtitle, className = '' }) => {
  return (
    <header className={className}>
      <h2>{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </header>
  );
};

export default SectionHeading;

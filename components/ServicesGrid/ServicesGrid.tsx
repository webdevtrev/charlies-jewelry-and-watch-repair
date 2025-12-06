import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const ServicesGrid: React.FC<Props> = ({ children, className = '' }) => {
  return (
    <div className={className} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 16 }}>
      {children}
    </div>
  );
};

export default ServicesGrid;

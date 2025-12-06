import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const FeatureList: React.FC<Props> = ({ children, className = '' }) => {
  return <div className={className} style={{ display: 'grid', gap: 16 }}>{children}</div>;
};

export default FeatureList;

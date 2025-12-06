import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
};

const TextBlock: React.FC<Props> = ({ children, className = '' }) => {
  return <p className={className}>{children}</p>;
};

export default TextBlock;

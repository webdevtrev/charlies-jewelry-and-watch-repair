import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
  maxWidth?: string;
};

const Container: React.FC<Props> = ({ children, className = '', maxWidth = '1200px' }) => {
  const style: React.CSSProperties = { maxWidth, margin: '0 auto', padding: '0 16px' };
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

export default Container;

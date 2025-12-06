import React from 'react';

type Props = {
  children: React.ReactNode;
  size?: number;
  className?: string;
};

const IconWrapper: React.FC<Props> = ({ children, size = 48, className = '' }) => {
  const style: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#eee',
  };
  return (
    <div style={style} className={className} aria-hidden>
      {children}
    </div>
  );
};

export default IconWrapper;

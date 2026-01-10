import React from 'react';

type Props = {
  children: React.ReactNode;
  size?: number;
  className?: string;
  bg?: string;
  color?: string;
  decorative?: boolean;
  title?: string;
};

const IconWrapper: React.FC<Props> = ({
  children,
  size = 48,
  className = '',
  bg = '#EFE7DA',
  color = 'var(--color-gold-500)',
  decorative = false,
  title,
}) => {
  const style: React.CSSProperties = {
    width: size,
    height: size,
    borderRadius: '50%',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: bg,
    color,
    flex: '0 0 auto',
  };

  const ariaProps = decorative
    ? { 'aria-hidden': true }
    : title
    ? { role: 'img', 'aria-label': title }
    : {};

  return (
    <div style={style} className={className} {...(ariaProps as any)}>
      {children}
    </div>
  );
};

export default IconWrapper;

import React from 'react';

type Props = {
  src: string;
  alt?: string;
  children?: React.ReactNode;
  className?: string;
};

const ImageBlock: React.FC<Props> = ({ src, alt = '', children, className = '' }) => {
  return (
    <div className={className} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <div style={{ flex: 1 }}>{children}</div>
      <div style={{ flex: 1 }}>
        <img src={src} alt={alt} style={{ width: '100%', borderRadius: 8 }} />
      </div>
    </div>
  );
};

export default ImageBlock;

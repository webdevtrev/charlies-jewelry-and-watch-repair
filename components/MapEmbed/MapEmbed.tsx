import React from 'react';

type Props = {
  src: string;
  title?: string;
  className?: string;
};

const MapEmbed: React.FC<Props> = ({ src, title = 'Map', className = '' }) => {
  return (
    <div className={className} style={{ borderRadius: 8, overflow: 'hidden' }}>
      <iframe src={src} title={title} style={{ width: '100%', height: 260, border: 0 }} />
    </div>
  );
};

export default MapEmbed;

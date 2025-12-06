import React from 'react';

type Props = {
  message: string;
  cta?: React.ReactNode;
  className?: string;
};

const FooterCTA: React.FC<Props> = ({ message, cta, className = '' }) => {
  return (
    <div className={className} style={{ padding: 24, textAlign: 'center', background: '#f4f4f4' }}>
      <p style={{ margin: 0 }}>{message}</p>
      {cta && <div style={{ marginTop: 12 }}>{cta}</div>}
    </div>
  );
};

export default FooterCTA;

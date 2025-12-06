import React from 'react';

type Props = {
  icon?: React.ReactNode;
  label: string;
  children?: React.ReactNode;
  className?: string;
};

const ContactItem: React.FC<Props> = ({ icon, label, children, className = '' }) => {
  return (
    <div className={className} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <div aria-hidden>{icon ?? '📍'}</div>
      <div>
        <strong>{label}</strong>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ContactItem;

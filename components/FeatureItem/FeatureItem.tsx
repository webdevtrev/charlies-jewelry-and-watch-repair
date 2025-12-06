import React from 'react';
import IconWrapper from '../IconWrapper/IconWrapper';

type Props = {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  className?: string;
};

const FeatureItem: React.FC<Props> = ({ icon, title, description, className = '' }) => {
  return (
    <div className={className} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      <IconWrapper>{icon ?? '★'}</IconWrapper>
      <div>
        <h3>{title}</h3>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
};

export default FeatureItem;

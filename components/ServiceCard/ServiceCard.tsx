import React from 'react';
import IconWrapper from '../IconWrapper/IconWrapper';

type Props = {
  icon?: React.ReactNode;
  title: string;
  description?: string;
  learnMoreHref?: string;
  className?: string;
};

const ServiceCard: React.FC<Props> = ({ icon, title, description, learnMoreHref, className = '' }) => {
  return (
    <article className={className} style={{ padding: 16, border: '1px solid #eee', borderRadius: 8 }}>
      <IconWrapper>{icon ?? '⌚'}</IconWrapper>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      {learnMoreHref && (
        <p>
          <a href={learnMoreHref}>Learn more</a>
        </p>
      )}
    </article>
  );
};

export default ServiceCard;

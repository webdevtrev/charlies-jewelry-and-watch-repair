import React from 'react';

const DecorativeDiamond: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 64 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <rect x="4" y="6" width="16" height="12" stroke="#ccc" transform="rotate(45 12 12)" />
  </svg>
);

export default DecorativeDiamond;

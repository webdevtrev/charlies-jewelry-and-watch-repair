import React from 'react';

const DecorativeGear: React.FC<{ className?: string; size?: number }> = ({ className = '', size = 64 }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <circle cx="12" cy="12" r="10" stroke="#ccc" />
  </svg>
);

export default DecorativeGear;

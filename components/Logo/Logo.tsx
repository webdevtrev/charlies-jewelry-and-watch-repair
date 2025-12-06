import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} width="120" height="28" viewBox="0 0 120 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Logo">
    <rect width="120" height="28" rx="4" fill="#111" />
  </svg>
);

export default Logo;

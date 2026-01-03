import React from 'react';
import logo from './l.png'

const Logo: React.FC<{ className?: string }> = ({ className = '' }) => (
  <img src={logo.src} alt="Logo" className={className} />
);

export default Logo;

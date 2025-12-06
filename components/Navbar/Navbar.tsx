import React from 'react';
import Logo from '../Logo/Logo';

type Props = {
  menuItems?: string[];
  className?: string;
};

const Navbar: React.FC<Props> = ({ menuItems = ['Home', 'Services', 'Contact'], className = '' }) => {
  return (
    <nav className={className} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: 12 }}>
      <Logo />
      <ul style={{ display: 'flex', gap: 16, listStyle: 'none', margin: 0, padding: 0 }}>
        {menuItems.map((m) => (
          <li key={m}><a href={`#${m.toLowerCase()}`}>{m}</a></li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

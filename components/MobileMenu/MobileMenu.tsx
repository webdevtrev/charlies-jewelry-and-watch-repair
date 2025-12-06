import React from 'react';

type Props = {
  open?: boolean;
  onClose?: () => void;
};

const MobileMenu: React.FC<Props> = ({ open = false, onClose }) => {
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', top: 0, right: 0, bottom: 0, width: 280, background: '#fff', boxShadow: '-4px 0 12px rgba(0,0,0,0.1)' }}>
      <button onClick={onClose} aria-label="Close menu">Close</button>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;

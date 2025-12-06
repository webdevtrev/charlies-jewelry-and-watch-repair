import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import MapEmbed from '../MapEmbed/MapEmbed';

type Props = {
  address?: React.ReactNode;
  contactInfo?: React.ReactNode;
  mapSrc?: string;
  className?: string;
};

const ContactSection: React.FC<Props> = ({ address, contactInfo, mapSrc, className = '' }) => {
  return (
    <section className={className} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
      <div>
        <h3>Address</h3>
        <ContactItem label="Location">{address ?? '123 Main St, Your City'}</ContactItem>
      </div>
      <div>
        <h3>Contact</h3>
        {contactInfo ?? (
          <>
            <ContactItem label="Phone">(555) 555-5555</ContactItem>
            <ContactItem label="Email">info@example.com</ContactItem>
          </>
        )}
      </div>
      <div>
        <h3>Map</h3>
        {mapSrc ? <MapEmbed src={mapSrc} /> : <div style={{ height: 260, background: '#eee' }} />}
      </div>
    </section>
  );
};

export default ContactSection;

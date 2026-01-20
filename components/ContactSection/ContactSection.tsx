"use client";
import React from "react";
import styles from "./ContactSection.module.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Button from "../Button/Button";
import IconWrapper from "../IconWrapper/IconWrapper";

type HourEntry = {
  day?: string;
  open?: string;
  close?: string;
  closed?: boolean;
};
type ContactInfo = {
  phone?: string;
  email?: string;
  address?: string;
  mapLink?: string;
  hours?: HourEntry[];
};

const ContactSection: React.FC<{ contactInfo?: ContactInfo }> = ({
  contactInfo,
}) => {
  const phone = contactInfo?.phone;
  const email = contactInfo?.email;
  const address = contactInfo?.address;
  const hours = contactInfo?.hours ?? [];

  return (
    <section
      className={styles.contactSection}
      aria-labelledby="contact-heading"
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 id="contact-heading">Visit Our Store</h2>
          <p>
            Schedule a consultation to discuss your jewelry or watch repair
            needs. We look forward to serving you.
          </p>

          <ul className={styles.contactList}>
            {address && (
              <li>
                <IconWrapper size={32} decorative={true}>
                  <FaMapMarkerAlt size={16} />
                </IconWrapper>
                <div>
                  <h4>Address</h4>
                  <address className="subtext">
                    {address.split("\n").map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}
                  </address>
                </div>
              </li>
            )}

            {phone && (
              <li>
                <IconWrapper size={32} decorative={true}>
                  <FaPhoneAlt size={16} />
                </IconWrapper>
                <div>
                  <h4>Phone</h4>
                  <a
                    href={`tel:${phone.replace(/[^+0-9]/g, "")}`}
                    className="subtext"
                  >
                    {phone}
                  </a>
                </div>
              </li>
            )}

            {email && (
              <li>
                <IconWrapper size={32} decorative={true}>
                  <FaEnvelope size={16} />
                </IconWrapper>
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${email}`} className="subtext">
                    {email}
                  </a>
                </div>
              </li>
            )}
          </ul>

          <hr />

          {hours && hours.length > 0 && (
            <div className={styles.hours} aria-label="Studio hours">
              <h4>Hours</h4>
              <dl className="subtext">
                {hours.map((h, i) => (
                  <div key={i}>
                    <dt>{h.day}</dt>
                    <dd>{h.closed ? "Closed" : `${h.open} - ${h.close}`}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>

        <aside className={styles.right} aria-labelledby="consult-heading">
          <h3 id="consult-heading">Request Consultation</h3>

          <form className={styles.form} name="contact" netlify>
            <div className={styles.formRow}>
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" />
            </div>

            <div className={styles.formRow}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" />
            </div>

            <div className={styles.formRow}>
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" />
            </div>

            <div className={styles.formRow}>
              <label htmlFor="service">Service Needed</label>
              <select id="service" name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                <option value="jewelry-repair">Jewelry Repair</option>
                <option value="watch-repair">Watch Repair</option>
                <option value="appraisal">Appraisal</option>
              </select>
            </div>

            <div className={styles.formRow}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} />
            </div>

            <Button type="submit">Send Message</Button>
          </form>
        </aside>
      </div>
    </section>
  );
};

export default ContactSection;

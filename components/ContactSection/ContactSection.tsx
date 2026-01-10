"use client";
import React from "react";
import styles from "./ContactSection.module.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Button from "../Button/Button";
import IconWrapper from "../IconWrapper/IconWrapper";
const ContactSection: React.FC = () => {
  return (
    <section
      className={styles.contactSection}
      aria-labelledby="contact-heading"
    >
      <div className={styles.container}>
        <div className={styles.left}>
          <h2 id="contact-heading">Visit Our Studio</h2>
          <p>
            Schedule a consultation to discuss your jewelry or watch repair
            needs. We look forward to serving you.
          </p>

          <ul className={styles.contactList}>
            <li>
              <IconWrapper size={32} decorative={true}>
                <FaMapMarkerAlt size={16} />
              </IconWrapper>
              <div>
                <h4>Address</h4>
                <address className="subtext">
                  Fairfield Commons Mall
                  <br />
                  2727 Fairfield Commons
                  <br />
                  E237
                  <br />
                  Beavercreek, OH 45431
                </address>
              </div>
            </li>

            <li>
              <IconWrapper size={32} decorative={true}>
                <FaPhoneAlt size={16} />
              </IconWrapper>
              <div>
                <h4>Phone</h4>
                <a href="tel:(937) 225 - 1826" className="subtext">
                  (937)-225-1826
                </a>
              </div>
            </li>

            <li>
              <IconWrapper size={32} decorative={true}>
                <FaEnvelope size={16} />
              </IconWrapper>
              <div>
                <h4>Email</h4>
                <a href="daytonjewelry@gmail.com" className="subtext">
                  daytonjewelry@gmail.com
                </a>
              </div>
            </li>
          </ul>

          <hr />

          <div className={styles.hours} aria-label="Studio hours">
            <h4>Hours</h4>
            <dl className="subtext">
              <div>
                <dt>Monday - Thursday</dt>
                <dd>10:00 AM - 8:00 PM</dd>
              </div>
              <div>
                <dt>Friday and Saturday</dt>
                <dd>10:00 AM - 9:00 PM</dd>
              </div>
              <div>
                <dt>Sunday</dt>
                <dd>11:00 AM - 7:00 PM</dd>
              </div>
            </dl>
          </div>
        </div>

        <aside className={styles.right} aria-labelledby="consult-heading">
          <h3 id="consult-heading">Request Consultation</h3>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
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

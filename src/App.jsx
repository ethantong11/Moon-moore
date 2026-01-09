import { useState } from "react";
import "./styles.css";
import heroImage from "../assets/Hero-image.png";
import logoImage from "../assets/logo.png";
import lunchIcon from "../assets/Lunch.svg";
import eveningIcon from "../assets/Evening.svg";
import chefImage from "../assets/Chef.svg";
import aboutImage from "../assets/about us.svg";
import menuImage from "../assets/menu.svg";
import locationIcon from "../assets/location.svg";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Contact Us", href: "#contact" },
];

export default function App() {
  const [modal, setModal] = useState({ open: false, title: "", body: "" });

  const openModal = (title, body) => setModal({ open: true, title, body });
  const closeModal = () => setModal({ open: false, title: "", body: "" });

  const aboutBody = [
    "Sushi Moon has been delighting customers on Moon Street in Wan Chai since 2014. Renowned for its high-quality ingredients and meticulous preparation, it was named one of \"Asia Miles' Favorite Hong Kong Restaurants\" in 2019. In March 2025, Sushi Moon opened a new location next to the World Trade Centre in Causeway Bay.",
    "We are committed to using fresh ingredients flown in daily from Japan, combining traditional Edo-style sushi techniques to create authentic Japanese cuisine. Each piece of sushi showcases the chef's creativity and expertise, highlighting fresh ingredients, precise handling, and optimal temperature. The rice is prepared with premium red vinegar imported from Japan, blended according to a secret recipe that offers a truly unique experience.",
  ];

  const chefBody = [
    "Our esteemed chef Mr. Man brings years of expertise in traditional Edo-style sushi, embodying the art of authentic Japanese cuisine. With a deep passion for selecting the finest ingredients and perfecting every element, our chef meticulously crafts each piece of sushi to highlight its freshness, balance, and flavor.",
    "Trained in precise handling and temperature control, they skillfully combine premium red vinegar rice—made with a secret recipe—with the freshest seafood flown in daily from Japan, delivering an unforgettable dining experience that reflects both tradition and creativity.",
  ];

  return (
    <div className="page">
      <header
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="overlay" />
        <nav className="top-bar">
          <div className="nav-left">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="logo">
            <img src={logoImage} alt="Moon n More logo" />
          </div>

          <div className="nav-right">
            <a className="phone" href="tel:+85261009297">
              <span className="phone-icon" aria-hidden="true">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1h3.46a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.01l-2.19 2.1z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <span>(852) 6100 9297</span>
            </a>
            <button className="button primary">Reservation</button>
          </div>
        </nav>

        <div className="hero-body">
          <h1>Where Japanese Tradition Meets Modern Innovation</h1>
          <p>
            A premier dining destination for Japanese cuisine in the heart of
            Causeway Bay
          </p>
          <button className="button primary hero-cta">Book Now</button>
        </div>
      </header>
      <section className="info-bar">
        <div className="info-content">
          <div className="info-block">
            <div className="info-title">Opening Hours</div>
            <div className="info-sub">Monday to Saturday</div>
          </div>
          <div className="divider" aria-hidden="true" />
          <div className="info-block icon-block">
            <img className="icon-img" src={lunchIcon} alt="Lunch hours" />
            <div>
              <div className="info-title">Lunch</div>
              <div className="info-sub">12pm - 3pm</div>
            </div>
          </div>
          <div className="info-block icon-block">
            <img className="icon-img" src={eveningIcon} alt="Evening hours" />
            <div>
              <div className="info-title">Evening</div>
              <div className="info-sub">6pm to 11 pm</div>
            </div>
          </div>
          <button className="button primary info-cta">Check Availability</button>
        </div>
      </section>
      <section className="about" id="about">
        <div className="about-wrapper">
          <div className="about-media">
            <div className="about-photo">
              <img src={aboutImage} alt="About Sushi Moon" />
            </div>
          </div>
          <div className="about-content">
            <h2>About Us</h2>
            <p>
              Sushi Moon has been delighting customers on Moon Street in Wan Chai
              since 2014. Renowned for its high-quality ingredients and meticulous
              preparation, it was named one of &quot;Asia Miles&apos; Favorite Hong Kong
              Restaurants&quot; in 2019. In March 2025, Sushi Moon opened a new location
              next to the World Trade Centre in Causeway Bay.
            </p>
            <p>
              We are committed to using fresh ingredients that are flown in daily from
              Japan, combining traditional Edo-style sushi techniques to create
              authentic Japanese cuisine. Each piece of sushi showcases the chef&apos;s
              creativity and expertise, highlighting fresh ingredients, precise
              handling, and optimal temperature. The rice is prepared with premium red
              vinegar imported from Japan, blended according to a secret recipe that
              offers a truly unique experience.
            </p>
            <button
              className="button ghost about-cta"
              onClick={() => openModal("About Us", aboutBody)}
            >
              Explore More
              <span aria-hidden="true" className="cta-arrow">
                →
              </span>
            </button>
          </div>
        </div>
      </section>
      <section className="chef" id="chef">
        <div className="chef-wrapper">
          <div className="chef-panel">
            <h2>Meet Our Chef</h2>
            <p>
              Our esteemed chef Mr. Man brings years of expertise in traditional
              Edo-style sushi, embodying the art of authentic Japanese cuisine.
              With a deep passion for selecting the finest ingredients and
              perfecting every element, our chef meticulously crafts each piece
              of sushi to highlight its freshness, balance, and flavor.
            </p>
            <p>
              Trained in precise handling and temperature control, they skillfully
              combine premium red vinegar rice—made with a secret recipe—with the
              freshest seafood flown in daily from Japan, delivering an
              unforgettable dining experience that reflects both tradition and
              creativity.
            </p>
            <button
              className="button ghost chef-cta"
              onClick={() => openModal("Meet Our Chef", chefBody)}
            >
              Explore More
              <span aria-hidden="true" className="cta-arrow">
                →
              </span>
            </button>
          </div>
          <div className="chef-media">
            <div className="chef-photo">
              <img src={chefImage} alt="Chef preparing sushi" />
            </div>
          </div>
        </div>
      </section>
      <section className="menu" id="menu">
        <div className="menu-wrapper">
          <div className="menu-header">
            <h2>Our Menu</h2>
            <button className="button ghost menu-cta">
              View Ala Carte Menu
              <span aria-hidden="true" className="cta-arrow">
                →
              </span>
            </button>
          </div>
          <div className="menu-image">
            <img src={menuImage} alt="Menu options" />
          </div>
        </div>
      </section>
      <section className="contact" id="contact">
        <div className="contact-wrapper">
          <div className="contact-head">
            <h2>Contact Us</h2>
            <p>Get in Touch with Us for Best Dining Experience</p>
          </div>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon" aria-hidden="true">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.72 11.72 0 003.68.59 1 1 0 011 1V20a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1h3.46a1 1 0 011 1 11.72 11.72 0 00.59 3.68 1 1 0 01-.24 1.01l-2.19 2.1z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="contact-label">Call us</div>
              <div className="contact-value">(852) 6100 9297</div>
            </div>
            <div className="contact-card">
              <div className="contact-icon" aria-hidden="true">
                <img src={locationIcon} alt="" />
              </div>
              <div className="contact-label">Address</div>
              <div className="contact-value">G/F, 279 Gloucester Rd, Causeway Bay</div>
            </div>
            <div className="contact-card">
              <div className="contact-icon" aria-hidden="true">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 5H4a1 1 0 00-1 1v12a1 1 0 001 1h16a1 1 0 001-1V6a1 1 0 00-1-1Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="m4 7 7.24 4.35a1.6 1.6 0 001.52 0L20 7"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="contact-label">Email Us</div>
              <div className="contact-value">sample@gmail.com</div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer" aria-label="Site footer">
        <div className="footer-inner">
          <div className="footer-logo">
            <img src={logoImage} alt="Moon n More logo" />
          </div>
          <div className="footer-contact">
            <div className="footer-phone">(852) 6100 9297</div>
            <div className="footer-address">G/F, 279 Gloucester Rd, Causeway Bay</div>
          </div>
          <div className="footer-divider" aria-hidden="true" />
          <div className="footer-nav">
            {navLinks.map((link) => (
              <a key={`footer-${link.label}`} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
          <div className="footer-bottom">
            <div className="footer-copy">© 2026 Moon N More | All rights reserved.</div>
            <div className="footer-social" aria-label="Social media">
              <a href="https://www.facebook.com" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.2 21v-7.2h2.4l.4-3H13.2V8.6c0-.9.3-1.5 1.5-1.5h1.4V4.3C15.7 4.2 14.6 4 13.3 4 10.7 4 8.9 5.6 8.9 8.3V10.8H6.5v3h2.4V21h4.3Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="https://www.instagram.com" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm8.75 1.25a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-4.75 1.5A4.25 4.25 0 1 1 7.75 12 4.25 4.25 0 0 1 12 7.75Zm0 2a2.25 2.25 0 1 0 2.25 2.25A2.25 2.25 0 0 0 12 9.75Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
              <a href="https://www.twitter.com" aria-label="Twitter">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.7 7.8c.6-.4 1-.9 1.2-1.6a6.1 6.1 0 0 1-1.7.5 2.9 2.9 0 0 0-2.2-1c-1.6 0-2.9 1.3-2.9 3 0 .2 0 .5.1.7a8.2 8.2 0 0 1-6-3.1 2.9 2.9 0 0 0 .9 3.9c-.5 0-.9-.2-1.3-.4v.1c0 1.4 1 2.7 2.4 3-.2.1-.5.1-.8.1-.2 0-.4 0-.6-.1a3 3 0 0 0 2.7 2A5.8 5.8 0 0 1 5 16.4a8 8 0 0 0 4.4 1.3c5.3 0 8.2-4.4 8.2-8.2v-.4c.5-.4.9-.9 1.1-1.3Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      {modal.open && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={modal.title}
          onClick={closeModal}
        >
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{modal.title}</h3>
              <button className="modal-close" onClick={closeModal} aria-label="Close dialog">
                ×
              </button>
            </div>
            <div className="modal-body">
              {Array.isArray(modal.body)
                ? modal.body.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
                : <p>{modal.body}</p>}
            </div>
            <div className="modal-actions">
              <button className="button primary" onClick={closeModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

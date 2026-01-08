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
            <button className="button ghost about-cta">
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
            <button className="button ghost chef-cta">
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
    </div>
  );
}

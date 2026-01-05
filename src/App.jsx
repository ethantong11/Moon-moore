import "./styles.css";
import heroImage from "../assets/Hero-image.png";
import logoImage from "../assets/logo.png";

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
    </div>
  );
}

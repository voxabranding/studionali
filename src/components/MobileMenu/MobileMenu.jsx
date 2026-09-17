import { siteConfig } from '../../config/siteConfig';
import { openBooking } from '../../utils/booking';
import './MobileMenu.css';

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`mobile-menu__backdrop ${isOpen ? 'mobile-menu__backdrop--visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        id="mobile-menu"
        className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <nav className="mobile-menu__nav" aria-label="Navegação mobile">
          <ul className="mobile-menu__nav-list">
            {siteConfig.nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="mobile-menu__nav-link"
                  onClick={onClose}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu__footer">
          <button
            className="mobile-menu__cta btn btn--primary"
            onClick={() => {
              openBooking();
              onClose();
            }}
          >
            Agendar horário
            <span className="btn__arrow" aria-hidden="true">→</span>
          </button>

          <div className="mobile-menu__social">
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="mobile-menu__social-link"
              aria-label="Instagram da Raiz"
            >
              {siteConfig.contact.instagramHandle}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

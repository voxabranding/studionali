import { siteConfig } from '../../config/siteConfig';
import { getBookingHref, getWhatsAppUrl } from '../../utils/booking';
import './Footer.css';

export default function Footer() {
  const { brand, contact, address, footer, nav } = siteConfig;

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner container">
        <div className="footer__brand">
          <img
            src={brand.logo}
            alt="Logotipo Raiz Beleza & Estética"
            className="footer__logo"
            width={120}
            height={56}
            style={{ aspectRatio: '2/1' }}
            loading="lazy"
          />
          <p className="footer__tagline">{brand.tagline}</p>
        </div>

        <div className="footer__links">
          <div className="footer__column">
            <span className="footer__column-title">Navegação</span>
            {nav.map((item) => (
              <a href={item.href} className="footer__link" key={item.href}>
                {item.label}
              </a>
            ))}
            <a
              href={getBookingHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
            >
              Agendar horário
            </a>
          </div>

          <div className="footer__column">
            <span className="footer__column-title">Contato</span>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              aria-label="Instagram da Raiz"
            >
              Instagram {contact.instagramHandle}
            </a>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="footer__link"
              aria-label="WhatsApp da Raiz"
            >
              WhatsApp
            </a>
          </div>

          <div className="footer__column">
            <span className="footer__column-title">Endereço</span>
            <address className="footer__address">
              {address.street}<br />
              {address.neighborhood}, {address.city} – {address.state}
            </address>
          </div>
        </div>
      </div>

      <div className="footer__bottom container">
        <span>{footer.copyright}</span>
        <a href={footer.privacyUrl} className="footer__privacy">
          {footer.privacyText}
        </a>
      </div>
    </footer>
  );
}

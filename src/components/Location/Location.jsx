import { siteConfig } from '../../config/siteConfig';
import { getWhatsAppUrl } from '../../utils/booking';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Location.css';

export default function Location() {
  const sectionRef = useScrollReveal();
  const { address, contact } = siteConfig;

  return (
    <section className="location" id="contato" aria-labelledby="location-title" ref={sectionRef}>
      <div className="container">
        <div className="location__card floating-panel">
          <div className="location__inner">
            <div className="location__content">
              <span className="section-eyebrow" data-reveal>Localização</span>
              <h2 className="section-title" id="location-title" data-reveal>
                Venha nos visitar.
              </h2>

              <address className="location__address" data-reveal data-reveal-delay="1">
                <span className="location__address-street">
                  {address.street}
                </span>
                <span className="location__address-city">
                  {address.neighborhood}, {address.city} – {address.state}
                </span>
              </address>

              <div className="location__actions" data-reveal data-reveal-delay="2">
                <a
                  href={address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary"
                  aria-label="Como chegar ao salão Raiz"
                >
                  Como chegar
                  <span className="btn__arrow" aria-hidden="true">→</span>
                </a>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--secondary"
                  aria-label="Falar pelo WhatsApp"
                >
                  WhatsApp
                </a>
              </div>

              <a
                href={contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
                data-reveal
                data-reveal-delay="3"
                style={{ marginTop: 'var(--space-sm)', color: 'var(--color-text-secondary)', fontSize: 'var(--text-sm)' }}
              >
                {contact.instagramHandle}
              </a>
            </div>

            <div className="location__map-wrapper" data-reveal data-reveal-delay="2">
              {/* ✅ REAL — foto do salão como referência visual do local */}
              <img
                src={siteConfig.images.salonInterior}
                alt="Interior do salão Raiz Beleza & Estética na Jatiúca"
                className="location__map-image"
                width={600}
                height={375}
                style={{ aspectRatio: '16/10' }}
                loading="lazy"
              />
              <a
                href={address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="location__map-overlay"
                aria-label="Abrir localização no Google Maps"
              >
                <span className="location__map-label">
                  📍 Abrir no mapa
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

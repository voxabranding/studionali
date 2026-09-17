import { siteConfig } from '../../config/siteConfig';
import { openBooking, getWhatsAppUrl } from '../../utils/booking';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './FinalCTA.css';

export default function FinalCTA() {
  const sectionRef = useScrollReveal();

  return (
    <section className="final-cta" aria-labelledby="final-cta-title" ref={sectionRef}>
      <div className="container">
        <div className="final-cta__card floating-panel">
          {/* Decorações */}
          <div className="final-cta__decoration final-cta__decoration--1" aria-hidden="true" />
          <div className="final-cta__decoration final-cta__decoration--2" aria-hidden="true" />

          <div className="final-cta__inner">
            <span className="final-cta__eyebrow" data-reveal>Raiz Beleza & Estética</span>

            <div className="final-cta__gold-line" aria-hidden="true" data-reveal />

            <h2 className="final-cta__title" id="final-cta-title" data-reveal>
              {siteConfig.finalCta.title}
            </h2>

            <p className="final-cta__text" data-reveal data-reveal-delay="1">
              {siteConfig.finalCta.text}
            </p>

            <div className="final-cta__actions" data-reveal data-reveal-delay="2">
              <button
                className="btn btn--gold"
                onClick={openBooking}
                aria-label={siteConfig.finalCta.ctaPrimary}
              >
                {siteConfig.finalCta.ctaPrimary}
                <span className="btn__arrow" aria-hidden="true">→</span>
              </button>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--white"
                aria-label="Falar pelo WhatsApp"
              >
                {siteConfig.finalCta.ctaSecondary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

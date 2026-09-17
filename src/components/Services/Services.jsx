import { siteConfig } from '../../config/siteConfig';
import { openBooking } from '../../utils/booking';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder';
import './Services.css';

export default function Services() {
  const sectionRef = useScrollReveal();

  return (
    <section className="services" id="servicos" aria-labelledby="services-title" ref={sectionRef}>
      <div className="container">
        <div className="services__card floating-panel">
          <div className="services__header" data-reveal>
            <span className="section-eyebrow">Nossos Serviços</span>
            <h2 className="section-title" id="services-title">
              Cuidado completo,<br />em um só lugar.
            </h2>
            <div className="section-divider" aria-hidden="true" />
          </div>

          <div className="services__grid">
            {siteConfig.services.map((service, index) => (
              <article
                className="service-card"
                key={service.id}
                data-reveal
                data-reveal-delay={Math.min(index + 1, 4)}
              >
                <div className="service-card__image-wrapper">
                  <ImagePlaceholder 
                    text={service.title} 
                    className="service-card__image" 
                    style={{ aspectRatio: '4/3' }} 
                  />
                </div>

                <div className="service-card__content">
                  <h3 className="service-card__title">{service.title}</h3>
                  <p className="service-card__description">{service.description}</p>
                  <button
                    className="service-card__link"
                    onClick={openBooking}
                    aria-label={`Agendar ${service.title}`}
                  >
                    Agendar
                    <span className="service-card__link-arrow" aria-hidden="true">→</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import { siteConfig } from '../../config/siteConfig';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './TrustStrip.css';

export default function TrustStrip() {
  const sectionRef = useScrollReveal();

  return (
    <section className="trust-strip" aria-label="Diferenciais" ref={sectionRef}>
      <div className="container">
        <div className="trust-strip__card floating-panel">
          <div className="trust-strip__grid">
            {siteConfig.trustItems.map((item, index) => (
              <div
                className="trust-strip__item"
                key={item.title}
                data-reveal
                data-reveal-delay={index + 1}
              >
                <div className="trust-strip__icon" aria-hidden="true">
                  <div className="trust-strip__icon-line" />
                </div>
                <h3 className="trust-strip__title">{item.title}</h3>
                <p className="trust-strip__description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

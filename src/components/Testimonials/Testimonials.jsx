import { siteConfig } from '../../config/siteConfig';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Testimonials.css';

/**
 * Seção de depoimentos.
 * Renderiza SOMENTE quando há depoimentos reais em siteConfig.testimonials.
 * Não inventa depoimentos.
 */
export default function Testimonials() {
  const sectionRef = useScrollReveal();

  // Seção oculta quando não há depoimentos reais
  if (!siteConfig.testimonials || siteConfig.testimonials.length === 0) {
    return null;
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} aria-hidden="true">
        {i < rating ? '★' : '☆'}
      </span>
    ));
  };

  return (
    <section className="testimonials" aria-labelledby="testimonials-title" ref={sectionRef}>
      <div className="container">
        <div className="testimonials__header" data-reveal>
          <span className="section-eyebrow">O que dizem</span>
          <h2 className="section-title" id="testimonials-title">
            Quem viveu, recomenda.
          </h2>
          <div className="section-divider" aria-hidden="true" />
        </div>

        <div className="testimonials__grid" role="list">
          {siteConfig.testimonials.map((item, index) => (
            <article
              className="testimonial-card"
              key={index}
              role="listitem"
              data-reveal
              data-reveal-delay={Math.min(index + 1, 3)}
            >
              {item.rating && (
                <div
                  className="testimonial-card__stars"
                  role="img"
                  aria-label={`${item.rating} de 5 estrelas`}
                >
                  {renderStars(item.rating)}
                </div>
              )}
              <blockquote className="testimonial-card__text">
                &ldquo;{item.text}&rdquo;
              </blockquote>
              <cite className="testimonial-card__author">{item.name}</cite>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

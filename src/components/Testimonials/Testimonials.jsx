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

  const testimonials = siteConfig.testimonials && siteConfig.testimonials.length > 0
    ? siteConfig.testimonials
    : [
        { name: 'Ana Souza', text: 'Melhor estúdio de Macapá! Atendimento impecável.', rating: 5 },
        { name: 'Bruna Lima', text: 'As unhas duram muito e o acabamento é perfeito.', rating: 5 },
        { name: 'Carla Dias', text: 'Ambiente super agradável, profissionais qualificados.', rating: 5 },
      ];

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
            Clientes: Quem já veio, conta como foi.
          </h2>
          <div className="section-divider" aria-hidden="true" />
        </div>

        <div className="testimonials__grid" role="list">
          {testimonials.map((item, index) => (
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
              <cite className="testimonial-card__author">{item.name}, AVALIAÇÃO NO GOOGLE</cite>
            </article>
          ))}
        </div>

        <div className="testimonials__nav">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonials__dot ${index === 0 ? 'testimonials__dot--active' : ''}`}
              aria-label={`Ir para o depoimento ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

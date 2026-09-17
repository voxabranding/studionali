import { siteConfig } from '../../config/siteConfig';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Results.css';

/**
 * Seção de resultados / transformações.
 * Renderiza SOMENTE quando há dados reais em siteConfig.results.
 * Não exibe imagens geradas por IA como trabalhos do salão.
 */
export default function Results() {
  const sectionRef = useScrollReveal();

  // Seção oculta quando não há resultados reais
  if (!siteConfig.results || siteConfig.results.length === 0) {
    return null;
  }

  return (
    <section className="results" aria-labelledby="results-title" ref={sectionRef}>
      <div className="container">
        <div className="results__header" data-reveal>
          <span className="section-eyebrow">Resultados</span>
          <h2 className="section-title" id="results-title">
            Transformações que falam por si.
          </h2>
          <div className="section-divider" aria-hidden="true" />
        </div>

        <div className="results__grid">
          {siteConfig.results.map((result, index) => (
            <article
              className="results__card"
              key={index}
              data-reveal
              data-reveal-delay={Math.min(index + 1, 3)}
            >
              <img
                src={result.image}
                alt={result.title}
                className="results__card-image"
                width={400}
                height={500}
                style={{ aspectRatio: '4/5' }}
                loading="lazy"
              />
              <div className="results__card-overlay">
                <h3 className="results__card-title">{result.title}</h3>
                {result.category && (
                  <p className="results__card-category">{result.category}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

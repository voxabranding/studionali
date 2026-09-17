import { siteConfig } from '../../config/siteConfig';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder';
import './Results.css';

export default function Results() {
  const sectionRef = useScrollReveal();

  const results = siteConfig.results && siteConfig.results.length > 0 
    ? siteConfig.results 
    : [
        { title: 'Mega Hair 1', category: 'MEGA HAIR' },
        { title: 'Mega Hair 2', category: 'MEGA HAIR' },
        { title: 'Unhas Gel 1', category: 'ALONGAMENTO' },
        { title: 'Unhas Gel 2', category: 'ALONGAMENTO' },
      ];

  return (
    <section className="results" aria-labelledby="results-title" ref={sectionRef}>
      <div className="container">
        <div className="results__container">
          <div className="results__sidebar" data-reveal>
            <span className="section-eyebrow">Resultados</span>
            <h2 className="section-title" id="results-title">
              Galeria de transformações.
            </h2>
            <p className="section-text">
              Acompanhe de perto as mudanças que realizamos.
            </p>
            <a 
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--secondary"
            >
              Ver mais no Instagram
            </a>
          </div>

          <div className="results__gallery" data-reveal data-reveal-delay="1">
            {results.map((result, index) => (
              <article className="results__card" key={index}>
                <ImagePlaceholder 
                  text="" 
                  bgColor="#F1E8DC" 
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} 
                />
                
                <div className="results__play-icon" aria-hidden="true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>

                <div className="results__card-badge">
                  {result.category}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

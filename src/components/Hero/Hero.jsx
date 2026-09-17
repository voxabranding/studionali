import { siteConfig } from '../../config/siteConfig';
import { openBooking } from '../../utils/booking';
import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder';
import './Hero.css';

export default function Hero() {
  const { hero, brand } = siteConfig;

  return (
    <section className="hero" id="inicio" aria-label="Apresentação da Raiz Beleza & Estética">
      <div className="hero__container container">
        <div className="hero__card floating-panel">
          {/* Ilustrações Botânicas em SVG sutil */}
          <svg className="hero__botanical hero__botanical--top-left" viewBox="0 0 120 120" fill="none" aria-hidden="true">
            <path d="M20,100 Q40,40 100,20 Q60,80 20,100 Z" stroke="rgba(179, 151, 91, 0.22)" strokeWidth="1.2" fill="none" />
            <path d="M30,85 Q60,50 85,35" stroke="rgba(179, 151, 91, 0.16)" strokeWidth="1" />
            <path d="M45,70 Q70,45 75,25" stroke="rgba(179, 151, 91, 0.16)" strokeWidth="1" />
          </svg>

          <svg className="hero__botanical hero__botanical--bottom-left" viewBox="0 0 160 160" fill="none" aria-hidden="true">
            <path d="M10,150 Q40,70 140,10" stroke="rgba(179, 151, 91, 0.2)" strokeWidth="1.2" />
            <path d="M25,130 Q60,85 100,65" stroke="rgba(179, 151, 91, 0.15)" strokeWidth="1" />
            <path d="M45,110 Q80,65 115,45" stroke="rgba(179, 151, 91, 0.15)" strokeWidth="1" />
          </svg>

          <div className="hero__body">
            {/* Coluna Esquerda: Texto Editorial e Ações */}
            <div className="hero__content">
              <div className="hero__eyebrow-wrapper">
                <span className="hero__eyebrow">{hero.eyebrow || `${brand.shortName} • BELEZA & ESTÉTICA`}</span>
                <span className="hero__eyebrow-line" aria-hidden="true" />
              </div>

              <h1 className="hero__title">
                {hero.title || 'Experiência, cuidado e elegância'}
              </h1>

              <p className="hero__subtitle">{hero.subtitle}</p>

              <div className="hero__actions">
                <button
                  className="btn btn--primary hero__btn-primary"
                  onClick={openBooking}
                  aria-label={hero.ctaPrimary}
                >
                  {hero.ctaPrimary}
                  <span className="btn__arrow" aria-hidden="true">→</span>
                </button>

                <a href="#servicos" className="btn btn--secondary hero__btn-secondary">
                  {hero.ctaSecondary}
                </a>
              </div>

              <div className="hero__location">
                <span className="hero__location-badge">
                  <svg className="hero__location-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>{hero.location}</span>
                </span>
              </div>
            </div>

            {/* Coluna Direita: Composição Orgânica, Moldura Editorial e Foto */}
            <div className="hero__visual">
              <div className="hero__frame-container">
                {/* Camadas orgânicas de fundo para profundidade */}
                <div className="hero__frame-bg-curve hero__frame-bg-curve--outer" aria-hidden="true" />
                <div className="hero__frame-bg-curve hero__frame-bg-curve--inner" aria-hidden="true" />

                {/* Moldura Curva da Imagem */}
                <div className="hero__image-frame">
                  <ImagePlaceholder 
                    className="hero__image" 
                    text="Imagem principal da Hero" 
                    style={{ height: '640px' }} 
                  />
                </div>

                {/* Selo Circular Flutuante */}
                <div className="hero__badge" aria-hidden="true">
                  <div className="hero__badge-inner">
                    <span className="hero__badge-text">{hero.badge || 'CUIDADO & BELEZA'}</span>
                    <svg className="hero__badge-leaf" width="16" height="10" viewBox="0 0 24 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M2 14Q12 2 22 14Q12 10 2 14Z" fill="rgba(179,151,91,0.25)" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

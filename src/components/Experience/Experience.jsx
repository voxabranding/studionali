import { siteConfig } from '../../config/siteConfig';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Experience.css';

export default function Experience() {
  const sectionRef = useScrollReveal();

  return (
    <section
      className="experience"
      id="experiencia"
      aria-labelledby="experience-title"
      ref={sectionRef}
    >
      <div className="container">
        <div className="experience__card floating-panel">
          <div className="experience__inner">
            <div className="experience__content">
              <span className="section-eyebrow" data-reveal>A Experiência</span>
              <h2 className="section-title" id="experience-title" data-reveal>
                {siteConfig.experience.title}
              </h2>
              <p className="experience__text" data-reveal data-reveal-delay="1">
                {siteConfig.experience.text}
              </p>
              <a href="#sobre" className="btn btn--secondary" data-reveal data-reveal-delay="2">
                {siteConfig.experience.ctaText}
              </a>
            </div>

            <div className="experience__gallery" data-reveal data-reveal-delay="2">
              {/* ✅ REAL — foto do salão */}
              <div className="experience__image-wrapper experience__image-wrapper--main">
                <img
                  src={siteConfig.images.salonInterior}
                  alt="Interior do salão Raiz Beleza & Estética com estações de atendimento e espelhos arqueados"
                  className="experience__image"
                  width={800}
                  height={500}
                  style={{ aspectRatio: '16/10' }}
                  loading="lazy"
                />
              </div>

              {/* ✅ REAL — foto da recepção */}
              <div className="experience__image-wrapper experience__image-wrapper--secondary">
                <img
                  src={siteConfig.images.salonReception}
                  alt="Recepção do salão Raiz com parede verde e letreiro dourado"
                  className="experience__image"
                  width={400}
                  height={400}
                  style={{ aspectRatio: '1/1' }}
                  loading="lazy"
                />
              </div>

              {/* ✅ REAL — outra perspectiva do interior */}
              <div className="experience__image-wrapper experience__image-wrapper--secondary">
                <img
                  src={siteConfig.images.salonInterior}
                  alt="Ambiente acolhedor do salão Raiz com cadeiras e iluminação natural"
                  className="experience__image"
                  width={400}
                  height={400}
                  style={{ aspectRatio: '1/1' }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div className="experience__decoration" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}

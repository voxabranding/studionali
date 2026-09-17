import { siteConfig } from '../../config/siteConfig';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section className="about" id="sobre" aria-labelledby="about-title" ref={sectionRef}>
      <div className="container">
        <div className="about__card floating-panel">
          <div className="about__inner">
            <div className="about__content">
              <span className="section-eyebrow" data-reveal>Sobre a Raiz</span>
              <h2 className="section-title" id="about-title" data-reveal>
                {siteConfig.about.title}
              </h2>
              <p className="about__text" data-reveal data-reveal-delay="1">
                {siteConfig.about.text}
              </p>
            </div>

            <div className="about__image-wrapper" data-reveal data-reveal-delay="2">
              <div className="about__accent" aria-hidden="true" />
              {/* ✅ REAL — foto do salão */}
              <img
                src={siteConfig.images.salonReception}
                alt="Recepção do salão Raiz Beleza & Estética"
                className="about__image"
                width={480}
                height={640}
                style={{ aspectRatio: '3/4' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

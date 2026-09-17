import { siteConfig } from '../../config/siteConfig';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder';
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
              <div className="experience__image-wrapper experience__image-wrapper--main">
                <ImagePlaceholder 
                  text="Foto do salão principal" 
                  className="experience__image" 
                  style={{ aspectRatio: '16/10' }} 
                />
              </div>

              <div className="experience__image-wrapper experience__image-wrapper--secondary">
                <ImagePlaceholder 
                  text="Recepção do salão" 
                  className="experience__image" 
                  style={{ aspectRatio: '1/1' }} 
                />
              </div>

              <div className="experience__image-wrapper experience__image-wrapper--secondary">
                <ImagePlaceholder 
                  text="Interior do salão (outra perspectiva)" 
                  className="experience__image" 
                  style={{ aspectRatio: '1/1' }} 
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

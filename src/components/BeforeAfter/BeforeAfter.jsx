import { useState, useRef, useCallback } from 'react';
import { siteConfig } from '../../config/siteConfig';
import ImagePlaceholder from '../ImagePlaceholder/ImagePlaceholder';
import './BeforeAfter.css';

export default function BeforeAfter() {
  const config = siteConfig.beforeAfter;
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  }, []);

  // Removendo a checagem de config.enabled para sempre exibir a demo
  // if (!config || !config.enabled) {
  //   return null;
  // }

  const handlePointerDown = (e) => {
    setIsDragging(true);
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (isDragging) {
      updatePosition(e.clientX);
    }
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // Ignorar caso a captura já tenha sido liberada
    }
  };

  const handleKeyDown = (e) => {
    let delta = 0;
    if (e.key === 'ArrowLeft') delta = -2;
    else if (e.key === 'ArrowRight') delta = 2;
    else if (e.key === 'PageDown') delta = -10;
    else if (e.key === 'PageUp') delta = 10;
    else if (e.key === 'Home') setSliderPos(0);
    else if (e.key === 'End') setSliderPos(100);

    if (delta !== 0) {
      e.preventDefault();
      setSliderPos((prev) => Math.min(100, Math.max(0, prev + delta)));
    }
  };

  return (
    <section className="before-after" id="resultados" aria-label="Comparação de resultados antes e depois">
      <div className="container">
        <div className="before-after__card floating-panel">
          <div className="before-after__inner">
            <div className="before-after__header">
              <span className="section-eyebrow">Transformação Real</span>
              <h2 className="section-title">{config.title}</h2>
              <p className="section-text">{config.description}</p>
            </div>

            <div className="before-after__wrapper">
              <div
                ref={containerRef}
                className="before-after__comparator"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerUp}
                tabIndex={0}
                role="slider"
                aria-label="Comparar imagem antes e depois"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(sliderPos)}
                aria-valuetext={`${Math.round(sliderPos)}% da imagem depois visível`}
                onKeyDown={handleKeyDown}
              >
                <div className="before-after__img before-after__img--before">
                  <ImagePlaceholder text="Antes" bgColor="#D9C3A0" style={{ height: '100%' }} />
                </div>
                <span className="before-after__label before-after__label--before">ANTES</span>

                {/* Imagem "Depois" (camada superior recortada) */}
                <div
                  className="before-after__after-wrapper"
                  style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
                >
                  <div className="before-after__img before-after__img--after">
                    <ImagePlaceholder text="Depois" bgColor="#FAF7F1" style={{ height: '100%' }} />
                  </div>
                  <span className="before-after__label before-after__label--after">DEPOIS</span>
                </div>

                {/* Linha divisória e manípulo (handle) */}
                <div
                  className="before-after__divider"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="before-after__handle">
                    <svg
                      className="before-after__handle-icon"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M7 16l-4-4 4-4m10 8l4-4-4-4M3 12h18" />
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

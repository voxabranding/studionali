import { useEffect, useRef } from 'react';

/**
 * Hook para revelar elementos no scroll usando Intersection Observer.
 *
 * Comportamento:
 * - Adiciona .reveal-hidden aos filhos com [data-reveal]
 * - Ao entrar no viewport → troca para .reveal-visible (animação única)
 * - Desconecta o observer no cleanup
 * - Se prefers-reduced-motion está ativo → não oculta nada
 * - Sem a classe .js no <html> → conteúdo sempre visível (CSS)
 *
 * Uso:
 *   const sectionRef = useScrollReveal();
 *   <section ref={sectionRef}>
 *     <h2 data-reveal>Título</h2>
 *     <p data-reveal>Texto</p>
 *   </section>
 */
export function useScrollReveal(options = {}) {
  const containerRef = useRef(null);

  useEffect(() => {
    // Respeita prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('[data-reveal]');
    if (elements.length === 0) return;

    // Aplica classe inicial de ocultação
    elements.forEach((el) => {
      el.classList.add('reveal-hidden');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-hidden');
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target); // Anima apenas uma vez
          }
        });
      },
      {
        threshold: options.threshold || 0.15,
        rootMargin: options.rootMargin || '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    // Cleanup: desconecta o observer
    return () => {
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin]);

  return containerRef;
}

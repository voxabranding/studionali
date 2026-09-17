import React from 'react';
import './ServicesMarquee.css';

export default function ServicesMarquee() {
  // Uma lista de serviços para o letreiro baseados na imagem
  const services = [
    'Manicure',
    'Pedicure',
    'Esmaltação em Gel',
    'Blindagem',
    'Banho de Gel',
    'Alongamento Molde F1',
    'Fibra de Vidro',
    'Spa dos Pés',
    'Nail Art'
  ];

  // Duplicamos a lista algumas vezes para garantir o loop contínuo perfeito na tela inteira
  const marqueeItems = [...services, ...services, ...services, ...services];

  return (
    <div className="services-marquee">
      <div className="services-marquee__track">
        {marqueeItems.map((service, index) => (
          <span key={index} className="services-marquee__item">
            {service}
            <span className="services-marquee__separator">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}

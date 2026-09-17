export const siteConfig = {
  brand: {
    name: 'Nali Esmalteria & Studio',
    shortName: 'Nali Studio',
    tagline: 'Experiência, cuidado e elegância. ATENDEMOS COM E SEM AGENDAMENTO',
    logo: '/images/logo-nali.jpg',
  },

  contact: {
    instagram: 'https://www.instagram.com/nali_esmalteriaestudio/',
    instagramHandle: '@nali_esmalteriaestudio',
    whatsappNumber: '559681071141',
    whatsappMessage: 'Olá! Conheci o Studio Nali pelo site e gostaria de agendar um horário.',
  },

  address: {
    full: 'Av. Henrique Galúcio 1618 C - Centro, Macapá - AP',
    street: 'Av. Henrique Galúcio 1618 C',
    neighborhood: 'Centro',
    city: 'Macapá',
    state: 'AP',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Av.+Henrique+Galucio+1618+C+Centro',
  },

  bookingUrl: '',

  images: {
    salonInterior: '/images/salon-interior.jpg',
    salonReception: '/images/salon-reception.jpg',
    hero: '/images/placeholder/hero-placeholder.webp',
    serviceCabelos: '/images/placeholder/service-cabelos.webp',
    serviceMaosPes: '/images/placeholder/service-maos-pes.webp',
    serviceEstetica: '/images/placeholder/service-estetica.webp',
    serviceSobrancelhas: '/images/placeholder/service-sobrancelhas.webp',
    serviceCombos: '/images/placeholder/service-combos.webp',
  },

  hero: {
    eyebrow: 'NALI • ESMALTERIA & STUDIO',
    title: 'Experiência, cuidado e elegância.',
    subtitle: 'Seg - Sáb 09h às 20h. Atendemos com e sem agendamento. Um espaço completo para você.',
    ctaPrimary: 'Agendar meu momento',
    ctaSecondary: 'Conhecer os serviços',
    location: 'Centro, Macapá',
    badge: 'CUIDADO & BELEZA',
    desktopImage: '',
    mobileImage: '',
    imageAlt: 'Cliente em atendimento no Studio Nali',
  },

  beforeAfter: {
    enabled: true,
    title: 'Resultados impecáveis.',
    description: 'Deslize para acompanhar a transformação e perceber o cuidado presente em cada etapa.',
    beforeImage: '',
    afterImage: '',
    beforeAlt: 'Antes',
    afterAlt: 'Depois',
  },

  trustItems: [
    {
      title: 'Atendimento cuidadoso',
      description: 'Atenção em cada detalhe do seu momento',
    },
    {
      title: 'Ambiente elegante',
      description: 'Espaço pensado para o seu conforto',
    },
    {
      title: 'Profissionais especialistas',
      description: 'Equipe dedicada à sua beleza',
    },
    {
      title: 'Experiência completa',
      description: 'Todos os cuidados em um só lugar',
    },
  ],

  services: [
    {
      id: 'planos',
      title: 'Planos Mensais',
      description: 'Nali Premium (R$ 240) • Nali Cor da Semana (R$ 180) • Nali Premium Gel (R$ 300)',
      image: '',
    },
    {
      id: 'tradicionais',
      title: 'Unhas Tradicionais',
      description: 'Manicure (R$ 35) • Pedicure (R$ 40) • Combinado (R$ 60) • Combinado Completo (R$ 70)',
      image: '',
    },
    {
      id: 'esmaltacao',
      title: 'Esmaltação em Gel & Assistência',
      description: 'Esmaltação em Gel (R$ 80) • Blindagem (R$ 95) • Banho de Gel (R$ 110)',
      image: '',
    },
    {
      id: 'alongamento',
      title: 'Alongamento de Unhas',
      description: 'Molde F1 (R$ 160) • Gel na Tip (R$ 170) • Fibra de Vidro (R$ 200) • Ponta Francesa/Realista (R$ 80) • Remoção (R$ 50)',
      image: '',
    },
    {
      id: 'spa',
      title: 'Spa & Tratamentos',
      description: 'Spa dos Pés (R$ 90) • Plástica dos Pés (R$ 100) • Francesinha (R$ 10) • Cutilagem (R$ 20) • Nail Art (R$ 15)',
      image: '',
    },
  ],

  experience: {
    title: 'Seu momento começa antes do resultado.',
    text: 'Na Nali Esmalteria & Studio, cada detalhe foi pensado para que você desacelere, se cuide e saia se sentindo ainda mais confiante.',
    ctaText: 'Conhecer o espaço',
  },

  about: {
    title: 'Cuidado que valoriza quem você é.',
    text: 'O Studio Nali nasceu para transformar o cuidado pessoal em uma experiência leve, acolhedora e especial. Reunimos diferentes serviços em um só espaço para que cada cliente encontre tempo para si.',
  },

  finalCta: {
    title: 'Seu próximo momento de cuidado começa aqui.',
    text: 'Escolha o serviço ideal para você e reserve seu horário na Nali Esmalteria & Studio.',
    ctaPrimary: 'Quero agendar',
    ctaSecondary: 'Falar pelo WhatsApp',
  },

  testimonials: [],

  results: [],

  nav: [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Espaço', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ],

  footer: {
    copyright: `© ${new Date().getFullYear()} Nali Esmalteria & Studio. Todos os direitos reservados.`,
    privacyText: 'Política de Privacidade',
    privacyUrl: '#',
  },
};

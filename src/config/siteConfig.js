/**
 * ═══════════════════════════════════════════════════════════════
 * RAIZ BELEZA & ESTÉTICA — Configuração Central
 * ═══════════════════════════════════════════════════════════════
 *
 * Todos os dados da landing page centralizados aqui.
 * Para alterar textos, links, imagens ou dados de contato,
 * edite somente este arquivo.
 */

export const siteConfig = {

  // ═══════════════════════════════════════════════
  // DADOS CONFIRMADOS
  // ═══════════════════════════════════════════════

  brand: {
    name: 'Raiz Beleza & Estética',
    shortName: 'Raiz',
    tagline: 'Beleza que começa na raiz.',
    logo: '/images/logo-raiz.png',
  },

  contact: {
    instagram: 'https://www.instagram.com/salaoraizoficial/',
    instagramHandle: '@salaoraizoficial',

    // ⚠️ CONFIRMAR antes da publicação definitiva — número identificado na bio
    whatsappNumber: '558230278081',
    whatsappMessage: 'Olá! Conheci a Raiz pelo site e gostaria de agendar um horário.',
  },

  address: {
    full: 'Rua Cel. Adauto Gomes Barbosa, 692 – Jatiúca, Maceió – AL',
    street: 'Rua Cel. Adauto Gomes Barbosa, 692',
    neighborhood: 'Jatiúca',
    city: 'Maceió',
    state: 'AL',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Raiz+Beleza+Estetica+Jatiuca+Maceio',
  },

  // ═══════════════════════════════════════════════
  // PENDENTE: Inserir URL oficial do sistema de agendamento.
  // Enquanto estiver vazio, os botões redirecionam ao WhatsApp.
  // ═══════════════════════════════════════════════
  bookingUrl: '',

  // ═══════════════════════════════════════════════
  // IMAGENS
  // ═══════════════════════════════════════════════

  images: {
    // ✅ REAIS — fotos do salão
    salonInterior: '/images/salon-interior.jpg',
    salonReception: '/images/salon-reception.jpg',

    // ⚠️ PLACEHOLDER — Substituir por fotos reais antes de publicar
    hero: '/images/placeholder/hero-placeholder.webp',
    serviceCabelos: '/images/placeholder/service-cabelos.webp',
    serviceMaosPes: '/images/placeholder/service-maos-pes.webp',
    serviceEstetica: '/images/placeholder/service-estetica.webp',
    serviceSobrancelhas: '/images/placeholder/service-sobrancelhas.webp',
    serviceCombos: '/images/placeholder/service-combos.webp',
  },

  // ═══════════════════════════════════════════════
  // HERO
  // ═══════════════════════════════════════════════

  hero: {
    eyebrow: 'RAIZ • BELEZA & ESTÉTICA',
    title: 'Beleza que começa na raiz.',
    subtitle: 'Um espaço completo para cuidar dos seus cabelos, unhas, pele e bem-estar com atenção em cada detalhe.',
    ctaPrimary: 'Agendar meu momento',
    ctaSecondary: 'Conhecer os serviços',
    location: 'Jatiúca, Maceió',
    badge: 'Cuidado & Beleza',
    desktopImage: '/images/placeholder/hero-placeholder.webp',
    mobileImage: '/images/placeholder/hero-placeholder.webp',
    imageAlt: 'Cliente com cabelos bem cuidados em ambiente acolhedor',
  },

  // ═══════════════════════════════════════════════
  // ANTES E DEPOIS (BEFORE/AFTER)
  // ═══════════════════════════════════════════════

  beforeAfter: {
    enabled: false,
    title: 'Resultados que revelam cada detalhe.',
    description: 'Deslize para acompanhar a transformação e perceber o cuidado presente em cada etapa.',
    beforeImage: '/images/results/before.jpg',
    afterImage: '/images/results/after.jpg',
    beforeAlt: 'Cabelo antes do atendimento realizado pela Raiz',
    afterAlt: 'Resultado do cabelo após o atendimento realizado pela Raiz',
  },

  // ═══════════════════════════════════════════════
  // FAIXA DE CREDIBILIDADE
  // ═══════════════════════════════════════════════

  trustItems: [
    {
      title: 'Atendimento cuidadoso',
      description: 'Atenção em cada detalhe do seu momento',
    },
    {
      title: 'Ambiente acolhedor',
      description: 'Espaço pensado para o seu conforto',
    },
    {
      title: 'Profissionais especializados',
      description: 'Equipe dedicada à sua beleza',
    },
    {
      title: 'Experiência completa',
      description: 'Todos os cuidados em um só lugar',
    },
  ],

  // ═══════════════════════════════════════════════
  // SERVIÇOS (visão resumida, não catálogo)
  // ═══════════════════════════════════════════════

  services: [
    {
      id: 'cabelos',
      title: 'Cabelos',
      description: 'Cortes, tratamentos, coloração e finalizações que valorizam sua identidade.',
      image: '/images/placeholder/service-cabelos.webp', // ⚠️ PLACEHOLDER
    },
    {
      id: 'maos-pes',
      title: 'Mãos e pés',
      description: 'Cuidados completos para unhas impecáveis e momentos de relaxamento.',
      image: '/images/placeholder/service-maos-pes.webp', // ⚠️ PLACEHOLDER
    },
    {
      id: 'estetica',
      title: 'Estética e beleza',
      description: 'Procedimentos pensados para renovar, cuidar e realçar sua beleza natural.',
      image: '/images/placeholder/service-estetica.webp', // ⚠️ PLACEHOLDER
    },
    {
      id: 'sobrancelhas',
      title: 'Sobrancelhas',
      description: 'Design e cuidados delicados para harmonizar e valorizar o olhar.',
      image: '/images/placeholder/service-sobrancelhas.webp', // ⚠️ PLACEHOLDER
    },
    {
      id: 'combos',
      title: 'Experiências e combos',
      description: 'Combinações especiais para quem deseja viver um momento completo de autocuidado.',
      image: '/images/placeholder/service-combos.webp', // ⚠️ PLACEHOLDER
    },
  ],

  // ═══════════════════════════════════════════════
  // EXPERIÊNCIA
  // ═══════════════════════════════════════════════

  experience: {
    title: 'Seu momento começa antes do resultado.',
    text: 'Na Raiz, cada detalhe foi pensado para que você desacelere, se cuide e saia se sentindo ainda mais confiante.',
    ctaText: 'Conhecer o espaço',
  },

  // ═══════════════════════════════════════════════
  // SOBRE
  // ═══════════════════════════════════════════════

  about: {
    title: 'Cuidado que valoriza quem você é.',
    text: 'A Raiz Beleza & Estética nasceu para transformar o cuidado pessoal em uma experiência leve, acolhedora e especial. Reunimos diferentes serviços em um só espaço para que cada cliente encontre tempo para si e atenção em cada detalhe.',
  },

  // ═══════════════════════════════════════════════
  // CTA FINAL
  // ═══════════════════════════════════════════════

  finalCta: {
    title: 'Seu próximo momento de cuidado começa aqui.',
    text: 'Escolha o serviço ideal para você e reserve seu horário na Raiz.',
    ctaPrimary: 'Quero agendar',
    ctaSecondary: 'Falar pelo WhatsApp',
  },

  // ═══════════════════════════════════════════════
  // CONTEÚDO PENDENTE — seções ocultas enquanto vazio
  // ═══════════════════════════════════════════════

  /** Depoimentos reais. Seção oculta quando array vazio. */
  testimonials: [],
  // Formato esperado:
  // { name: 'Nome', text: 'Depoimento...', rating: 5 }

  /** Resultados / transformações reais. Seção oculta quando array vazio. */
  results: [],
  // Formato esperado:
  // { title: 'Descrição', image: '/images/results/foto.webp', category: 'Cabelos' }

  // ═══════════════════════════════════════════════
  // NAVEGAÇÃO
  // ═══════════════════════════════════════════════

  nav: [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Espaço', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ],

  // ═══════════════════════════════════════════════
  // FOOTER
  // ═══════════════════════════════════════════════

  footer: {
    copyright: `© ${new Date().getFullYear()} Raiz Beleza & Estética. Todos os direitos reservados.`,
    privacyText: 'Política de Privacidade',
    privacyUrl: '#', // PENDENTE: inserir URL da política de privacidade
  },
};

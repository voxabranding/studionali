/**
 * Funções centralizadas de agendamento e contato.
 *
 * Enquanto bookingUrl estiver vazio no siteConfig,
 * os botões de agendamento redirecionam ao WhatsApp.
 *
 * Quando a URL oficial for adicionada, ela terá prioridade automaticamente.
 */

import { siteConfig } from '../config/siteConfig';

/**
 * Gera a URL do WhatsApp com mensagem pré-preenchida.
 */
export function getWhatsAppUrl(customMessage) {
  const message = customMessage || siteConfig.contact.whatsappMessage;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encoded}`;
}

/**
 * Abre o link de agendamento externo.
 * Fallback: WhatsApp quando bookingUrl não estiver configurado.
 */
export function openBooking() {
  const url = siteConfig.bookingUrl;
  if (url) {
    window.open(url, '_blank', 'noopener,noreferrer');
  } else {
    // Fallback: abre conversa no WhatsApp
    window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
  }
}

/**
 * Retorna a URL para usar em links <a>.
 * Quando bookingUrl existir, retorna ele. Senão, retorna WhatsApp.
 */
export function getBookingHref() {
  return siteConfig.bookingUrl || getWhatsAppUrl();
}

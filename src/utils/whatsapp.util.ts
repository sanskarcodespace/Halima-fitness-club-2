import { BUSINESS_CONFIG } from '../config/business.config';

/**
 * Exact contextual pre-filled messages for Halima Fitness Club WhatsApp leads
 */
export const WHATSAPP_MESSAGES = {
  weightLoss: 'Hi Coach Halima, I am interested in Weight Loss Coaching.',
  classes: 'Hi Coach Halima, I would like to join the online fitness classes.',
  consultation: 'Hi Coach Halima, I would like to book a free consultation.',
  general: 'Hi Coach Halima, I would like to know more about your online wellness coaching.'
} as const;

export type WhatsAppMessageKey = keyof typeof WHATSAPP_MESSAGES;

/**
 * Checks whether a valid numeric phone number has been configured in place of the placeholder.
 */
export const isWhatsAppConfigured = (): boolean => {
  const rawNumber = BUSINESS_CONFIG.contactPlaceholders.whatsapp;
  if (!rawNumber || rawNumber.includes('[') || rawNumber.includes('REQUIRED')) {
    return false;
  }
  // Check if there are at least 8 digits
  const digitsOnly = rawNumber.replace(/\D/g, '');
  return digitsOnly.length >= 8;
};

/**
 * Generates the clean wa.me URL with pre-filled encoded text if configured,
 * or returns null if unconfigured.
 */
export const getWhatsAppUrl = (message?: string | WhatsAppMessageKey): string | null => {
  if (!isWhatsAppConfigured()) {
    return null;
  }

  const rawNumber = BUSINESS_CONFIG.contactPlaceholders.whatsapp;
  const cleanNumber = rawNumber.replace(/\D/g, '');

  let text: string = WHATSAPP_MESSAGES.consultation;
  if (message) {
    if (message in WHATSAPP_MESSAGES) {
      text = WHATSAPP_MESSAGES[message as WhatsAppMessageKey];
    } else {
      text = message;
    }
  }

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
};

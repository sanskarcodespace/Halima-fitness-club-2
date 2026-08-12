/**
 * Halima Fitness Club - Centralized Business Configuration
 * Single Source of Truth for all business, coach, social, and contact information.
 * 
 * IMPORTANT:
 * - Halima Fitness Club is an ONLINE fitness, nutrition, wellness, and lifestyle coaching brand.
 * - It is NOT a traditional gym, equipment facility, or gym membership business.
 * - Phone / WhatsApp numbers must use placeholders until explicitly provided.
 */

export const BUSINESS_CONFIG = {
  // Brand Identity
  businessName: 'Halima Fitness Club',
  hindiName: 'हलीमा फिटनेस क्लब',
  tagline: 'Personalized Online Health, Nutrition & Lifestyle Coaching',
  
  // Coach Information
  coach: {
    name: 'Coach Halima Sadiya',
    title: 'Certified Health & Wellness Coach',
    experience: '6+ Years',
    bioSummary:
      'Dedicated health and wellness coach helping individuals improve their nutrition, fitness and lifestyle through personalized guidance, workout support and regular follow-up.',
    credentials: [
      'Certified Health & Wellness Coach',
      '6+ Years Online Coaching Experience',
      'Personalized Nutrition & Lifestyle Consulting'
    ]
  },

  // Positioning & Scope
  positioning:
    'Online Health & Wellness Coach helping individuals improve their nutrition, fitness and lifestyle through personalized guidance, workout support and regular follow-up.',
  businessType: 'Online Fitness & Wellness Consulting / Coaching',
  scopeNotice: 'Online Coaching & Consulting (No Physical Gym Facility)',

  // Verified Contact & Social Details
  email: 'sadiyahalima2876@gmail.com',
  instagram: {
    handle: '@sadiya_fitcoach',
    url: 'https://www.instagram.com/sadiya_fitcoach/',
    label: 'Follow on Instagram'
  },
  availability: 'Always Open',
  consultationMode: '100% Online Coaching & Virtual Support',

  // Contact Placeholders (Never invent phone/whatsapp numbers)
  contactPlaceholders: {
    whatsapp: '[WHATSAPP NUMBER REQUIRED]',
    phone: '[PHONE NUMBER REQUIRED]',
    address: '[ONLINE CONSULTING ONLY / ADDRESS NOT APPLICABLE]'
  },

  // Legal & Compliance Notes
  disclaimers: {
    coachingDisclaimer:
      'Coaching programs are designed for general wellness, fitness, and lifestyle optimization. They do not constitute medical advice or diagnose health conditions. Always consult a medical physician before starting any intensive fitness regimen.',
    contentDisclaimer:
      'All guidance is customized to individual goals with regular follow-up. Results vary depending on personal adherence, baseline wellness, and effort.'
  }
} as const;

export type BusinessConfig = typeof BUSINESS_CONFIG;

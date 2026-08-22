/**
 * Halima Fitness Club - Site Configuration & SEO Metadata
 */

import { BUSINESS_CONFIG } from './business.config';

export const SITE_CONFIG = {
  name: BUSINESS_CONFIG.businessName,
  hindiName: BUSINESS_CONFIG.hindiName,
  title: `${BUSINESS_CONFIG.businessName} | ${BUSINESS_CONFIG.coach.name} - ${BUSINESS_CONFIG.coach.title}`,
  description:
    'Halima Fitness Club led by Coach Halima Sadiya (6+ Years Experience). Personalized online fitness, nutrition, and lifestyle wellness coaching with regular follow-up.',
  keywords: [
    'Halima Fitness Club',
    'हलीमा फिटनेस क्लब',
    'Coach Halima Sadiya',
    'Online Fitness Coach',
    'Nutrition Consultant',
    'Lifestyle Coaching',
    'Personalized Workout Plan',
    'Health and Wellness Coach'
  ],
  author: BUSINESS_CONFIG.coach.name,
  url: 'https://halimafitness.in',
  ogImage: '/og-image.png',
  locale: 'en_IN',
  themeColor: '#061A14',
  features: {
    enableAnalytics: false, // Ready for future integration
    enableContactForm: true,
    enableDevPlaceholderWarnings: true
  }
} as const;

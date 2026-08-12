/**
 * Halima Fitness Club - Verified Initial Content Store
 * Contains only verified facts and strict placeholders.
 */

import { BUSINESS_CONFIG } from '../config/business.config';
import { PLACEHOLDERS } from './placeholders';
import type { SiteContent } from './types';

export const INITIAL_CONTENT: SiteContent = {
  hero: {
    badgeText: 'Online Health & Wellness Coaching',
    headline: 'Transform Your Health. Transform Your Life.',
    subheadline:
      'Personalized online fitness, nutrition and wellness guidance designed to support healthier habits and a stronger lifestyle.',
    primaryCtaText: 'Book Free Consultation',
    secondaryCtaText: 'Explore Programs',
    tertiaryCtaText: 'WhatsApp Us',
    keyHighlights: [
      { label: '6+ Years', sublabel: 'Coaching Experience' },
      { label: 'Certified', sublabel: 'Health & Wellness Coach' },
      { label: '100% Online', sublabel: 'Personalized Guidance' }
    ]
  },

  about: {
    eyebrow: 'Meet Your Coach',
    coachName: BUSINESS_CONFIG.coach.name,
    coachTitle: BUSINESS_CONFIG.coach.title,
    experienceYears: BUSINESS_CONFIG.coach.experience,
    bioParagraphs: [
      'Welcome to Halima Fitness Club. I am Coach Halima Sadiya, a Certified Health & Wellness Coach with over 6 years of experience guiding individuals toward healthier, more energetic lives.',
      'Unlike short-term restrictive diets or overwhelming gym routines, my coaching centers on sustainable lifestyle habits, balanced daily nutrition, and custom workout support designed to fit your unique schedule and personal goals.',
      'Through regular one-on-one virtual follow-ups and continuous support, we work together to build long-term wellness and healthy habits that last.'
    ],
    pillars: [
      {
        title: 'Personalized Nutrition Guidance',
        description: 'Tailored dietary recommendations and practical meal planning without extreme or unsustainable restrictions.'
      },
      {
        title: 'Workout & Fitness Support',
        description: 'Custom exercise routines and movement plans suited to your current fitness level and home/online setup.'
      },
      {
        title: 'Regular Follow-up & Accountability',
        description: 'Ongoing check-ins and progress reviews to keep you motivated, consistent, and on track.'
      },
      {
        title: 'Lifestyle & Habit Optimization',
        description: 'Guidance on sleep quality, hydration, stress management, and daily routines for holistic wellbeing.'
      }
    ],
    scopeNotice:
      'Note: Halima Fitness Club is a 100% online wellness and lifestyle coaching service. It does not operate a physical gym or gym membership facility.'
  },

  services: [
    {
      id: 'srv-weight-loss',
      anchorId: 'service-weight-loss',
      name: 'Weight Loss Coaching',
      targetAudience: 'Individuals seeking safe, sustainable weight reduction',
      description: 'Personalized caloric and nutritional guidance combined with structured home workouts to foster steady, sustainable fat loss without extreme starvation diets.',
      supportIncludes: ['Custom daily meal structures', 'Low-impact home workout plan', 'Weekly virtual progress reviews'],
      icon: 'lifestyle',
      badge: 'Popular'
    },
    {
      id: 'srv-weight-gain',
      anchorId: 'service-weight-gain',
      name: 'Weight Gain Coaching',
      targetAudience: 'Individuals looking to build healthy body mass',
      description: 'Structured high-nutrient meal plans and progressive strength guidance focused on lean muscle development and healthy caloric surplus management.',
      supportIncludes: ['Nutrient-dense meal blueprints', 'Progressive home strength routines', 'Body composition tracking'],
      icon: 'fitness'
    },
    {
      id: 'srv-nutrition',
      anchorId: 'service-nutrition',
      name: 'Online Nutrition Coaching',
      targetAudience: 'Busy professionals & homemakers needing dietary balance',
      description: 'Comprehensive nutritional coaching focusing on balanced macronutrients, portion control, grocery selection, and mindful eating habits suited to your lifestyle.',
      supportIncludes: ['Personalized macronutrient guidance', 'Family-friendly meal planning', 'Daily nutrition logging review'],
      icon: 'nutrition',
      badge: 'Essential'
    },
    {
      id: 'srv-fitness',
      anchorId: 'service-fitness',
      name: 'Online Fitness Coaching',
      targetAudience: 'Anyone seeking guided, effective home workouts',
      description: 'Custom exercise routines tailored to your baseline fitness level, space, and schedule. Includes video form guidance and low-impact movement modifications.',
      supportIncludes: ['Tailored home workout calendar', 'Movement form check via video', 'Mobility & stretching protocols'],
      icon: 'fitness'
    },
    {
      id: 'srv-diet-guidance',
      anchorId: 'service-diet-guidance',
      name: 'Personalized Diet Guidance',
      targetAudience: 'Individuals with specific dietary preferences',
      description: 'Custom meal recommendations designed around your preferred cuisine, daily schedule, and metabolic goals without restrictive culinary extremes.',
      supportIncludes: ['Tailored meal options & recipes', 'Hydration & digestion optimization', 'Schedule-aligned eating timing'],
      icon: 'nutrition'
    },
    {
      id: 'srv-21-day-challenge',
      anchorId: 'service-21-day-challenge',
      name: '21 Days Weight Loss Challenge',
      targetAudience: 'Anyone needing a structured kickstart sprint',
      description: 'A focused 21-day structured kickstart program designed to build strong morning routines, daily hydration habits, consistent movement, and clean eating momentum.',
      supportIncludes: ['21-day structured habit checklist', 'Daily accountability prompts', 'Kickstart meal & workout blueprint'],
      icon: 'sparkles',
      badge: 'Featured'
    },
    {
      id: 'srv-lifestyle-wellness',
      anchorId: 'service-lifestyle-wellness',
      name: 'Lifestyle & Wellness Coaching',
      targetAudience: 'Those managing stress, low energy, or irregular sleep',
      description: 'Holistic lifestyle coaching addressing sleep quality, daily stress reduction, circadian hydration routines, and mindful vitality practices for balanced living.',
      supportIncludes: ['Sleep hygiene protocol', 'Stress & energy management tools', 'Daily wellness routine design'],
      icon: 'lifestyle'
    },
    {
      id: 'srv-online-classes',
      anchorId: 'service-online-classes',
      name: 'Online Diet & Fitness Classes',
      targetAudience: 'Group learners wanting interactive guidance',
      description: 'Live interactive virtual group sessions and workshops covering mindful nutrition concepts, meal preparation strategies, guided stretching, and group workouts.',
      supportIncludes: ['Live virtual group sessions', 'Interactive Q&A with Coach Halima', 'Session summaries & takeaways'],
      icon: 'user'
    },
    {
      id: 'srv-weight-mgmt',
      anchorId: 'service-weight-mgmt',
      name: 'Weight Management Program',
      targetAudience: 'Clients seeking long-term weight maintenance',
      description: 'Long-term nutritional balance and lifestyle stabilization coaching designed to lock in healthy habits and prevent weight rebound over years.',
      supportIncludes: ['Sustainable maintenance macros', 'Long-term lifestyle habits checklist', 'Bi-weekly virtual follow-up'],
      icon: 'award'
    },
    {
      id: 'srv-personal-health',
      anchorId: 'service-personal-health',
      name: 'Personal Health Coaching',
      targetAudience: 'Individuals wanting comprehensive 1-on-1 support',
      description: 'All-inclusive personalized virtual wellness coaching combining custom nutrition, progressive exercise support, daily habit tracking, and direct 1-on-1 check-ins.',
      supportIncludes: ['Dedicated 1-on-1 virtual sessions', 'Complete nutrition & fitness roadmap', 'Priority message support & follow-up'],
      icon: 'sparkles',
      badge: 'Comprehensive'
    }
  ],

  programs: [
    {
      id: 'program-personalized-wellness',
      title: 'Holistic Lifestyle & Wellness Coaching',
      tagline: 'Comprehensive Nutrition & Habit Transformation',
      description:
        'A fully tailored online coaching program focusing on daily nutrition, lifestyle restructuring, sleep, and sustained wellness habits.',
      features: [
        'Personalized daily nutrition & meal structure guidance',
        'Habit tracking and lifestyle adjustments',
        'Regular progress check-ins and reviews',
        'Direct virtual messaging support'
      ],
      suitableFor: 'Individuals looking to reset their lifestyle, improve daily energy, and build sustainable nutrition habits.',
      pricing: PLACEHOLDERS.PRICE,
      badge: 'Signature Program'
    },
    {
      id: 'program-fitness-support',
      title: 'Guided Fitness & Workout Support',
      tagline: 'Customized Movement & Exercise Plans',
      description:
        'Structured workout routines customized for your fitness baseline, designed to build strength, mobility, and cardiovascular health at home.',
      features: [
        'Customized home/online exercise plans',
        'Form guidance and movement adjustments',
        'Weekly workout schedule structuring',
        'Routine progress evaluations'
      ],
      suitableFor: 'Individuals needing structured workout guidance, motivation, and accountability.',
      pricing: PLACEHOLDERS.PRICE,
      badge: 'Active Guidance'
    },
    {
      id: 'program-nutrition-consulting',
      title: 'Focused Nutrition Consultation',
      tagline: 'Dietary Clarity & Mindful Eating Guidance',
      description:
        'Targeted guidance to help you understand balanced eating, portion balance, mindful habits, and daily nutritional balance.',
      features: [
        'Detailed nutrition & dietary assessment',
        'Personalized meal structure suggestions',
        'Hydration & micronutrient awareness guidance',
        'Follow-up review sessions'
      ],
      suitableFor: 'Anyone wanting clarity on balanced nutrition and healthy food relationships.',
      pricing: PLACEHOLDERS.PRICE,
      badge: 'Nutrition Focus'
    }
  ],

  methodology: [
    {
      stepNumber: '01',
      title: 'Initial Assessment & Goal Discovery',
      description:
        'We begin by analyzing your current daily routine, dietary patterns, activity level, and specific wellness aspirations.',
      keyDeliverables: ['Lifestyle & nutrition intake analysis', 'Goal alignment discussion', 'Baseline evaluation']
    },
    {
      stepNumber: '02',
      title: 'Personalized Roadmap Creation',
      description:
        'Coach Halima designs a customized coaching plan focusing on manageable nutritional changes, exercise routines, and habit targets.',
      keyDeliverables: ['Tailored nutrition guidance', 'Custom workout plan', 'Weekly milestone roadmap']
    },
    {
      stepNumber: '03',
      title: 'Active Implementation & Support',
      description:
        'You start applying the personalized guidance with direct ongoing support and encouragement from Coach Halima.',
      keyDeliverables: ['Daily/weekly habit adherence', 'Form & meal guidance', 'Direct question resolution']
    },
    {
      stepNumber: '04',
      title: 'Regular Follow-Up & Optimization',
      description:
        'Consistent check-ins allow us to review your progress, refine your routines, and maintain steady momentum.',
      keyDeliverables: ['Scheduled check-in reviews', 'Plan adjustments as needed', 'Long-term sustainability coaching']
    }
  ],

  faq: [
    {
      id: 'faq-1',
      category: 'General',
      question: 'Is Halima Fitness Club a physical gym or fitness center?',
      answer:
        'No. Halima Fitness Club is an online health, nutrition, and wellness coaching business led by Coach Halima Sadiya. All coaching, consulting, workout support, and check-ins are conducted 100% online.'
    },
    {
      id: 'faq-2',
      category: 'Coaching',
      question: 'How do the online coaching and follow-ups work?',
      answer:
        'After an initial assessment of your habits and goals, Coach Halima creates your personalized nutrition and fitness roadmap. Follow-ups and progress reviews occur regularly online to ensure accountability and answer any questions.'
    },
    {
      id: 'faq-3',
      category: 'Nutrition',
      question: 'Do I need to follow extreme or restrictive diets?',
      answer:
        'No. Coach Halima focuses on sustainable, balanced nutrition and mindful eating habits that you can maintain long-term, without unrealistic crash diets.'
    },
    {
      id: 'faq-4',
      category: 'Getting Started',
      question: 'How can I connect with Coach Halima to get started?',
      answer:
        'You can reach out directly via email at sadiyahalima2876@gmail.com or send a direct message on Instagram @sadiya_fitcoach to discuss your coaching requirements.'
    }
  ],

  contact: {
    eyebrow: 'Get In Touch',
    heading: 'Start Your Personalized Wellness Journey',
    subheading:
      'Reach out directly to Coach Halima Sadiya to discuss your health goals, routine, and online coaching options.',
    email: BUSINESS_CONFIG.email,
    instagramHandle: BUSINESS_CONFIG.instagram.handle,
    instagramUrl: BUSINESS_CONFIG.instagram.url,
    whatsappPlaceholder: BUSINESS_CONFIG.contactPlaceholders.whatsapp,
    phonePlaceholder: BUSINESS_CONFIG.contactPlaceholders.phone,
    availability: BUSINESS_CONFIG.availability,
    formFields: {
      nameLabel: 'Your Full Name',
      emailLabel: 'Email Address',
      goalLabel: 'Primary Wellness Goal',
      messageLabel: 'Tell us about your current routine & goals',
      submitLabel: 'Send Inquiry'
    }
  }
};

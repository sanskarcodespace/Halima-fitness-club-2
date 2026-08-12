/**
 * Halima Fitness Club - Content Type Definitions
 * Robust TypeScript types for all website sections.
 */

export interface HeroSectionContent {
  badgeText: string;
  headline: string;
  subheadline: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  keyHighlights: {
    label: string;
    sublabel: string;
  }[];
}

export interface AboutSectionContent {
  eyebrow: string;
  coachName: string;
  coachTitle: string;
  experienceYears: string;
  bioParagraphs: string[];
  pillars: {
    title: string;
    description: string;
  }[];
  scopeNotice: string;
}

export interface ProgramItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  suitableFor: string;
  pricing: string; // Follows [PRICE TO BE PROVIDED] until provided
  badge?: string;
}

export interface MethodologyStep {
  stepNumber: string;
  title: string;
  description: string;
  keyDeliverables: string[];
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Coaching' | 'Nutrition' | 'Getting Started';
}

export interface TransformationItem {
  id: string;
  clientStoryNotice: string; // Must follow PLACEHOLDERS.TRANSFORMATION if not provided
  focusArea: string;
  guidanceProvided: string;
}

export interface ContactSectionContent {
  eyebrow: string;
  heading: string;
  subheading: string;
  email: string;
  instagramHandle: string;
  instagramUrl: string;
  whatsappPlaceholder: string;
  phonePlaceholder: string;
  availability: string;
  formFields: {
    nameLabel: string;
    emailLabel: string;
    goalLabel: string;
    messageLabel: string;
    submitLabel: string;
  };
}

export interface SiteContent {
  hero: HeroSectionContent;
  about: AboutSectionContent;
  programs: ProgramItem[];
  methodology: MethodologyStep[];
  faq: FaqItem[];
  contact: ContactSectionContent;
}

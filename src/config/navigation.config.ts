/**
 * Halima Fitness Club - Centralized Navigation Configuration
 * Defines primary navigation, section IDs, CTA targets, and footer links.
 */

export interface NavItem {
  id: string;
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface FooterLinkGroup {
  title: string;
  links: {
    label: string;
    href: string;
    isExternal?: boolean;
    isPlaceholder?: boolean;
  }[];
}

export const SECTION_IDS = {
  HOME: 'home',
  ABOUT: 'about',
  PROGRAMS: 'programs',
  CLASSES: 'classes',
  SUCCESS_STORIES: 'success-stories',
  TESTIMONIALS: 'testimonials',
  FAQ: 'faq',
  CONTACT: 'contact'
} as const;

export const PRIMARY_NAV_ITEMS: NavItem[] = [
  { id: 'nav-home', label: 'Home', href: '/' },
  { id: 'nav-about', label: 'About', href: '/about' },
  { id: 'nav-programs', label: 'Programs', href: '/programs' },
  { id: 'nav-results', label: 'Results', href: '/results' },
  { id: 'nav-consultation', label: 'Consultation', href: '/consultation' }
];

export const CTA_CONFIG = {
  primary: {
    label: 'Book Free Consultation',
    href: '/consultation',
    ariaLabel: 'Book a free online consultation with Coach Halima'
  },
  secondary: {
    label: 'Explore Programs',
    href: '/programs',
    ariaLabel: 'View online wellness and nutrition programs'
  },
  instagramCta: {
    label: 'Connect on Instagram',
    href: 'https://www.instagram.com/sadiya_fitcoach/',
    ariaLabel: 'Visit Coach Halima Sadiya on Instagram'
  }
} as const;

export const FOOTER_NAV_GROUPS: FooterLinkGroup[] = [
  {
    title: 'Explore',
    links: [
      { label: 'About Coach Halima', href: '/about' },
      { label: 'Online Programs', href: '/programs' },
      { label: 'Live Online Classes', href: '/programs' },
      { label: 'Success Stories', href: '/results' },
      { label: 'Client Testimonials', href: '/results' },
      { label: 'FAQ', href: '/about' }
    ]
  },
  {
    title: 'Coaching Focus',
    links: [
      { label: 'Weight Loss Coaching', href: '/weight-loss-coaching' },
      { label: 'Weight Gain Coaching', href: '/weight-gain-coaching' },
      { label: 'Online Nutrition Coaching', href: '/online-nutrition-coaching' },
      { label: 'Personalized Diet Guidance', href: '/personalized-diet-guidance' },
      { label: 'Online Fitness Coaching', href: '/online-fitness-coaching' },
      { label: '21 Days Weight Loss Challenge', href: '/21-days-weight-loss-challenge' },
      { label: 'Lifestyle & Wellness Coaching', href: '/lifestyle-wellness-coaching' },
      { label: 'Online Diet & Fitness Classes', href: '/online-diet-fitness-classes' },
      { label: 'Weight Management Program', href: '/weight-management-program' },
      { label: 'Personal Health Coaching', href: '/personal-health-coaching' }
    ]
  },
  {
    title: 'Connect & Inquire',
    links: [
      { label: 'Instagram (@sadiya_fitcoach)', href: 'https://www.instagram.com/sadiya_fitcoach/', isExternal: true },
      { label: 'Email: sadiyahalima2876@gmail.com', href: 'mailto:sadiyahalima2876@gmail.com', isExternal: true },
      { label: 'WhatsApp: +91 95700 30631', href: 'https://wa.me/919570030631', isExternal: true }
    ]
  },
  {
    title: 'Legal & Policies',
    links: [
      { label: 'Privacy Policy', href: '#privacy', isPlaceholder: true },
      { label: 'Terms & Conditions', href: '#terms', isPlaceholder: true },
      { label: 'Health & Wellness Disclaimer', href: '#disclaimer' }
    ]
  }
];

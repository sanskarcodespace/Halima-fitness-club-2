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
      { label: 'Personalized Nutrition Guidance', href: '/programs' },
      { label: 'Online Workout Support', href: '/programs' },
      { label: 'Lifestyle & Habit Coaching', href: '/programs' },
      { label: 'Regular Accountability & Follow-up', href: '/programs' }
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

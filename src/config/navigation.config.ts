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
  { id: 'nav-home', label: 'Home', href: `#${SECTION_IDS.HOME}` },
  { id: 'nav-about', label: 'About', href: `#${SECTION_IDS.ABOUT}` },
  { id: 'nav-programs', label: 'Programs', href: `#${SECTION_IDS.PROGRAMS}` },
  { id: 'nav-classes', label: 'Online Classes', href: `#${SECTION_IDS.CLASSES}` },
  { id: 'nav-stories', label: 'Success Stories', href: `#${SECTION_IDS.SUCCESS_STORIES}` },
  { id: 'nav-testimonials', label: 'Testimonials', href: `#${SECTION_IDS.TESTIMONIALS}` },
  { id: 'nav-faq', label: 'FAQ', href: `#${SECTION_IDS.FAQ}` },
  { id: 'nav-contact', label: 'Contact', href: `#${SECTION_IDS.CONTACT}` }
];

export const CTA_CONFIG = {
  primary: {
    label: 'Book Free Consultation',
    href: `#${SECTION_IDS.CONTACT}`,
    ariaLabel: 'Book a free online consultation with Coach Halima'
  },
  secondary: {
    label: 'Explore Programs',
    href: `#${SECTION_IDS.PROGRAMS}`,
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
      { label: 'About Coach Halima', href: `#${SECTION_IDS.ABOUT}` },
      { label: 'Online Programs', href: `#${SECTION_IDS.PROGRAMS}` },
      { label: 'Online Classes', href: `#${SECTION_IDS.CLASSES}` },
      { label: 'Success Stories', href: `#${SECTION_IDS.SUCCESS_STORIES}` },
      { label: 'Client Testimonials', href: `#${SECTION_IDS.TESTIMONIALS}` },
      { label: 'FAQ', href: `#${SECTION_IDS.FAQ}` }
    ]
  },
  {
    title: 'Coaching Focus',
    links: [
      { label: 'Personalized Nutrition Guidance', href: `#${SECTION_IDS.PROGRAMS}` },
      { label: 'Online Workout Support', href: `#${SECTION_IDS.PROGRAMS}` },
      { label: 'Lifestyle & Habit Coaching', href: `#${SECTION_IDS.PROGRAMS}` },
      { label: 'Regular Accountability & Follow-up', href: `#${SECTION_IDS.PROGRAMS}` }
    ]
  },
  {
    title: 'Connect & Inquire',
    links: [
      { label: 'Instagram (@sadiya_fitcoach)', href: 'https://www.instagram.com/sadiya_fitcoach/', isExternal: true },
      { label: 'Email: sadiyahalima2876@gmail.com', href: 'mailto:sadiyahalima2876@gmail.com', isExternal: true },
      { label: 'WhatsApp: [WHATSAPP NUMBER REQUIRED]', href: '#contact', isPlaceholder: true }
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

/**
 * Halima Fitness Club - Centralized Placeholders & Content Safety System
 * Ensures all missing or unprovided items conform to strict data-integrity rules.
 */

export const PLACEHOLDERS = {
  WHATSAPP: '[WHATSAPP NUMBER REQUIRED]',
  PHONE: '[PHONE NUMBER REQUIRED]',
  PRICE: '[PRICE TO BE PROVIDED]',
  CONTENT: '[CONTENT REQUIRED]',
  TESTIMONIAL: '[VERIFIED CLIENT TESTIMONIAL REQUIRED]',
  TRANSFORMATION: '[VERIFIED TRANSFORMATION DATA REQUIRED]',
  CERTIFICATION: '[CERTIFICATION VERIFICATION REQUIRED]',
  ADDRESS: '[ONLINE COACHING ONLY / ADDRESS NOT APPLICABLE]'
} as const;

export type PlaceholderKey = keyof typeof PLACEHOLDERS;

/**
 * Checks whether a given string value contains an unresolved placeholder.
 */
export function isPlaceholder(value?: string | null): boolean {
  if (!value) return true;
  const trimmed = value.trim();
  return (
    trimmed.startsWith('[') &&
    trimmed.endsWith(']') &&
    (trimmed.includes('REQUIRED') || trimmed.includes('TO BE PROVIDED') || trimmed.includes('NOT APPLICABLE'))
  );
}

/**
 * Returns a clean display value or an explicit placeholder badge text.
 */
export function getSafeDisplayValue(
  value: string | undefined | null,
  fallback = PLACEHOLDERS.CONTENT
): { value: string; isPlaceholder: boolean } {
  if (!value || isPlaceholder(value)) {
    return {
      value: value || fallback,
      isPlaceholder: true
    };
  }
  return {
    value,
    isPlaceholder: false
  };
}

/**
 * Halima Fitness Club - Formatting & Safe Display Utilities
 */

import { isPlaceholder } from '../content/placeholders';

/**
 * Strips bracket wrappers if a clean label is needed, or flags it as placeholder.
 */
export function formatPlaceholderLabel(placeholder: string): string {
  if (isPlaceholder(placeholder)) {
    return placeholder.replace(/^\[|\]$/g, '').trim();
  }
  return placeholder;
}

/**
 * Truncates text cleanly at word boundaries.
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

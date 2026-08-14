import React from 'react';
import { useInView } from '../../../hooks/useInView';

interface RevealWrapperProps {
  /** Stagger delay tier: 0 = no delay, 1–5 = 80ms increments */
  delay?: 0 | 1 | 2 | 3 | 4 | 5;
  /** Additional CSS classes to apply to the wrapper */
  className?: string;
  /**
   * HTML element to render as.
   * Supported: 'div' | 'section' | 'article' | 'li' | 'aside'
   * Default: 'div'
   */
  as?: 'div' | 'section' | 'article' | 'li' | 'aside';
  /** IntersectionObserver threshold. Default: 0.12 */
  threshold?: number;
  /** IntersectionObserver rootMargin. Default: '-60px 0px' */
  rootMargin?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  /** Forwarded ID for anchor targeting */
  id?: string;
}

/**
 * RevealWrapper — attaches scroll-triggered reveal animation to any block.
 *
 * Applies `.reveal` base class and `.is-visible` when the element enters the viewport.
 * Uses `.reveal-delay-{n}` for staggered grid reveals.
 *
 * All motion respects `prefers-reduced-motion` (handled inside useInView).
 */
export const RevealWrapper: React.FC<RevealWrapperProps> = ({
  delay = 0,
  className = '',
  as = 'div',
  threshold,
  rootMargin,
  children,
  style,
  id,
}) => {
  const { ref, inView } = useInView({ threshold, rootMargin });

  const delayClass = delay > 0 ? ` reveal-delay-${delay}` : '';
  const visibleClass = inView ? ' is-visible' : '';
  const combinedClass = `reveal${delayClass}${visibleClass}${className ? ` ${className}` : ''}`;

  const props = { ref, id, className: combinedClass, style };

  switch (as) {
    case 'section': return <section {...props}>{children}</section>;
    case 'article': return <article {...props}>{children}</article>;
    case 'li': return <li {...props}>{children}</li>;
    case 'aside': return <aside {...props}>{children}</aside>;
    default: return <div {...props}>{children}</div>;
  }
};

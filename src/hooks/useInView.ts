import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  /** Fraction of element visible before triggering (0–1). Default: 0.12 */
  threshold?: number;
  /** Root margin offset. Default: '-60px 0px' */
  rootMargin?: string;
  /** If true, re-triggers every time element enters view. Default: false (one-shot) */
  repeat?: boolean;
}

/**
 * Lightweight IntersectionObserver hook for scroll-triggered reveal animations.
 *
 * Usage:
 *   const { ref, inView } = useInView();
 *   <div ref={ref} className={`reveal${inView ? ' is-visible' : ''}`}>...</div>
 */
export function useInView(
  options: UseInViewOptions = {}
): { ref: React.RefObject<HTMLElement | null>; inView: boolean } {
  const { threshold = 0.12, rootMargin = '-60px 0px', repeat = false } = options;
  // Use HTMLElement as the base so the ref is compatible with all HTML element types
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If reduced motion is preferred, reveal immediately without animation
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (!repeat) {
              observer.unobserve(el);
            }
          } else if (repeat) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, repeat]);

  return { ref, inView };
}

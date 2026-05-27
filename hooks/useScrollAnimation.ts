'use client';

import { useEffect, useRef } from 'react';

/**
 * Attach to any container. All children with class `animateInit`
 * will get `animateVisible` added when they enter the viewport.
 */
export function useScrollAnimation() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.animateInit');
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animateVisible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

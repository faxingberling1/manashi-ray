'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './ActionBar.module.css';

export default function ActionBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Slight delay to allow the page to render first before animating in
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (isDismissed) return null;

  return (
    <div className={`${styles.actionBar} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.inner}>
        <span className={styles.highlight}>Upcoming Event:</span>
        <span className={styles.text}>
          &ldquo;Who Becomes Boundless?&rdquo; Book Talk at Michigan State University &middot; Sept 17, 2026
        </span>
        <Link href="/book?tab=talks" className={styles.cta}>
          View Details &rarr;
        </Link>
        <button 
          className={styles.closeBtn} 
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => setIsDismissed(true), 400);
          }}
          aria-label="Dismiss banner"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

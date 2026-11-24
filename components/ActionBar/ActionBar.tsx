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
        <div className={styles.lines}>
          <div className={styles.linePrimary}>
            <span className={styles.highlight}>Announcement:</span>{' '}
            Book Talk at Flame University, Lavale (close to Pune) — Jan 20, 2027 (2:30 PM – 4:00 PM)
          </div>
          <div className={styles.lineSecondary}>
            Also scheduled (Jan–Feb, 2027): Presidency University, Loreto College &amp; St Xavier&apos;s College, Kolkata, India
          </div>
        </div>
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

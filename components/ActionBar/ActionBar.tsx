'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from './ActionBar.module.css';

const ANNOUNCEMENTS = [
  'Book Talk at Flame University, Lavale (close to Pune) — Jan 20, 2027 (2:30 PM – 4:00 PM)',
  "Upcoming Book Talks (Jan–Feb, 2027): Presidency University, Loreto College & St Xavier's College, Kolkata, India",
];

export default function ActionBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Slight delay to allow the page to render first before animating in
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isDismissed || isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isDismissed, isPaused]);

  if (isDismissed) return null;

  return (
    <div
      className={`${styles.actionBar} ${isVisible ? styles.visible : ''}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={styles.inner}>
        <span className={styles.highlight}>Announcement:</span>
        <span key={activeIndex} className={styles.text} aria-live="polite">
          {ANNOUNCEMENTS[activeIndex]}
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

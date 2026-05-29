'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './BookQuotes.module.css';

const QUOTES = [
  {
    text: "Every map I was handed told someone else's story. I had to learn to draw my own — not with certainty, but with courage.",
    page: 'Chapter 1 — Placeholder',
  },
  {
    text: "Home is not a place you return to. It is a question you spend a lifetime answering.",
    page: 'Chapter 3 — Placeholder',
  },
  {
    text: "The academy gave me language for things I had always felt. It also taught me that language, alone, is never enough.",
    page: 'Chapter 5 — Placeholder',
  },
  {
    text: "I did not cross borders. The borders crossed me — rearranging everything I thought I knew about belonging.",
    page: 'Chapter 7 — Placeholder',
  },
  {
    text: "To study inequality is to hold a mirror up to the world. To write about it honestly is to hold one up to yourself.",
    page: 'Chapter 9 — Placeholder',
  },
  {
    text: "There is a particular kind of freedom that comes not from having all the answers, but from learning to live well inside the questions.",
    page: 'Chapter 12 — Placeholder',
  },
];

export default function BookQuotes() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const goTo = useCallback(
    (index: number, dir: 'next' | 'prev' = 'next') => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setActive(index);
        setAnimating(false);
      }, 400);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((active + 1) % QUOTES.length, 'next');
  }, [active, goTo]);

  const prev = useCallback(() => {
    goTo((active - 1 + QUOTES.length) % QUOTES.length, 'prev');
  }, [active, goTo]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className={styles.section} id="book-quotes">
      {/* Decorative background */}
      <div className={styles.bg} aria-hidden="true">
        <div className={styles.bgCircle1} />
        <div className={styles.bgCircle2} />
        <div className={styles.bgLines} />
      </div>

      <div className="container">
        {/* Header */}
        <div className={`sectionHeader animateInit`}>
          <span className="sectionLabel" style={{ color: 'var(--clr-gold-light)' }}>
            From the Pages
          </span>
          <h2 className="sectionTitle" style={{ color: '#fff' }}>
            Words from the Book
          </h2>
          <div className="sectionRule" style={{ background: 'var(--clr-gold)' }} />
        </div>

        {/* Carousel */}
        <div className={styles.carousel}>
          {/* Large decorative quote mark */}
          <div className={styles.openQuote} aria-hidden="true">&ldquo;</div>

          {/* Quote text */}
          <div
            className={`${styles.quoteBody} ${animating ? (direction === 'next' ? styles.exitLeft : styles.exitRight) : styles.enter}`}
          >
            <p className={styles.quoteText}>{QUOTES[active].text}</p>
            <p className={styles.quotePage}>{QUOTES[active].page}</p>
          </div>

          {/* Navigation */}
          <div className={styles.nav}>
            <button
              className={styles.navBtn}
              onClick={prev}
              aria-label="Previous quote"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Dots */}
            <div className={styles.dots}>
              {QUOTES.map((_, i) => (
                <button
                  key={i}
                  className={`${styles.dot} ${i === active ? styles.dotActive : ''}`}
                  onClick={() => goTo(i, i > active ? 'next' : 'prev')}
                  aria-label={`Go to quote ${i + 1}`}
                />
              ))}
            </div>

            <button
              className={styles.navBtn}
              onClick={next}
              aria-label="Next quote"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Progress bar */}
          <div className={styles.progressTrack}>
            <div
              className={styles.progressBar}
              style={{ width: `${((active + 1) / QUOTES.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Quote counter */}
        <p className={styles.counter}>
          <span className={styles.counterCurrent}>{String(active + 1).padStart(2, '0')}</span>
          <span className={styles.counterSep}>/</span>
          <span className={styles.counterTotal}>{String(QUOTES.length).padStart(2, '0')}</span>
        </p>
      </div>
    </section>
  );
}

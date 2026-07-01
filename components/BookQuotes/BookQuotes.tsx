'use client';

import { useState, useEffect, useCallback } from 'react';
import styles from './BookQuotes.module.css';

const QUOTES = [
  {
    text: "I have never been able to work in a typical salaried environment. I am just not cut out for that, not cut out for the strictures of it . . . not cut out for lack of free thought . . . [and] something about India always gets the best out of me.",
    page: 'Introduction (page 4)',
  },
  {
    text: "I met a lot of resourceful and creative people through TiE. To use a sports analogy, within TiE, I felt a lust to win—we had to fight for success! To many of us TiE was bigger than an Indian networking organization . . . we were buying into this entrepreneurial energy collectively, it is difficult to quantify, it is intangible, but it definitely had a positive effect.",
    page: 'Chapter 2 (page 70)',
  },
  {
    text: "I was moved from Hong Kong to New York to take care of North American operations, which was in serious financial difficulties … I had to recover the losses and turn it around… I was chosen to deal with the failure, which later became [an] increasingly central part of our business strategy.",
    page: 'Chapter 2 (page 83)',
  },
  {
    text: "We both had decided to return to India after being in the US for six years on H-1B visa, it got hastened with other factors: 9/11, visa issues, growth opportunities and our desire to be close to our aging parents. There were so many opportunities for my kind of offshore business in India.",
    page: 'Chapter 3 (page 119)',
  },
  {
    text: "In my sector in India, women are constantly reminded that they are imperfect in a million ways ... unlike my non-Indian or European colleagues. No matter what I do [it] is not enough. It is not a zero-sum game. In the past if I asked for advice or counsel, I was repeatedly put on the wrong path… In my line of work, men don’t know how to handle strong capable professional women.",
    page: 'Chapter 4 (page 174)',
  },
  {
    text: "One thing I have learnt is that we must defy fate, we will get advantages and challenges in our lives, and we must get both to work for us. Working for startups took up a lot of my time…luckily at that time my husband was still trying to get started so he had some free time to be with our kid. My husband never once made me feel guilty for being less of a parent, but it called for constant prioritization of my responsibilities as a mother, wife, and co-founder of our business.",
    page: 'Chapter 4 (page 170)',
  },
  {
    text: "I was eager to get out of the comfort zone… not be known as “Indian ethnic business” guy, which I respect, but I find it to be limiting. Doing business is in my blood. I am a “Gujrati Bania”, I can hustle anything!",
    page: 'Additional Interview',
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

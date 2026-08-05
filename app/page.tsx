'use client';

import Hero from '@/components/Hero/Hero';
import BookQuotes from '@/components/BookQuotes/BookQuotes';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  useScrollAnimation();

  return (
    <>
      <Hero />

      <BookQuotes />

      {/* Action Buttons */}
      <section className={`section ${styles.intro}`} style={{ paddingTop: '3rem', borderTop: 'none' }}>
        <div className="container">
          <div className={styles.introInner}>
            <div className={`animateInit delay200 ${styles.introActions}`}>
              <Link href="/about-me" className="btn btnGhost">About Me</Link>
              <Link href="/publications" className="btn btnPrimary">Research &amp; Writing</Link>
              <Link href="/book" className="btn btnGold">The Book</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

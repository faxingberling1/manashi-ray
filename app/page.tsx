'use client';

import Hero from '@/components/Hero/Hero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  useScrollAnimation();

  return (
    <>
      <Hero />

      {/* Real bio intro */}
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <div className={styles.introInner}>
            <p className={`animateInit ${styles.introText}`}>
              I have always been curious about how the mechanisms of social processes unfold over time: why people behave in particular ways, their daily patterns of interaction, how they engage in collective behaviors, how institutional practices shape culture, why individuals stand out, defying all odds. Attempting to answer these questions has defined my career&apos;s trajectory, from development work in India to postgraduate education in the Netherlands and United States.
            </p>
            <p className={`animateInit delay100 ${styles.introText}`}>
              I am a graduate of Michigan State University and an active participant in international scholarly networks who has published in leading sociological journals and edited volumes. At the International Sociological Association, I&apos;ve served as Treasurer of RC 32 (Women, Gender and Society) and currently as Secretary and Treasurer of RC 31 (Sociology of Migration). My work has received numerous awards.
              <br/><br/>
              <Link href="/about" className={styles.readMoreBtn}>Continue Reading &rarr;</Link>
            </p>
            <div className={`animateInit delay200 ${styles.introActions}`}>
              <Link href="/about" className="btn btnGhost">About Me</Link>
              <Link href="/publications" className="btn btnPrimary">Research &amp; Writing</Link>
              <Link href="/book" className="btn btnGold">The Book</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

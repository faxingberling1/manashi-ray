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
      <section className={`section ${styles.intro}`}>
        <div className="container">
          <div className={styles.introInner}>
            <p className={`animateInit ${styles.introText}`}>
              Dr. Manashi Ray is a Professor of Sociology at West Virginia State University and a scholar of migration, identity, and social inequality. Her forthcoming memoir, <em>Charting My Own Course</em>, brings together a lifetime of research and personal narrative.
            </p>
            <div className={`animateInit delay200 ${styles.introActions}`}>
              <Link href="/about" className="btn btnGhost">Read Biography</Link>
              <Link href="/book" className="btn btnPrimary">Discover the Book</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

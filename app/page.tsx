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
              Dr. Manashi Ray is Professor of Sociology at West Virginia State University. Her research lies at the intersection of <em>international migration, transnationalism,</em> and <em>network analysis</em>, using Bourdieu&apos;s theory of capital, transnational spaces, and life course perspectives to understand migratory processes brought on by globalization and technological innovation.
            </p>
            <p className={`animateInit delay100 ${styles.introText}`}>
              She is currently completing her book manuscript, <em>Becoming Boundless: The Story of Transnational Indian Entrepreneurs</em>, and serves as Treasurer for RC 32 (Women, Gender and Society) of the International Sociological Association.
            </p>
            <div className={`animateInit delay200 ${styles.introActions}`}>
              <Link href="/about" className="btn btnGhost">Full Biography</Link>
              <Link href="/publications" className="btn btnPrimary">Research &amp; Writing</Link>
              <Link href="/book" className="btn btnGold">The Book</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

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
              Manashi Ray is Professor of Sociology at West Virginia State University. As an ethnographer and sociologist, she studies migration-related developmental concerns, particularly the global reach of migrants&apos; practices and actions. Her work asks why people migrate, how gender impacts migratory patterns and settlement, and how migrants experience &apos;transience&apos; in transnational space.
            </p>
            <p className={`animateInit delay100 ${styles.introText}`}>
              Her wide-ranging research includes transnational entrepreneurship among Indian migrants, network formation and analysis, women&apos;s entrepreneurship, and refugee movements from East Asia to the US.
            </p>
            <p className={`animateInit delay200 ${styles.introText}`}>
              Her monograph <em>Becoming Boundless: Indian Transnational Entrepreneurs in the Global Economy</em> was published by Stanford University Press in 2026. Her current research explores climate-related mobility and (im)mobility and how green architecture affects mobility decisions.
            </p>
            <div className={`animateInit delay300 ${styles.introActions}`}>
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

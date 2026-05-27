'use client';

import Hero from '@/components/Hero/Hero';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import Link from 'next/link';

export default function Home() {
  useScrollAnimation();

  return (
    <>
      <Hero />
      <section className="section container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
        <p className="animateInit" style={{ fontSize: '1.2rem', color: 'var(--clr-text-mid)', lineHeight: 1.8, marginBottom: '2rem' }}>
          Manashi Ray is a distinguished author, researcher, and public intellectual whose work bridges the worlds of academia and lived experience. Explore her forthcoming memoir, <em>Charting My Own Course</em>.
        </p>
        <div className="animateInit delay100">
          <Link href="/book" className="btn btnPrimary">Discover the Book</Link>
        </div>
      </section>
    </>
  );
}

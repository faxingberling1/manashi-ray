'use client';

import Nav from '@/components/Nav/Nav';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';
import Book from '@/components/Book/Book';
import Achievements from '@/components/Achievements/Achievements';
import Speaking from '@/components/Speaking/Speaking';
import Contact from '@/components/Contact/Contact';
import Footer from '@/components/Footer/Footer';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function Home() {
  useScrollAnimation();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Book />
        <Achievements />
        <Speaking />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

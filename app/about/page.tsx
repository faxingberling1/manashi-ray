'use client';

import About from '@/components/About/About';
import Teaching from '@/components/Teaching/Teaching';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AboutPage() {
  useScrollAnimation();

  return (
    <div style={{ paddingTop: '80px' }}>
      <About />
      <Teaching />
    </div>
  );
}

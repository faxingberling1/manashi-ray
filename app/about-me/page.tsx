'use client';

import About from '@/components/About/About';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AboutPage() {
  useScrollAnimation();

  return (
    <div style={{ paddingTop: '80px' }}>
      <About />
    </div>
  );
}

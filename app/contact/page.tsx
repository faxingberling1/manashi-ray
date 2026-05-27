'use client';

import Contact from '@/components/Contact/Contact';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function ContactPage() {
  useScrollAnimation();

  return (
    <div style={{ paddingTop: '80px' }}>
      <Contact />
    </div>
  );
}

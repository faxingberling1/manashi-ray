'use client';

import Speaking from '@/components/Speaking/Speaking';
import Achievements from '@/components/Achievements/Achievements';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function SpeakingPage() {
  useScrollAnimation();

  return (
    <div style={{ paddingTop: '80px' }}>
      <Speaking />
      <Achievements />
    </div>
  );
}

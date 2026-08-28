'use client';

import Achievements from '@/components/Achievements/Achievements';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function AchievementsPage() {
  useScrollAnimation();

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--clr-ivory)' }}>
      <Achievements />
    </div>
  );
}

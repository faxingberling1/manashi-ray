'use client';

import MyOtherSelf from '@/components/MyOtherSelf/MyOtherSelf';
import Achievements from '@/components/Achievements/Achievements';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function SpeakingPage() {
  useScrollAnimation();

  return (
    <div style={{ paddingTop: '80px' }}>
      <MyOtherSelf />
      <Achievements />
    </div>
  );
}

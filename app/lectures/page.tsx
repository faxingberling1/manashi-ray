'use client';

import Lectures from '@/components/Lectures/Lectures';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function LecturesPage() {
  useScrollAnimation();

  return (
    <div style={{ paddingTop: '80px' }}>
      <Lectures />
    </div>
  );
}

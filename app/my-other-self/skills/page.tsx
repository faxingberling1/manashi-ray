'use client';

import SkillsGallery from '@/components/SkillsGallery/SkillsGallery';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function SkillsPage() {
  useScrollAnimation();

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', background: '#fff' }}>
      <SkillsGallery />
    </div>
  );
}

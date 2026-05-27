'use client';

import Publications from '@/components/Publications/Publications';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function PublicationsPage() {
  useScrollAnimation();

  return (
    <div style={{ paddingTop: '80px' }}>
      <Publications />
    </div>
  );
}

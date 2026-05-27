'use client';

import Book from '@/components/Book/Book';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function BookPage() {
  useScrollAnimation();

  return (
    <div style={{ paddingTop: '80px' }}>
      <Book />
    </div>
  );
}

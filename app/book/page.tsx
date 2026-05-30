'use client';

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Book from '@/components/Book/Book';
import BookQuotes from '@/components/BookQuotes/BookQuotes';
import BookTestimonials from '@/components/BookTestimonials/BookTestimonials';
import Podcast from '@/components/Podcast/Podcast';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import styles from './BookPage.module.css';

function BookContent() {
  useScrollAnimation();
  const searchParams = useSearchParams();
  const initialTab = searchParams.get('tab') === 'podcast' ? 'podcast' : 'book';
  const [activeTab, setActiveTab] = useState<'book' | 'podcast'>(initialTab);

  return (
    <div style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--clr-ivory)' }}>
      {/* Shared Section Header */}
      <div style={{ background: 'var(--clr-ivory)', paddingTop: '3rem' }}>
        <div className="container">
          <div className="sectionHeader">
            <span className="sectionLabel">Publications</span>
            <h2 className="sectionTitle">The Book</h2>
            <div className="sectionRule"></div>
          </div>
        </div>
      </div>

      {/* Tab Buttons */}
      <div className={styles.tabContainer}>
        <div className={styles.tabList} role="tablist">
          <button
            className={`${styles.tabBtn} ${activeTab === 'book' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('book')}
            role="tab"
          >
            <span className={styles.tabIcon}>✦</span>
            <span className={styles.tabLabel}>The Book</span>
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === 'podcast' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('podcast')}
            role="tab"
          >
            <span className={styles.tabIcon}>▶</span>
            <span className={styles.tabLabel}>Video Podcast</span>
          </button>
        </div>
      </div>

      {/* Always-mounted tab content — toggled via CSS display */}
      <div style={{ display: activeTab === 'book' ? 'block' : 'none' }}>
        <Book />
        <BookTestimonials />
        <BookQuotes />
      </div>

      <div style={{ display: activeTab === 'podcast' ? 'block' : 'none' }}>
        <Podcast />
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={<div style={{paddingTop: '120px', textAlign: 'center'}}>Loading...</div>}>
      <BookContent />
    </Suspense>
  );
}

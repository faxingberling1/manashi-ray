'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './SkillsGallery.module.css';

interface PotteryPiece {
  id: number;
  src: string;
  title: string;
  width: number;
  height: number;
}

const POTTERY_GALLERY: PotteryPiece[] = [
  {
    id: 1,
    src: '/Pottery%20Pics/image.png',
    title: 'Crystalline Glazed Pot',
    width: 1448,
    height: 1086,
  },
  {
    id: 2,
    src: '/Pottery%20Pics/image%20(1).png',
    title: 'Deep indigo and Royal blue tea/coffee mug',
    width: 1448,
    height: 1086,
  },
  {
    id: 3,
    src: '/Pottery%20Pics/image%20(2).png',
    title: 'Speckled warm amber and golden yellow shallow bowl',
    width: 1690,
    height: 931,
  },
  {
    id: 4,
    src: '/Pottery%20Pics/teal-bowl-tortellini-soup.png',
    title: 'Teal bowl of tortellini vegetable soup',
    width: 1086,
    height: 1448,
  },
  {
    id: 5,
    src: '/Pottery%20Pics/Pottery%20-%202%20(3).jpeg',
    title: 'In the making',
    width: 4032,
    height: 2898,
  },
  {
    id: 6,
    src: '/Pottery%20Pics/Pottery%20-%202%20(2).jpeg',
    title: 'In the making',
    width: 3024,
    height: 4032,
  },
];

// Balanced 2-column masonry distribution:
// Col 1: Classic Pot (4:3) -> Teal Soup Bowl (Portrait 3:4) -> Unglazed Jar (4:3)
// Col 2: Indigo Mug (4:3) -> Amber Shallow Bowl (Wide 16:9) -> Unglazed Plate (Portrait 3:4)
const MASONRY_COLUMNS: PotteryPiece[][] = [
  [POTTERY_GALLERY[0], POTTERY_GALLERY[3], POTTERY_GALLERY[4]],
  [POTTERY_GALLERY[1], POTTERY_GALLERY[2], POTTERY_GALLERY[5]],
];

export default function SkillsGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % POTTERY_GALLERY.length : null));
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + POTTERY_GALLERY.length) % POTTERY_GALLERY.length : null));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, closeLightbox, nextImage, prevImage]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diffX) > 50) {
      if (diffX > 0) nextImage();
      else prevImage();
    }
    touchStartX.current = null;
  };

  return (
    <>
      <section className={`${styles.hobbySection} section`} id="skills" style={{ paddingTop: '100px' }}>
        <div className="container">
          <div className={styles.topNavRow}>
            <Link href="/my-other-self" className={styles.backButton}>
              ← Back to My &ldquo;Other Self&rdquo;
            </Link>
          </div>
          
          <div className="sectionHeader animateInit">
            <span className="sectionLabel">Creative Endeavors</span>
            <h2 className="sectionTitle">Recent Creations in Clay</h2>
            <div className="sectionRule" style={{ marginInline: 'auto' }}></div>
          </div>

          {/* 2-Column Showcase: Photos on the Left, Narrative Lines on the Right */}
          <div className={styles.showcaseLayout}>
            {/* Left Column: Masonry Pottery Gallery */}
            <div className={`${styles.picturesCol} animateInit delay100`}>
              <div className={styles.masonryGrid}>
                {MASONRY_COLUMNS.map((column, colIdx) => (
                  <div key={colIdx} className={styles.masonryCol}>
                    {column.map((piece) => {
                      const originalIdx = POTTERY_GALLERY.findIndex((p) => p.id === piece.id);
                      return (
                        <div
                          key={piece.id}
                          className={styles.potteryCard}
                          onClick={() => openLightbox(originalIdx)}
                          role="button"
                          tabIndex={0}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              openLightbox(originalIdx);
                            }
                          }}
                          aria-label={`View photo of ${piece.title}`}
                        >
                          <div
                            className={styles.cardImageWrap}
                            style={{ aspectRatio: `${piece.width} / ${piece.height}` }}
                          >
                            <Image
                              src={piece.src}
                              alt={piece.title}
                              fill
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 30vw"
                              className={styles.potteryImage}
                            />
                            <div className={styles.cardHoverOverlay}>
                              <span className={styles.viewBadge}>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                  <circle cx="11" cy="11" r="8"></circle>
                                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                  <line x1="11" y1="8" x2="11" y2="14"></line>
                                  <line x1="8" y1="11" x2="14" y2="11"></line>
                                </svg>
                                View
                              </span>
                            </div>
                          </div>
                          <div className={styles.cardContent}>
                            <h4 className={styles.cardTitle}>{piece.title}</h4>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Editorial Reflection */}
            <div className={`${styles.editorialCol} animateInit delay200`}>
              <div className={styles.editorialCard}>
                <span className={styles.introBadge}>✦ Creative Endeavors</span>
                <h3 className={styles.editorialHeading}>The Wheel &amp; The Clay</h3>
                <p className={styles.editorialParagraph}>
                  There is something profoundly transformative about throwing a lump of clay on the wheel and shaping it. Working at the wheel requires a centering of the mind and body. It has become a space where I find stillness outside of academia, allowing me to express creativity through my hands. Every piece I throw is a reminder that beauty often emerges from the messy, imperfect process of creation.
                </p>
                <div className={styles.editorialOrnament} aria-hidden="true">
                  <span className={styles.ornamentLine}></span>
                  <span className={styles.ornamentIcon}>🏺</span>
                  <span className={styles.ornamentLine}></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className={styles.quoteSection}>
        <div className={styles.quoteBgDecoration} aria-hidden="true" />
        <div className="container">
          <div className={`${styles.quoteCard} animateInit`}>
            <blockquote className={styles.quoteText}>
              <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
              Life is a continuous process of learning. Pottery is a cherished part of my weekly routine, offering a happy space for creativity while inspiring new ideas for research and exploration.
              <span className={styles.quoteMark} aria-hidden="true">&rdquo;</span>
            </blockquote>
            <div className={styles.quoteAccentLine} />
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className={styles.lightboxBackdrop}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Pottery Image Viewer"
        >
          <button
            type="button"
            className={styles.lightboxCloseBtn}
            onClick={closeLightbox}
            aria-label="Close viewer"
          >
            &times;
          </button>

          <div
            className={styles.lightboxModal}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className={styles.lightboxStage}>
              <div className={styles.lightboxImageContainer}>
                <Image
                  src={POTTERY_GALLERY[lightboxIndex].src}
                  alt={POTTERY_GALLERY[lightboxIndex].title}
                  fill
                  priority
                  className={styles.lightboxActiveImage}
                />
              </div>

              {/* Prev / Next controls */}
              <button
                type="button"
                className={`${styles.lightboxArrow} ${styles.lightboxArrowLeft}`}
                onClick={prevImage}
                aria-label="Previous artwork"
              >
                &#8249;
              </button>
              <button
                type="button"
                className={`${styles.lightboxArrow} ${styles.lightboxArrowRight}`}
                onClick={nextImage}
                aria-label="Next artwork"
              >
                &#8250;
              </button>
            </div>

            {/* Lightbox Info Panel */}
            <div className={styles.lightboxMeta}>
              <div>
                <div className={styles.metaTopRow}>
                  <span className={styles.metaCounter}>
                    Piece {lightboxIndex + 1} of {POTTERY_GALLERY.length}
                  </span>
                </div>

                <h3 className={styles.metaTitle}>
                  {POTTERY_GALLERY[lightboxIndex].title}
                </h3>
              </div>

              {/* Thumbnail Strip */}
              <div className={styles.thumbnailStrip} role="tablist">
                {POTTERY_GALLERY.map((piece, idx) => (
                  <button
                    key={piece.id}
                    type="button"
                    role="tab"
                    aria-selected={lightboxIndex === idx}
                    className={`${styles.thumbButton} ${lightboxIndex === idx ? styles.thumbActive : ''}`}
                    onClick={() => setLightboxIndex(idx)}
                    aria-label={`Show ${piece.title}`}
                  >
                    <Image
                      src={piece.src}
                      alt={piece.title}
                      width={64}
                      height={64}
                      className={styles.thumbImage}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

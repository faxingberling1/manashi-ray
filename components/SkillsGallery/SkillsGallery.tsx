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
    src: '/Pottery%20Pics/pottery-earth-and-ocean-tea-mug.jpg',
    title: 'Earth and Ocean Tea mug',
    width: 1024,
    height: 768,
  },
  {
    id: 4,
    src: '/Pottery%20Pics/pottery-sage-green-tumbler.jpg',
    title: 'Speckled sage green and ivory ceramic tumbler',
    width: 768,
    height: 1024,
  },
  {
    id: 5,
    src: '/Pottery%20Pics/pottery-blue-terracotta-casserole-front.jpg',
    title: 'Speckled turquoise blue and terracotta lidded casserole',
    width: 1024,
    height: 768,
  },
  {
    id: 6,
    src: '/Pottery%20Pics/pottery-cobalt-drip-lidded-jar.jpg',
    title: 'Black and white glazed jar with lid',
    width: 1024,
    height: 768,
  },
  {
    id: 7,
    src: '/Pottery%20Pics/pottery-spiral-dish.jpg',
    title: 'Spiral Turquoise spoon/laddle holder',
    width: 768,
    height: 1024,
  },
  {
    id: 8,
    src: '/Pottery%20Pics/teal-bowl-tortellini-soup.png',
    title: 'Teal bowl of tortellini vegetable soup',
    width: 1086,
    height: 1448,
  },
  {
    id: 9,
    src: '/Pottery%20Pics/pottery-raw-clay-mug-bisque.jpg',
    title: 'Unglazed coffee/tea mug',
    width: 768,
    height: 1024,
  },
  {
    id: 10,
    src: '/Pottery%20Pics/pottery-studio-wheel-preparation.jpg',
    title: 'The Master Potter - John Lawson and the Studio',
    width: 1024,
    height: 768,
  },
  {
    id: 11,
    src: '/Pottery%20Pics/pottery-studio-mentor-session.jpg',
    title: "Learning to 'Trim the pottery before bisque fire'",
    width: 1024,
    height: 768,
  },
];

// Balanced 2-column masonry distribution:
// Alternating heights and harmonious pairing across both columns
const MASONRY_COLUMNS: PotteryPiece[][] = [
  [
    POTTERY_GALLERY[0], // Crystalline Glazed Pot (Landscape)
    POTTERY_GALLERY[3], // Sage green tumbler (Portrait)
    POTTERY_GALLERY[2], // Earth and Ocean Tea mug (Landscape)
    POTTERY_GALLERY[6], // Spiral Turquoise spoon/laddle holder (Portrait)
    POTTERY_GALLERY[5], // Black and white glazed jar with lid (Landscape)
    POTTERY_GALLERY[9], // The Master Potter - John Lawson and the Studio (Landscape)
  ],
  [
    POTTERY_GALLERY[1], // Indigo mug (Landscape)
    POTTERY_GALLERY[4], // Casserole (Landscape)
    POTTERY_GALLERY[7], // Teal soup bowl (Portrait)
    POTTERY_GALLERY[8], // Unglazed coffee/tea mug (Portrait)
    POTTERY_GALLERY[10], // Learning to 'Trim the pottery before bisque fire' (Landscape)
  ],
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

      {/* Kabir Couplet & Reflection */}
      <section className={styles.quoteSection}>
        <div className={styles.quoteBgDecoration} aria-hidden="true" />
        <div className="container">
          <div className={`${styles.quoteCard} animateInit`}>
            {/* Pottery art backdrop representing the potter and the clay */}
            <div className={styles.kabirArtBackdrop} aria-hidden="true">
              <Image
                src="/kabir-potter-clay-art.jpg"
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 860px"
                className={styles.kabirArtImage}
              />
              <div className={styles.kabirArtOverlay} />
            </div>

            <div className={styles.quoteContent}>
              <div className={styles.quoteQuoteDecoration} aria-hidden="true">&ldquo;</div>
              <blockquote className={styles.quoteCouplet}>
                <p lang="hi" className={styles.quoteHindi}>
                  &ldquo;माटी कहे कुम्हार से, तू क्या रोंदे मोहे,<br />
                  एक दिन ऐसा आएगा, मैं रोंदूगी तोहे&rdquo;
                </p>
                <cite className={styles.quoteCite}>— Kabir</cite>
              </blockquote>
              <div className={styles.quoteDivider} aria-hidden="true">
                <span className={styles.quoteDividerLine} />
                <span className={styles.quoteDividerDot}>✦</span>
                <span className={styles.quoteDividerLine} />
              </div>
              <p className={styles.quoteReflection}>
                This couplet reminds me of the impermanence of human life. A powerful reflection on the cyclical relationship between human beings and nature.
              </p>
            </div>
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

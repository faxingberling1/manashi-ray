'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './SkillsGallery.module.css';

interface PotteryPiece {
  id: number;
  src: string;
  title: string;
  category: string;
  description: string;
}

const POTTERY_GALLERY: PotteryPiece[] = [
  {
    id: 1,
    src: '/Pottery%20Pics/image.png',
    title: 'Crystalline Glazed Vessel',
    category: 'Glazed Ceramic',
    description: 'A vibrant turquoise and earthy terracotta bowl featuring layered dripped glazes and fine crystalline craquelure.',
  },
  {
    id: 2,
    src: '/Pottery%20Pics/image%20(1).png',
    title: 'Indigo Horizon Mug',
    category: 'Functional Art',
    description: 'Handcrafted stoneware mug catching the morning light, glazed in deep twilight blues, sea-spray white, and warm earthen tones.',
  },
  {
    id: 3,
    src: '/Pottery%20Pics/image%20(2).png',
    title: 'Speckled Honey Basin',
    category: 'Glazed Ceramic',
    description: 'Flared wheel-thrown basin with rich golden ochre and amber iron-speckled glaze with rhythmic thrown ribs.',
  },
  {
    id: 4,
    src: '/Pottery%20Pics/Pottery%20-%202%20(3).jpeg',
    title: 'Lidded Studio Jar',
    category: 'Wheel-Thrown Clay',
    description: 'Sculptural clay lidded vessel showcasing raw texture, throwing lines, and balanced studio proportions.',
  },
  {
    id: 5,
    src: '/Pottery%20Pics/Pottery%20-%202%20(1).jpeg',
    title: 'Textured Cylinder Form',
    category: 'Wheel-Thrown Clay',
    description: 'Earthen cylinder vessel with expressive fingertip ridges and a defined foot rim, exploring tactile surface geometry.',
  },
  {
    id: 6,
    src: '/Pottery%20Pics/Pottery%20-%202.jpeg',
    title: 'Turned Finial Lid',
    category: 'Clay Study',
    description: 'Close-up study of a wheel-turned conical finial lid, displaying concentric contouring and clean sculptural profile.',
  },
  {
    id: 7,
    src: '/Pottery%20Pics/Pottery%20-%202%20(2).jpeg',
    title: 'Spiral Clay Platter',
    category: 'Wheel-Thrown Clay',
    description: 'Shallow clay dish marked with the hypnotic spiral of the potter’s wheel and an organic, gently undulating rim.',
  },
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
            <span className="sectionLabel">Creative Pursuits</span>
            <h2 className="sectionTitle">Recent Creations in Clay</h2>
            <div className="sectionRule" style={{ marginInline: 'auto' }}></div>
          </div>

          {/* Narrative Overview */}
          <div className={`${styles.editorialIntro} animateInit delay100`}>
            <span className={styles.introBadge}>✦ The Art of Pottery</span>
            <div className={styles.introText}>
              <p>
                There is something profoundly transformative about taking a raw piece of clay and shaping it with intention.
              </p>
              <p>
                Working at the wheel requires a centering of the mind and body. It has become a space where I find stillness outside of academia, allowing me to express creativity through my hands. Every piece I throw is a reminder that beauty often emerges from the messy, imperfect process of creation.
              </p>
            </div>
          </div>
          
          {/* Pottery Gallery Grid */}
          <div className={`${styles.gallerySection} animateInit delay200`}>
            <div className={styles.galleryHeader}>
              <span className={styles.galleryCount}>7 Handcrafted Works</span>
              <span className={styles.galleryHint}>Tap or click any image to view in high resolution</span>
            </div>

            <div className={styles.galleryGrid}>
              {POTTERY_GALLERY.map((piece, idx) => (
                <div
                  key={piece.id}
                  className={`${styles.potteryCard} ${idx === 0 || idx === 2 ? styles.cardHero : ''}`}
                  onClick={() => openLightbox(idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(idx);
                    }
                  }}
                  aria-label={`View photo of ${piece.title}`}
                >
                  <div className={styles.cardImageWrap}>
                    <Image
                      src={piece.src}
                      alt={piece.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                        View Details
                      </span>
                    </div>
                  </div>
                  <div className={styles.cardContent}>
                    <span className={styles.cardCategory}>{piece.category}</span>
                    <h3 className={styles.cardTitle}>{piece.title}</h3>
                    <p className={styles.cardDesc}>{piece.description}</p>
                  </div>
                </div>
              ))}
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
              <div className={styles.metaTopRow}>
                <span className={styles.metaCategoryBadge}>
                  {POTTERY_GALLERY[lightboxIndex].category}
                </span>
                <span className={styles.metaCounter}>
                  {lightboxIndex + 1} / {POTTERY_GALLERY.length}
                </span>
              </div>

              <h3 className={styles.metaTitle}>
                {POTTERY_GALLERY[lightboxIndex].title}
              </h3>
              <p className={styles.metaCaption}>
                {POTTERY_GALLERY[lightboxIndex].description}
              </p>

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

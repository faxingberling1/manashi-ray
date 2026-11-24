'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './SkillsGallery.module.css';

type CreationCategory = 'bowls' | 'mugs' | 'vessels';
type FilterTab = 'all' | CreationCategory;

interface PotteryPiece {
  id: string;
  src: string;
  title: string;
  category: CreationCategory | 'studio';
  categoryLabel: string;
  width: number;
  height: number;
  badge?: string;
  badgeVariant?: 'favorite' | 'progress';
  displayAspect?: string;
  objectPosition?: string;
}

const CERAMIC_CREATIONS: PotteryPiece[] = [
  {
    id: 'sunset-spiral-bowl',
    src: '/Pottery%20Pics/pottery-sunset-spiral-bowl.webp',
    title: 'Sunset Spiral Bowl',
    category: 'bowls',
    categoryLabel: 'Bowls & Plates',
    width: 1086,
    height: 1448,
  },
  {
    id: 'sapphire-terracotta-mug',
    src: '/Pottery%20Pics/pottery-sapphire-terracotta-mug.jpg',
    title: 'Sapphire and Terracotta Mug',
    category: 'mugs',
    categoryLabel: 'Mugs & Tumblers',
    width: 1600,
    height: 1200,
  },
  {
    id: 'burgundy-japanese-floating-bowl',
    src: '/Pottery%20Pics/pottery-burgundy-japanese-floating-bowl.webp',
    title: 'Burgundy-Red Japanese Floating Bowl',
    category: 'bowls',
    categoryLabel: 'Bowls & Plates',
    width: 1448,
    height: 1086,
    badge: "★ Artist's Favorite",
    badgeVariant: 'favorite',
  },
  {
    id: 'fine-speckled-bowl-favorite',
    src: '/Pottery%20Pics/pottery-fine-speckled-bowl-favorite.webp',
    title: 'Fine Speckled Textured Bowl',
    category: 'bowls',
    categoryLabel: 'Bowls & Plates',
    width: 1448,
    height: 1086,
  },
  {
    id: 'rustic-harmony',
    src: '/Pottery%20Pics/pottery-rustic-harmony-bowl.webp',
    title: 'Rustic Harmony — A Play of Earthy Tones',
    category: 'bowls',
    categoryLabel: 'Bowls & Plates',
    width: 1448,
    height: 1086,
  },
  {
    id: 'crystalline-glazed-pot',
    src: '/Pottery%20Pics/image.png',
    title: 'Crystalline Glazed Pot',
    category: 'vessels',
    categoryLabel: 'Jars & Vessels',
    width: 1448,
    height: 1086,
  },
  {
    id: 'indigo-royal-blue-mug',
    src: '/Pottery%20Pics/image%20(1).png',
    title: 'Deep indigo and Royal blue tea/coffee mug',
    category: 'mugs',
    categoryLabel: 'Mugs & Tumblers',
    width: 1448,
    height: 1086,
  },
  {
    id: 'sage-green-tumbler',
    src: '/Pottery%20Pics/pottery-sage-green-tumbler.jpg',
    title: 'Speckled sage green and ivory ceramic tumbler',
    category: 'mugs',
    categoryLabel: 'Mugs & Tumblers',
    width: 768,
    height: 1024,
  },
  {
    id: 'earth-ocean-tea-mug',
    src: '/Pottery%20Pics/pottery-earth-and-ocean-tea-mug.jpg',
    title: 'Earth and Ocean Tea mug',
    category: 'mugs',
    categoryLabel: 'Mugs & Tumblers',
    width: 1024,
    height: 768,
  },
  {
    id: 'turquoise-terracotta-casserole',
    src: '/Pottery%20Pics/pottery-blue-terracotta-casserole-front.jpg',
    title: 'Speckled turquoise blue and terracotta lidded casserole',
    category: 'vessels',
    categoryLabel: 'Jars & Vessels',
    width: 1024,
    height: 768,
  },
  {
    id: 'black-white-lidded-jar',
    src: '/Pottery%20Pics/pottery-cobalt-drip-lidded-jar.jpg',
    title: 'Black and white glazed jar with lid',
    category: 'vessels',
    categoryLabel: 'Jars & Vessels',
    width: 1024,
    height: 768,
  },
  {
    id: 'spiral-turquoise-spoon-holder',
    src: '/Pottery%20Pics/pottery-spiral-dish.jpg',
    title: 'Spiral Turquoise spoon/laddle holder',
    category: 'bowls',
    categoryLabel: 'Bowls & Plates',
    width: 768,
    height: 1024,
  },
  {
    id: 'teal-bowl-tortellini-soup',
    src: '/Pottery%20Pics/teal-bowl-tortellini-soup.png',
    title: 'Teal bowl of tortellini vegetable soup',
    category: 'bowls',
    categoryLabel: 'Bowls & Plates',
    width: 1086,
    height: 1448,
  },
  {
    id: 'decorative-plate-in-the-making',
    src: '/Pottery%20Pics/pottery-decorative-plate-in-the-making.webp',
    title: 'Decorative Plate — In the Making (Before Glazing)',
    category: 'bowls',
    categoryLabel: 'Bowls & Plates',
    width: 1086,
    height: 1448,
    badge: 'In the Making',
    badgeVariant: 'progress',
  },
];

const STUDIO_PHOTOS: PotteryPiece[] = [
  {
    id: 'studio-john-lawson',
    src: '/Pottery%20Pics/pottery-studio-wheel-preparation.jpg',
    title: 'The Master Potter - John Lawson and the Studio',
    category: 'studio',
    categoryLabel: 'In the Studio',
    width: 1024,
    height: 768,
    displayAspect: '4 / 3',
  },
  {
    id: 'studio-trimming-session',
    src: '/Pottery%20Pics/pottery-studio-mentor-session.jpg',
    title: "Learning to 'Trim the pottery before bisque fire'",
    category: 'studio',
    categoryLabel: 'In the Studio',
    width: 1024,
    height: 768,
    displayAspect: '4 / 3',
  },
  {
    id: 'studio-cleaning-bowl-edges',
    src: '/Pottery%20Pics/pottery-studio-cleaning-bowl-edges.jpg',
    title: 'Cleaning the edges of the bowl',
    category: 'studio',
    categoryLabel: 'In the Studio',
    width: 1024,
    height: 768,
    displayAspect: '4 / 3',
    objectPosition: 'center',
  },
  {
    id: 'studio-glazing-section',
    src: '/Pottery%20Pics/pottery-studio-glazing-section.jpg',
    title: 'In the glazing section',
    category: 'studio',
    categoryLabel: 'In the Studio',
    width: 768,
    height: 1024,
    displayAspect: '4 / 3',
    objectPosition: 'center 30%',
  },
  {
    id: 'studio-chris-carte-instructor',
    src: '/Pottery%20Pics/pottery-chris-carte-instructor.jpg',
    title: 'Chris Carte — Instructor',
    category: 'studio',
    categoryLabel: 'In the Studio',
    width: 3500,
    height: 4042,
    displayAspect: '1 / 1',
    objectPosition: 'center 38%',
  },
  {
    id: 'studio-chris-on-wheel',
    src: '/Pottery%20Pics/pottery-chris-on-the-wheel.jpg',
    title: 'Chris trimming the ceramic plate on the wheel',
    category: 'studio',
    categoryLabel: 'In the Studio',
    width: 3892,
    height: 3492,
    displayAspect: '1 / 1',
    objectPosition: 'center',
  },
  {
    id: 'studio-messy-muddy',
    src: '/Pottery%20Pics/pottery-studio-messy-muddy.jpg',
    title: 'Pottery can be messy and muddy...',
    category: 'studio',
    categoryLabel: 'In the Studio',
    width: 797,
    height: 1024,
    displayAspect: '3 / 4',
    objectPosition: 'center',
  },
];

const FILTER_OPTIONS: { key: FilterTab; label: string }[] = [
  { key: 'all', label: 'All Creations' },
  { key: 'bowls', label: 'Bowls & Plates' },
  { key: 'mugs', label: 'Mugs & Tumblers' },
  { key: 'vessels', label: 'Jars & Vessels' },
];

interface LightboxState {
  items: PotteryPiece[];
  index: number;
}

export default function SkillsGallery() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all');
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const touchStartX = useRef<number | null>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const filteredCreations =
    activeFilter === 'all'
      ? CERAMIC_CREATIONS
      : CERAMIC_CREATIONS.filter((piece) => piece.category === activeFilter);

  const getFilterCount = (key: FilterTab) =>
    key === 'all'
      ? CERAMIC_CREATIONS.length
      : CERAMIC_CREATIONS.filter((piece) => piece.category === key).length;

  const openLightbox = (items: PotteryPiece[], index: number) => {
    setLightbox({ items, index });
  };

  const closeLightbox = useCallback(() => {
    setLightbox(null);
  }, []);

  const nextImage = useCallback(() => {
    setLightbox((prev) =>
      prev !== null ? { ...prev, index: (prev.index + 1) % prev.items.length } : null
    );
  }, []);

  const prevImage = useCallback(() => {
    setLightbox((prev) =>
      prev !== null
        ? { ...prev, index: (prev.index - 1 + prev.items.length) % prev.items.length }
        : null
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox, closeLightbox, nextImage, prevImage]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightbox]);

  // Auto-scroll active thumbnail into view inside the lightbox strip
  useEffect(() => {
    if (lightbox === null) return;
    const activeThumb = thumbRefs.current[lightbox.index];
    activeThumb?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [lightbox]);

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

  const activePiece = lightbox ? lightbox.items[lightbox.index] : null;

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

          {/* Centered Editorial Preface Banner */}
          <div className={`${styles.editorialBanner} animateInit delay100`}>
            <div className={styles.editorialTopRow}>
              <span className={styles.introBadge}>✦ Creative Endeavors</span>
              <span className={styles.collectionStats}>
                {CERAMIC_CREATIONS.length} Ceramic Works · {STUDIO_PHOTOS.length} Studio Moments
              </span>
            </div>
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

          {/* Category Filter Pills */}
          <div className={styles.filterBar} role="tablist" aria-label="Filter ceramic creations">
            {FILTER_OPTIONS.map((option) => {
              const isActive = activeFilter === option.key;
              return (
                <button
                  key={option.key}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.filterBtn} ${isActive ? styles.filterBtnActive : ''}`}
                  onClick={() => setActiveFilter(option.key)}
                >
                  <span>{option.label}</span>
                  <span className={styles.filterCount}>{getFilterCount(option.key)}</span>
                </button>
              );
            })}
          </div>

          {/* Full-Width 3-Column Responsive Masonry Gallery */}
          <div className={styles.creationsMasonry}>
            {filteredCreations.map((piece, idx) => (
              <div key={piece.id} className={styles.masonryItem}>
                <div
                  className={`${styles.potteryCard} ${
                    piece.badgeVariant === 'favorite' ? styles.potteryCardFavorite : ''
                  }`}
                  onClick={() => openLightbox(filteredCreations, idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(filteredCreations, idx);
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
                      sizes="(max-width: 560px) 100vw, (max-width: 960px) 50vw, 33vw"
                      className={styles.potteryImage}
                    />
                    {piece.badge && (
                      <span
                        className={`${styles.pieceBadge} ${
                          piece.badgeVariant === 'favorite'
                            ? styles.pieceBadgeFavorite
                            : styles.pieceBadgeProgress
                        }`}
                      >
                        {piece.badge}
                      </span>
                    )}
                    <div className={styles.cardHoverOverlay}>
                      <span className={styles.viewBadge}>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
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
                    <span className={styles.cardCategory}>{piece.categoryLabel}</span>
                    <h4 className={styles.cardTitle}>{piece.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dedicated "In the Studio" Showcase */}
          <div className={styles.studioSection}>
            <div className={`${styles.studioHeader} animateInit`}>
              <span className={styles.studioLabel}>People &amp; Process</span>
              <h3 className={styles.studioTitle}>In the Studio</h3>
              <p className={styles.studioSubtitle}>
                Mentors, guidance, and moments at the wheel where each piece begins.
              </p>
              <div className="sectionRule" style={{ marginInline: 'auto' }}></div>
            </div>

            <div className={styles.studioGrid}>
              {STUDIO_PHOTOS.map((piece, idx) => (
                <div
                  key={piece.id}
                  className={`${styles.potteryCard} ${styles.studioCard}`}
                  onClick={() => openLightbox(STUDIO_PHOTOS, idx)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(STUDIO_PHOTOS, idx);
                    }
                  }}
                  aria-label={`View studio photo: ${piece.title}`}
                >
                  <div
                    className={styles.cardImageWrap}
                    style={{ aspectRatio: piece.displayAspect ?? `${piece.width} / ${piece.height}` }}
                  >
                    <Image
                      src={piece.src}
                      alt={piece.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className={styles.potteryImage}
                      style={piece.objectPosition ? { objectPosition: piece.objectPosition } : undefined}
                    />
                    <div className={styles.cardHoverOverlay}>
                      <span className={styles.viewBadge}>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
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
                    <span className={styles.cardCategory}>{piece.categoryLabel}</span>
                    <h4 className={styles.cardTitle}>{piece.title}</h4>
                  </div>
                </div>
              ))}
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
      {lightbox !== null && activePiece !== null && (
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
                  src={activePiece.src}
                  alt={activePiece.title}
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
                  <span className={styles.metaCategoryBadge}>{activePiece.categoryLabel}</span>
                  <span className={styles.metaCounter}>
                    Piece {lightbox.index + 1} of {lightbox.items.length}
                  </span>
                </div>

                {activePiece.badge && (
                  <span
                    className={`${styles.metaBadge} ${
                      activePiece.badgeVariant === 'favorite'
                        ? styles.metaBadgeFavorite
                        : styles.metaBadgeProgress
                    }`}
                  >
                    {activePiece.badge}
                  </span>
                )}

                <h3 className={styles.metaTitle}>{activePiece.title}</h3>
              </div>

              {/* Thumbnail Strip */}
              <div className={styles.thumbnailStrip} role="tablist">
                {lightbox.items.map((piece, idx) => (
                  <button
                    key={piece.id}
                    ref={(el) => {
                      thumbRefs.current[idx] = el;
                    }}
                    type="button"
                    role="tab"
                    aria-selected={lightbox.index === idx}
                    className={`${styles.thumbButton} ${
                      lightbox.index === idx ? styles.thumbActive : ''
                    }`}
                    onClick={() => setLightbox({ items: lightbox.items, index: idx })}
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

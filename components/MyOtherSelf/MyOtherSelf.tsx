'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './MyOtherSelf.module.css';

interface MemoirPhoto {
  id: number;
  src: string;
  year: string;
  title: string;
  tag: string;
  caption: string;
}

const DISABILITY_MEMOIRS: MemoirPhoto[] = [
  {
    id: 1,
    src: '/disability-journey-1.jpg',
    year: '2001 – 2002',
    title: 'Early Rehabilitation & Gait Training',
    tag: 'Gait Training',
    caption: 'Learning to walk again using parallel bars and an early leg prosthetic.',
  },
  {
    id: 2,
    src: '/disability-journey-2.jpg',
    year: '2003 – 2007',
    title: 'Marking a milestone in progress',
    tag: 'Milestone in Progress',
    caption: 'Standing with resilience during a clinical milestone evaluation on April 23, 2007.',
  },
  {
    id: 3,
    src: '/disability-journey-3.jpg',
    year: 'Clinical Journey',
    title: 'Partners in Care & Mobility',
    tag: 'Care & Mobility',
    caption: "With my prosthetist, Fran Starzec—grateful for his skill, compassion, and the team's expertise who helped me rediscover mobility and rebuild possibilities.",
  },
];

export default function MyOtherSelf() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev + 1) % DISABILITY_MEMOIRS.length : null));
  }, []);

  const prevImage = useCallback(() => {
    setLightboxIndex((prev) => (prev !== null ? (prev - 1 + DISABILITY_MEMOIRS.length) % DISABILITY_MEMOIRS.length : null));
  }, []);

  // Keyboard controls
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

  // Touch swipe handling
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
    <section className={`${styles.section} section`} id="journey">
      <div className={styles.bgDecoration}></div>
      <div className="container">
        <div className="sectionHeader animateInit">
          <span className="sectionLabel">My &ldquo;Other Self&rdquo;</span>
          <h2 className="sectionTitle">A Life, Interrupted and Reimagined</h2>
          <div className="sectionRule" style={{ marginInline: 'auto' }}></div>
        </div>

        <div className={`${styles.bannerContainer} animateInit`}>
          <Image 
            src="/pottery-studio-banner.jpg" 
            alt="Pottery studio with wheel and handcrafted ceramics" 
            fill
            className={styles.bannerImage}
            priority
          />
        </div>

        <div className={`${styles.intro} animateInit delay100`}>
          <p>
            Whether one conducts research, works with clay on a potter's wheel, or learns to navigate life with a partial disability, striving toward a goal is always a leap of faith. For me, all three are an ongoing process of learning and discovery—different in scale and experience, but connected by the same encounter with uncertainty. Each day, my living meets this reality: where any tiny progress comes through patience, adaptation, and the willingness to begin again. This is story of my "other self."
          </p>

          <p>
            Living independently and working as a full-time academic and researcher, my partial disability has been a constant truth and relentless teacher since 2001. It is a life status I did not ask for nor wanted, but in quiet and stubborn ways it has taught me to navigate a world that is not always designed for me. In the process it has prompted me to more keenly observe untold stories and be empathetic to the subjects and participants of my research. Above all, it has taught me to adapt graciously, find new ways of moving, and accept without complaint that some things cannot be done how I once imagined or desired.
          </p>

          {/* Visual Archival Cards Strip */}
          <div className={styles.visualArchivalStrip}>
            <div className={styles.stripHeader}>
              <span className={styles.stripLabel}>
                <span className={styles.stripSparkle}>✦</span> Archival Memoirs · Navigating Disability
              </span>
              <span className={styles.stripInstruction}>Tap or click any photo to view full journey</span>
            </div>

            <div className={styles.polaroidRow}>
              {DISABILITY_MEMOIRS.map((photo, idx) => (
                <div
                  key={photo.id}
                  className={`${styles.polaroidCard} ${styles[`tilt${idx + 1}`]} ${hoveredIndex === idx ? styles.polaroidHovered : ''}`}
                  onClick={() => openLightbox(idx)}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(idx);
                    }
                  }}
                  aria-label={`Open photo: ${photo.title}`}
                >
                  <div className={styles.polaroidInner}>
                    <div className={styles.imageWrap}>
                      <Image
                        src={photo.src}
                        alt={photo.title}
                        fill
                        sizes="(max-width: 640px) 260px, (max-width: 1024px) 30vw, 240px"
                        className={styles.polaroidImg}
                      />
                      <div className={styles.yearTag}>{photo.year}</div>
                      <div className={styles.photoActionOverlay}>
                        <span className={styles.photoActionPill}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            <line x1="11" y1="8" x2="11" y2="14"></line>
                            <line x1="8" y1="11" x2="14" y2="11"></line>
                          </svg>
                          View
                        </span>
                      </div>
                    </div>
                    <div className={styles.polaroidCaption}>
                      <h4 className={styles.cardTitle}>{photo.title}</h4>
                      <span className={styles.cardTag}>{photo.tag}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p>
            Perhaps this was the reason why I found myself drawn to work with clay this summer. Like extensive field notes and primary data, a lump of clay does not arrive with a predetermined shape, but has potential, both possibilities and limitations. To be a potter, I have to be aware what the material will allow and work with it skillfully without resistance. In a broader sense, making ceramics and pottery appeals to me because it combines creativity, touch, patience, and chemistry – a soft piece of earth is transformed through the right amount of pressure of my fingers, the rhythmic spinning of the wheel, and fire into something durable. Working with clay on a potter's wheel is a meditative experience, like when an argument finds its shape in prose.
          </p>
          <p>
            My two universes exist in parallel: both pottery and ethnographic research require time, attentiveness, patience, and a willingness to be changed by the material that I am working with. I find the comparison especially apt, because you begin with an idea or a research question – though the data and evidence frequently take me somewhere I did not anticipate. And yet, when the ceramic emerges slowly from my hands, or a paragraph or page of findings is written, it is deeply satisfying, almost magical, and imperfect, but uniquely mine.
          </p>
        </div>

        <div className={`${styles.roadmapSection} animateInit delay200`}>
          <div className={styles.roadmapGrid}>
            <Link
              href="/my-other-self/skills"
              className={styles.clayCta}
              aria-label="Open the Recent Creations in Clay gallery"
            >
              <div className={styles.clayPreview} aria-hidden="true">
                <div className={`${styles.clayThumb} ${styles.clayThumbBack}`}>
                  <Image src={encodeURI('/Pottery Pics/Pottery - 2 (2).jpeg')} alt="" fill sizes="180px" className={styles.clayThumbImg} />
                </div>
                <div className={`${styles.clayThumb} ${styles.clayThumbMid}`}>
                  <Image src={encodeURI('/Pottery Pics/Pottery - 2 (3).jpeg')} alt="" fill sizes="180px" className={styles.clayThumbImg} />
                </div>
                <div className={`${styles.clayThumb} ${styles.clayThumbFront}`}>
                  <Image src={encodeURI('/Pottery Pics/Pottery - 2.jpeg')} alt="" fill sizes="200px" className={styles.clayThumbImg} />
                </div>
              </div>

              <div className={styles.clayBody}>
                <span className={styles.clayEyebrow}>Gallery · Pottery</span>
                <h4 className={styles.clayTitle}>Recent Creations in Clay</h4>
                <p className={styles.clayText}>
                  Explore a gallery of my creative pursuits, including pottery and future passions.
                </p>
                <span className={styles.clayButton}>
                  Explore the Gallery
                  <span className={styles.clayButtonArrow}>→</span>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Graceful Interactive Lightbox Modal */}
      {lightboxIndex !== null && (
        <div 
          className={styles.lightboxBackdrop} 
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Disability Memoirs Photograph Viewer"
        >
          <button 
            type="button"
            className={styles.lightboxCloseBtn} 
            onClick={closeLightbox}
            aria-label="Close photograph viewer"
          >
            &times;
          </button>

          <div 
            className={styles.lightboxModal} 
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Main Stage */}
            <div className={styles.lightboxStage}>
              <div className={styles.lightboxImageContainer}>
                <Image
                  src={DISABILITY_MEMOIRS[lightboxIndex].src}
                  alt={DISABILITY_MEMOIRS[lightboxIndex].title}
                  fill
                  priority
                  className={styles.lightboxActiveImage}
                />
              </div>

              {/* Navigation Arrows */}
              <button 
                type="button"
                className={`${styles.lightboxArrow} ${styles.lightboxArrowLeft}`}
                onClick={prevImage}
                aria-label="Previous photograph"
              >
                &#8249;
              </button>
              <button 
                type="button"
                className={`${styles.lightboxArrow} ${styles.lightboxArrowRight}`}
                onClick={nextImage}
                aria-label="Next photograph"
              >
                &#8250;
              </button>
            </div>

            {/* Narrative Info & Thumbnails */}
            <div className={styles.lightboxMeta}>
              <div className={styles.metaTopRow}>
                <span className={styles.metaYearBadge}>
                  {DISABILITY_MEMOIRS[lightboxIndex].year}
                </span>
                <span className={styles.metaCounter}>
                  {lightboxIndex + 1} / {DISABILITY_MEMOIRS.length}
                </span>
              </div>

              <h3 className={styles.metaTitle}>
                {DISABILITY_MEMOIRS[lightboxIndex].title}
              </h3>
              <p className={styles.metaCaption}>
                {DISABILITY_MEMOIRS[lightboxIndex].caption}
              </p>

              {/* Thumbnail Strip */}
              <div className={styles.thumbnailStrip} role="tablist">
                {DISABILITY_MEMOIRS.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={lightboxIndex === idx}
                    className={`${styles.thumbButton} ${lightboxIndex === idx ? styles.thumbActive : ''}`}
                    onClick={() => setLightboxIndex(idx)}
                    aria-label={`Show ${item.title}`}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
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
    </section>
  );
}


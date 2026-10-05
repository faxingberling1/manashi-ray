'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './BookTalks.module.css';

interface TalkEvent {
  id: string;
  title: string;
  host: string;
  date: string;
  location: string;
  image: string;
  description?: string;
  status: 'upcoming' | 'completed';
}

interface GalleryPhoto {
  id: string;
  filename: string;
  title: string;
  subtitle: string;
  description: string;
  aspect?: string;
}

// 1. Upcoming Events Data (add future bookings here)
const UPCOMING_TALKS: TalkEvent[] = [];

// 2. Completed Events Archive Data
const ARCHIVED_TALKS: TalkEvent[] = [
  {
    id: 'msu-2026',
    title: 'Who Becomes Boundless? Migration, Privilege, and Entrepreneurship in a Multipolar World',
    host: 'Michigan State University — Department of Sociology',
    date: 'Thursday, Sept. 17, 2026 • 12:30 p.m.',
    location: '457 Berkey Hall and Zoom (Hybrid Colloquium)',
    image: '/book-talk-msu.png',
    description:
      "Invited presentation exploring the transnational reach of migrants' practices, examining how race, class privilege, and gender configure entrepreneurial pathways in an increasingly multipolar global landscape. Shared with faculty, graduate researchers, and undergraduate students at MSU.",
    status: 'completed',
  },
];

// 3. Book Talk Gallery Photos from public/Book Talk/
const GALLERY_PHOTOS: GalleryPhoto[] = [
  {
    id: 'msu-talk-main',
    filename: 'Website - MSU Book Talk.png',
    title: 'Book Talk at Michigan State University',
    subtitle: 'MSU Department of Sociology Colloquium',
    description:
      "Dr. Manashi Ray introducing 'Who Becomes Boundless? Migration, Privilege, and Entrepreneurship in a Multipolar World' to faculty and scholars at MSU.",
  },
  {
    id: 'msu-talk-podium-1',
    filename: 'Website - MSU Book Talk - 1.png',
    title: 'Addressing Faculty & Students',
    subtitle: 'MSU Department of Sociology',
    description:
      'Delivering the colloquium address, discussing the ethnography of Indian transnational entrepreneurs and global mobility patterns.',
  },
  {
    id: 'msu-talk-podium-2',
    filename: 'Book Talk - MSU -2.png',
    title: 'Transnational Entrepreneurs Lecture',
    subtitle: 'Theoretical Frameworks & Ethnographic Findings',
    description:
      'Examining how class privilege, gender, and racial hierarchies intersect across global business corridors.',
  },
  {
    id: 'msu-talk-qa',
    filename: 'Book Talk - 5.png',
    title: 'Engaged Q&A & Seminar Dialogue',
    subtitle: 'Interactive Colloquium Exchange',
    description:
      'Engaging in thoughtful discussion with graduate students and faculty during the post-lecture Q&A session.',
  },
  {
    id: 'msu-talk-room',
    filename: 'Book Talk - MSU - 3.png',
    title: 'Seminar Gathering at Berkey Hall',
    subtitle: 'MSU Campus, East Lansing',
    description:
      'A full gathering of faculty members, sociology colleagues, and students participating in the seminar presentation.',
  },
  {
    id: 'msu-steve-gold',
    filename: 'Website - Book Talk - MSU 6 - Dr. Steve Gold and myself.png',
    title: 'With Dr. Steven J. Gold',
    subtitle: 'Michigan State University',
    description:
      'A heartfelt moment with Dr. Steven J. Gold, distinguished sociologist of migration and longtime mentor.',
  },
  {
    id: 'msu-farewell-dinner',
    filename: "Dr. Gold's Farewell Dinner - Dr. Gold with his students.png",
    title: "Dr. Gold's Farewell Gathering",
    subtitle: 'Academic Community & Mentorship',
    description:
      'Gathering with Dr. Steven Gold, esteemed colleagues, and former students celebrating years of scholarship, mentorship, and kinship.',
  },
  {
    id: 'msu-xuefei-ren',
    filename: 'Xuefei and myself on Grand River, East Lansing, MSU.png',
    title: 'With Prof. Xuefei Ren',
    subtitle: 'Grand River Avenue, East Lansing',
    description:
      'Reconnecting with friend and comparative urban sociologist Prof. Xuefei Ren along Grand River Avenue on the MSU campus.',
  },
  {
    id: 'msu-talk-portrait',
    filename: 'Book Talk - MSU 4.png',
    title: 'Presentation Session at MSU',
    subtitle: 'Scholarly Exchange & Discussion',
    description:
      'Dr. Manashi Ray during the interactive seminar dialogue at Michigan State University.',
  },
];

// Gallery albums — one album per event/venue.
// To add a future venue: create a new folder in /public, list its photos, and add an album here.
interface GalleryAlbum {
  id: string;
  folder: string; // folder inside /public
  institution: string;
  department: string;
  title: string;
  date: string;
  location: string;
  photos: GalleryPhoto[];
}

const GALLERY_ALBUMS: GalleryAlbum[] = [
  {
    id: 'album-msu-2026',
    folder: 'Book Talk',
    institution: 'Michigan State University',
    department: 'Department of Sociology',
    title: 'Who Becomes Boundless? Migration, Privilege, and Entrepreneurship in a Multipolar World',
    date: 'September 17, 2026',
    location: '457 Berkey Hall, East Lansing, Michigan',
    photos: GALLERY_PHOTOS,
  },
];

const photoSrc = (folder: string, filename: string) => encodeURI(`/${folder}/${filename}`);

export default function BookTalks() {
  const [activeAlbumIdx, setActiveAlbumIdx] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const activeAlbum = GALLERY_ALBUMS[activeAlbumIdx];
  const albumPhotos = activeAlbum.photos;

  const openLightbox = (albumIdx: number, index: number) => {
    setActiveAlbumIdx(albumIdx);
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % albumPhotos.length);
  }, [lightboxIndex, albumPhotos.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + albumPhotos.length) % albumPhotos.length);
  }, [lightboxIndex, albumPhotos.length]);

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxIndex, closeLightbox, showNext, showPrev]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activePhoto = lightboxIndex !== null ? albumPhotos[lightboxIndex] : null;

  return (
    <div className={styles.bookTalksWrapper} id="book-talks">
      {/* ============================================================ */}
      {/* SECTION 1: UPCOMING EVENTS                                  */}
      {/* ============================================================ */}
      <section className={`${styles.subSection} section`} id="upcoming-events">
        <div className="container">
          <div className="sectionHeader animateInit">
            <span className="sectionLabel">Presentations &amp; Dialogues</span>
            <h2 className="sectionTitle">Upcoming Events</h2>
            <div className="sectionRule"></div>
          </div>

          {UPCOMING_TALKS.length > 0 ? (
            <div className={styles.eventsGrid}>
              {UPCOMING_TALKS.map((talk) => (
                <article key={talk.id} className={`${styles.eventCard} animateInit delay100`}>
                  <div className={styles.eventImageWrap}>
                    <Image
                      src={talk.image}
                      alt={talk.title}
                      width={600}
                      height={450}
                      className={styles.eventImage}
                    />
                    <span className={styles.badgeUpcoming}>Upcoming</span>
                  </div>
                  <div className={styles.eventBody}>
                    <h3 className={styles.eventTitle}>{talk.title}</h3>
                    <div className={styles.metaList}>
                      <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Host</span>
                        <span className={styles.metaValue}>{talk.host}</span>
                      </div>
                      <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Date &amp; Time</span>
                        <span className={styles.metaValue}>{talk.date}</span>
                      </div>
                      <div className={styles.metaItem}>
                        <span className={styles.metaLabel}>Venue</span>
                        <span className={styles.metaValue}>{talk.location}</span>
                      </div>
                    </div>
                    {talk.description && (
                      <p className={styles.eventDescription}>{talk.description}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className={`${styles.planningCard} animateInit delay100`}>
              <div className={styles.planningIconWrap}>
                <span className={styles.planningIcon}>✦</span>
              </div>
              <span className={styles.planningBadge}>Dates In Planning</span>
              <h3 className={styles.planningTitle}>Scheduling Future Book Talks &amp; Lectures</h3>
              <p className={styles.planningText}>
                Upcoming book talks, seminars, and keynote lectures for{' '}
                <em>Who Becomes Boundless?</em> are currently being scheduled for upcoming academic
                terms and conferences.
              </p>
              <p className={styles.planningSubtext}>
                Would you like to invite Dr. Manashi Ray for a presentation, department colloquium, or
                keynote dialogue at your institution?
              </p>
              <div className={styles.planningActions}>
                <Link href="/contact" className={styles.inquireBtn}>
                  Inquire for a Speaking Engagement <span className={styles.btnArrow}>→</span>
                </Link>
                <a
                  href="#book-talk-archive"
                  onClick={(e) => scrollToSection(e, 'book-talk-archive')}
                  className={styles.secondaryLink}
                >
                  View Completed Events Archive ↓
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 2: GALLERY                                          */}
      {/* ============================================================ */}
      <section className={`${styles.subSection} ${styles.gallerySectionBg} section`} id="book-talk-gallery">
        <div className="container">
          <div className="sectionHeader animateInit">
            <span className="sectionLabel">Visual Retrospective</span>
            <h2 className="sectionTitle">Book Talk Gallery</h2>
            <div className="sectionRule"></div>
            <p className={styles.sectionLead}>
              Moments from book presentations, colloquia, and academic exchanges — organised by event
              and venue.
            </p>
          </div>

          {GALLERY_ALBUMS.map((album, albumIdx) => (
          <div key={album.id} id={album.id} className={styles.album}>
          <header className={`${styles.albumHeader} animateInit`}>
            <div className={styles.albumHeaderMain}>
              <span className={styles.albumVenue}>
                <span className={styles.albumVenueIcon}>🏛</span>
                {album.institution} · {album.department}
              </span>
              <h3 className={styles.albumTitle}>{album.title}</h3>
              <div className={styles.albumMetaRow}>
                <span className={styles.albumMetaChip}>📅 {album.date}</span>
                <span className={styles.albumMetaChip}>📍 {album.location}</span>
              </div>
            </div>
            <div className={styles.albumCount}>
              <strong>{album.photos.length}</strong>
              <span>Photographs</span>
            </div>
          </header>

          <div className={styles.galleryMetaBar}>
            <span className={styles.galleryCounter}>Event Album</span>
            <span className={styles.galleryHint}>Click any photograph to view in full resolution</span>
          </div>

          <div className={styles.galleryGrid}>
            {album.photos.map((photo, index) => {
              const imageSrc = photoSrc(album.folder, photo.filename);
              return (
                <div
                  key={photo.id}
                  className={`${styles.galleryCard} animateInit`}
                  onClick={() => openLightbox(albumIdx, index)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      openLightbox(albumIdx, index);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View photo: ${photo.title}`}
                >
                  <div className={styles.galleryImageContainer}>
                    <Image
                      src={imageSrc}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className={styles.galleryThumb}
                    />
                    <div className={styles.galleryOverlay}>
                      <span className={styles.viewBadge}>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                        View Photo
                      </span>
                    </div>
                  </div>
                  <div className={styles.cardInfo}>
                    <span className={styles.cardSubtitle}>{photo.subtitle}</span>
                    <h4 className={styles.cardTitle}>{photo.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
          ))}
        </div>
      </section>

      {/* ============================================================ */}
      {/* SECTION 3: ARCHIVE (COMPLETED EVENTS)                       */}
      {/* ============================================================ */}
      <section className={`${styles.subSection} section`} id="book-talk-archive">
        <div className="container">
          <div className="sectionHeader animateInit">
            <span className="sectionLabel">Past Presentations</span>
            <h2 className="sectionTitle">Event Archive</h2>
            <div className="sectionRule"></div>
            <p className={styles.sectionLead}>
              A permanent record of completed book talks, keynote lectures, and department colloquiums.
            </p>
          </div>

          <div className={styles.archiveList}>
            {ARCHIVED_TALKS.map((talk) => (
              <div key={talk.id} className={`${styles.completedFrame} animateInit delay100`}>
              <span className={styles.completedSeal}>
                <span className={styles.sealOrnament}>✦</span>
                Completed Event
                <span className={styles.sealOrnament}>✦</span>
              </span>
              <article className={styles.archiveCard}>
                <div className={styles.archiveImageWrap}>
                  <Image
                    src={talk.image}
                    alt={talk.title}
                    width={560}
                    height={720}
                    className={styles.archiveImage}
                    priority
                  />
                </div>

                <div className={styles.archiveContent}>
                  <div className={styles.archiveTopRow}>
                    <span className={styles.archiveCategory}>Invited Department Colloquium</span>
                    <span className={styles.archiveDateTag}>{talk.date.split('•')[0].trim()}</span>
                  </div>

                  <h3 className={styles.archiveTitle}>{talk.title}</h3>

                  <div className={styles.archiveMetaList}>
                    <div className={styles.archiveMetaRow}>
                      <span className={styles.metaRowIcon}>🏛</span>
                      <div>
                        <strong>Host Institution:</strong>
                        <span>{talk.host}</span>
                      </div>
                    </div>
                    <div className={styles.archiveMetaRow}>
                      <span className={styles.metaRowIcon}>📅</span>
                      <div>
                        <strong>Date &amp; Time:</strong>
                        <span>{talk.date}</span>
                      </div>
                    </div>
                    <div className={styles.archiveMetaRow}>
                      <span className={styles.metaRowIcon}>📍</span>
                      <div>
                        <strong>Venue &amp; Format:</strong>
                        <span>{talk.location}</span>
                      </div>
                    </div>
                  </div>

                  {talk.description && (
                    <p className={styles.archiveDescription}>{talk.description}</p>
                  )}

                  <div className={styles.archiveActions}>
                    <a
                      href="#album-msu-2026"
                      onClick={(e) => scrollToSection(e, 'album-msu-2026')}
                      className={styles.galleryJumpBtn}
                    >
                      <span>Browse Photos in Gallery</span>
                      <span className={styles.jumpArrow}>↑</span>
                    </a>
                    <Link href="/contact" className={styles.archiveInquireLink}>
                      Request recording details →
                    </Link>
                  </div>
                </div>
              </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* LIGHTBOX MODAL                                               */}
      {/* ============================================================ */}
      {lightboxIndex !== null && activePhoto && (
        <div
          className={styles.lightboxBackdrop}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
        >
          <button
            type="button"
            className={styles.lightboxCloseBtn}
            onClick={closeLightbox}
            aria-label="Close modal"
          >
            &times;
          </button>

          <div className={styles.lightboxModal} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxStage}>
              <div className={styles.lightboxImageContainer}>
                <Image
                  src={photoSrc(activeAlbum.folder, activePhoto.filename)}
                  alt={activePhoto.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className={styles.lightboxActiveImage}
                  priority
                />
              </div>

              {/* Prev / Next controls */}
              <button
                type="button"
                className={`${styles.lightboxArrow} ${styles.lightboxArrowLeft}`}
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous photograph"
              >
                &#8249;
              </button>
              <button
                type="button"
                className={`${styles.lightboxArrow} ${styles.lightboxArrowRight}`}
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label="Next photograph"
              >
                &#8250;
              </button>
            </div>

            <div className={styles.lightboxMeta}>
              <div>
                <div className={styles.metaTopRow}>
                  <span className={styles.metaCategoryBadge}>{activePhoto.subtitle}</span>
                  <span className={styles.metaCounter}>
                    {lightboxIndex + 1} of {albumPhotos.length}
                  </span>
                </div>
                <p className={styles.metaEvent}>
                  {activeAlbum.institution} · {activeAlbum.date}
                </p>
                <h3 className={styles.metaTitle}>{activePhoto.title}</h3>
                <p className={styles.metaCaption}>{activePhoto.description}</p>
              </div>

              <div className={styles.thumbnailStrip} aria-label="Photo thumbnails">
                {albumPhotos.map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    className={`${styles.thumbButton} ${idx === lightboxIndex ? styles.thumbActive : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxIndex(idx);
                    }}
                    aria-label={`Jump to photo ${idx + 1}: ${p.title}`}
                  >
                    <Image
                      src={photoSrc(activeAlbum.folder, p.filename)}
                      alt={p.title}
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
    </div>
  );
}

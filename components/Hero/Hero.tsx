import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} id="home">
      {/* Background decoration */}
      <div className={styles.bgDecoration} aria-hidden="true">
        <div className={`${styles.circle} ${styles.circle1}`} />
        <div className={`${styles.circle} ${styles.circle2}`} />
        <div className={`${styles.line} ${styles.line1}`} />
        <div className={`${styles.line} ${styles.line2}`} />
      </div>

      <div className={styles.inner}>
        {/* Book Cover Image — Left */}
        <div className={`${styles.bookCol} animateInit`}>
          <div className={styles.bookFrame}>
            <div className={styles.bookGlow} aria-hidden="true" />
            <Image
              src="/Book-Cover-Manashi.jpg"
              alt="Becoming Boundless — Indian Transnational Entrepreneurs in the Global Economy by Manashi Ray"
              width={300}
              height={450}
              className={styles.bookCover}
              priority
            />
            <div className={styles.bookShadow} aria-hidden="true" />
            <div className={styles.bookBadge}>
              <span className={styles.bookBadgePress}>Stanford University Press</span>
              <span className={styles.bookBadgeTitle}>Becoming Boundless</span>
            </div>
          </div>
        </div>

        {/* Text Center */}
        <div className={`${styles.textCol} animateInit delay100`}>
          <p className={styles.eyebrow}>Professor &middot; Author &middot; Scholar</p>
          <h1 className={styles.name}>
            Manashi
            <br />
            <em>Ray</em>
          </h1>
          <p className={styles.tagline}>Professor of Sociology &nbsp;·&nbsp; West Virginia State University</p>
          <p className={styles.bio}>
            Scholar of migration, identity, and social inequality. Award-winning researcher, educator, and memoirist whose work bridges rigorous academia and deeply human storytelling.
          </p>
          <div className={styles.actions}>
            <Link href="/book" className="btn btnPrimary">Book Overview</Link>
            <Link href="/book?tab=podcast" className="btn btnGold">Video Podcast</Link>
            <Link href="/about" className="btn btnGhost">Biography</Link>
          </div>
        </div>

        {/* Portrait Image — Right */}
        <div className={`${styles.portraitCol} animateInit delay200`}>
          <div className={styles.portraitFrame}>
            <Image
              src="/web image.png"
              alt="Dr. Manashi Ray, Professor of Sociology at West Virginia State University"
              width={380}
              height={500}
              className={styles.portrait}
              priority
            />
            <div className={styles.portraitAccent} aria-hidden="true" />
            <div className={styles.portraitLabel}>
              <span className={styles.portraitLabelIcon}>✦</span>
              <span>Professor &amp; Scholar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <Link href="/about" className={styles.scrollCue} aria-label="Learn more about Manashi Ray">
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Explore</span>
      </Link>
    </section>
  );
}

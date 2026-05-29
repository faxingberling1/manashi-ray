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
        {/* Text */}
        <div className={`${styles.textCol} animateInit`}>
          <p className={styles.eyebrow}>Professor &middot; Author &middot; Scholar</p>
          <h1 className={styles.name}>
            Manashi
            <br />
            <em>Ray</em>
          </h1>
          <p className={styles.tagline}>Professor of Sociology &nbsp;·&nbsp; West Virginia State University</p>
          <p className={styles.bio}>
            Scholar of migration, identity, and social inequality. Award-winning researcher, educator, and forthcoming memoirist whose work bridges rigorous academia and deeply human storytelling.
          </p>
          <div className={styles.actions}>
            <Link href="/book" className="btn btnPrimary">Explore the Book</Link>
            <Link href="/about" className="btn btnGhost">Biography</Link>
          </div>
        </div>

        {/* Image */}
        <div className={`${styles.imageCol} animateInit delay200`}>
          <div className={styles.imageFrame}>
            <Image
              src="/web image.png"
              alt="Dr. Manashi Ray, Professor of Sociology at West Virginia State University"
              width={420}
              height={560}
              className={styles.portrait}
              priority
            />
            <div className={styles.imageAccent} aria-hidden="true" />
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>✦</span>
            <span>Professor &amp; Author</span>
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

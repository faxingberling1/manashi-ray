import Image from 'next/image';
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
          <p className={styles.eyebrow}>Welcome</p>
          <h1 className={styles.name}>
            Manashi
            <br />
            <em>Ray</em>
          </h1>
          <p className={styles.tagline}>Author &nbsp;·&nbsp; Scholar &nbsp;·&nbsp; Speaker</p>
          <p className={styles.bio}>
            Illuminating the human experience through rigorous research,
            powerful storytelling, and a lifelong commitment to learning.
          </p>
          <div className={styles.actions}>
            <a href="#book" className="btn btnPrimary">Explore the Book</a>
            <a href="#about" className="btn btnGhost">Learn More</a>
          </div>
        </div>

        {/* Image */}
        <div className={`${styles.imageCol} animateInit delay200`}>
          <div className={styles.imageFrame}>
            <Image
              src="/manashi_portrait.png"
              alt="Portrait of Manashi Ray"
              width={420}
              height={560}
              className={styles.portrait}
              priority
            />
            <div className={styles.imageAccent} aria-hidden="true" />
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>✦</span>
            <span>Author &amp; Scholar</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <a href="#about" className={styles.scrollCue} aria-label="Scroll to About">
        <span className={styles.scrollLine} />
        <span className={styles.scrollLabel}>Scroll</span>
      </a>
    </section>
  );
}

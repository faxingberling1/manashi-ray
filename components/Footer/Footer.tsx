import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.name}>Manashi Ray</span>
          <span className={styles.tagline}>Professor · Author · Scholar</span>
        </div>
        <nav className={styles.nav} aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <Link href="/about-me">About Me</Link>
          <Link href="/publications">Research</Link>
          <Link href="/lectures">Lectures</Link>
          <Link href="/book">Book</Link>
          <Link href="/speaking">Awards</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <p className={styles.copy}>
          &copy; {currentYear} Manashi Ray. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

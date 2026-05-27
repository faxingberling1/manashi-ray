import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.name}>Manashi Ray</span>
          <span className={styles.tagline}>Author · Scholar · Speaker</span>
        </div>
        <nav className={styles.nav} aria-label="Footer navigation">
          <a href="#about">About</a>
          <a href="#book">Book</a>
          <a href="#achievements">Achievements</a>
          <a href="#speaking">Speaking</a>
          <a href="#contact">Contact</a>
        </nav>
        <p className={styles.copy}>
          &copy; {currentYear} Manashi Ray. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

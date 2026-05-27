'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const closeNav = () => setOpen(false);

  const links = [
    { href: '#about',        label: 'About' },
    { href: '#book',         label: 'Book' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#speaking',     label: 'Speaking' },
  ];

  return (
    <nav ref={navRef} className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#home" className={styles.logo}>Manashi Ray</a>

        <button
          className={`${styles.toggle} ${open ? styles.toggleOpen : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>

        <ul className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={styles.link} onClick={closeNav}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className={`${styles.link} ${styles.cta}`} onClick={closeNav}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

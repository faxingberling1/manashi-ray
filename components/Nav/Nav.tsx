'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import styles from './Nav.module.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    { href: '/',              label: 'Home' },
    { href: '/book',          label: 'Book' },
    { href: '/about-me',      label: 'About Me' },
    { href: '/publications',  label: 'Research' },
    { href: '/lectures',      label: 'Lectures' },
    { href: '/speaking',      label: 'Awards' },
  ];

  return (
    <nav ref={navRef} className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} onClick={closeNav}>
          Manashi Ray
        </Link>

        <button
          className={`${styles.toggle} ${open ? styles.toggleOpen : ''}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>

        <ul className={`${styles.links} ${open ? styles.linksOpen : ''}`}>
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`${styles.link} ${isActive ? styles.active : ''}`}
                  onClick={closeNav}
                >
                  {label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link href="/contact" className={`${styles.link} ${styles.cta} ${pathname === '/contact' ? styles.active : ''}`} onClick={closeNav}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

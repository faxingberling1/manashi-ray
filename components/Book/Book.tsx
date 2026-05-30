'use client';

import Image from 'next/image';
import { useRef, MouseEvent } from 'react';
import styles from './Book.module.css';

export default function Book() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!wrapRef.current || !imgRef.current) return;
    const rect = wrapRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    imgRef.current.style.transform = `
      rotateY(${-8 + x * 12}deg)
      rotateX(${3 - y * 8}deg)
      scale(1.03)
    `;
  };

  const handleMouseLeave = () => {
    if (imgRef.current) {
      imgRef.current.style.transform = '';
    }
  };

  return (
    <section className={`${styles.book} section`} id="book">
      <div className={styles.bgTexture}></div>
      <div className="container">
        <div className={styles.showcase}>
          {/* Cover */}
          <div className={`${styles.coverCol} animateInit`}>
            <div
              className={styles.coverWrap}
              ref={wrapRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src="/Book-Cover-Manashi.jpg"
                alt="Becoming Boundless — Indian Transnational Entrepreneurs in the Global Economy by Manashi Ray, published by Stanford University Press"
                width={420}
                height={630}
                className={styles.coverImg}
                ref={imgRef}
              />
              <div className={styles.coverShadow}></div>
            </div>
          </div>

          {/* Info */}
          <div className={`${styles.info} animateInit delay150`}>
            <p className={styles.genre}>Sociology &amp; Transnational Studies</p>
            <h3 className={styles.title}>Becoming Boundless</h3>
            <p className={styles.subtitle}><em>Indian Transnational Entrepreneurs in the Global Economy</em></p>
            
            <p className={styles.description}>
              How do Indian men and women migrant entrepreneurs play a part in repositioning India as a pivotal actor in the twentyfirst century&apos;s multipolar world order?
            </p>
            <p className={styles.description}>
              In <em>Becoming Boundless</em>, Manashi Ray draws on ethnographic and archival research to uncover how they create and participate in transnational networks, and how these networks in turn drive the growth of global capitalism. Ray pays particular attention to the expansive global networks of transnational Indian entrepreneurs between the United States and India and across several other nations.
            </p>
            <p className={styles.description}>
              Covering a 10-year period in India&apos;s post-reform era, Ray deftly highlights complex connections between the social and spatial mobility of this diverse, bicultural population, and uniquely theorizes the intersection of class, caste, and gender. She questions whether migration reinforces dominant forms of social inequality or transforms it through the redistribution of valued goods and life chances, especially for women in male-dominated sectors. The book therefore recasts contemporary migration as a crucial part of the emergence of transnational economic spaces, and analyzes the ways that these spaces are fragmented and hierarchical.
            </p>

            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Author</span>
                <span className={styles.metaValue}><strong>Manashi Ray</strong></span>
                <span className={styles.metaSub}>Professor of Sociology at West Virginia State University</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Publication</span>
                <span className={styles.metaValue}><strong>Stanford University Press</strong></span>
                <span className={styles.metaSub}>May 2026</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Details</span>
                <span className={styles.metaValue}><strong>$32.00</strong> Paperback</span>
                <span className={styles.metaSub}>314 Pages</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>ISBN</span>
                <span className={styles.metaSub}><strong>Hardcover:</strong> 9781503645387</span>
                <span className={styles.metaSub}><strong>Paperback:</strong> 9781503646094</span>
                <span className={styles.metaSub}><strong>Ebook:</strong> 9781503646100</span>
              </div>
            </div>

            <div className={styles.actions}>
              <a
                href="https://www.sup.org/books/sociology/becoming-boundless"
                className="btn btnGold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy at Stanford University Press
              </a>
              <p className={styles.discountCode}>
                Receive <strong>20% off</strong> at <a href="https://www.sup.org/books/sociology/becoming-boundless" target="_blank" rel="noopener noreferrer">www.sup.org</a> with code <strong>RAY20</strong>
              </p>
              <p className={styles.bulkInfo}>
                For discounts on event orders and bulk purchase of 50+ copies, please contact <a href="mailto:sales@sup.org">sales@sup.org</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

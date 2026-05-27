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
        <div className="sectionHeader animateInit">
          <span className="sectionLabel">Publications</span>
          <h2 className="sectionTitle">The Book</h2>
          <div className="sectionRule"></div>
        </div>

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
                src="/book_cover.png"
                alt="Book by Manashi Ray"
                width={320}
                height={480}
                className={styles.coverImg}
                ref={imgRef}
              />
              <div className={styles.coverShadow}></div>
            </div>
          </div>

          {/* Info */}
          <div className={`${styles.info} animateInit delay150`}>
            <p className={styles.genre}>Personal Biography &amp; Memoir</p>
            <h3 className={styles.title}>Charting My Own Course</h3>
            <p className={styles.subtitle}><em>A Life Lived in Full</em></p>
            
            <p className={styles.description}>
              In this deeply personal and intellectually rich memoir, Manashi Ray takes readers on an extraordinary journey — from the formative years that shaped her worldview to the halls of academia and the wider world of ideas. Part biography, part manifesto, this book is an invitation to think deeply, live boldly, and never stop questioning.
            </p>
            <p className={styles.description}>
              Drawing on decades of experience, interviews, and a lifetime of notes, <em>Charting My Own Course</em> weaves together personal narrative with scholarly insight to create a work that is both profoundly intimate and universally resonant.
            </p>

            <div className={styles.meta}>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Publisher</span>
                <span className={styles.metaValue}>Forthcoming</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Genre</span>
                <span className={styles.metaValue}>Memoir / Biography</span>
              </div>
              <div className={styles.metaItem}>
                <span className={styles.metaLabel}>Available At</span>
                <span className={styles.metaValue}>Amazon, Barnes &amp; Noble</span>
              </div>
            </div>

            <div className={styles.actions}>
              <a href="#" className="btn btnGold">Buy on Amazon</a>
              <a href="#" className="btn btnGhost">Barnes &amp; Noble</a>
            </div>

            <div className={styles.endorsement}>
              <blockquote className={styles.quote}>
                &quot;A stunning achievement — part memoir, part manifesto. Manashi Ray writes with the precision of a scholar and the heart of a poet.&quot;
              </blockquote>
              <cite className={styles.author}>— Praise from colleague</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

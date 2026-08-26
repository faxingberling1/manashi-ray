import Image from 'next/image';
import styles from './SouthAsianDiasporaReview.module.css';

export default function SouthAsianDiasporaReview() {
  return (
    <section className={`${styles.featuredArticle} section`}>
      <div className="container">
        <div className="sectionHeader animateInit">
          <span className="sectionLabel">Book Review</span>
          <h2 className="sectionTitle">South Asian Diaspora</h2>
          <div className="sectionRule"></div>
        </div>

        <div className={`${styles.contentWrapper} animateInit delay100`}>
          <div className={styles.imageContainer}>
            <a href="/south_asian_diaspora_review.pdf" target="_blank" rel="noopener noreferrer">
              <Image 
                src="/Book-Cover-Manashi.jpg" 
                alt="Becoming Boundless Book Cover" 
                width={150} 
                height={225} 
                className={styles.bookImage}
              />
            </a>
          </div>
          <div className={styles.textContent}>
            <h3 className={styles.reviewTitle}>Becoming boundless: Indian transnational entrepreneurs in the global economy</h3>
            <p className={styles.authorInfo}>
              by Manashi Ray, Stanford, CA: Stanford University Press, 2026, 314 pp., $130 (hardcover), ISBN 781503645387
            </p>
            <p className={styles.description}>
              Reviewed by <strong>Amba Pande</strong>, <em>Jawaharlal Nehru University, New Delhi, India</em>
            </p>
            <p className={styles.excerpt}>
              "In her seminal work, Manashi Ray offers a detailed, multi-layered exploration of the lives, networks, and structural contexts of Indian business migrants in the US... Becoming Boundless is an essential text in sociology, migration studies, and international political economy, and it's a pleasure to read."
            </p>
            <div className={styles.actionButtons}>
              <a 
                href="https://www.tandfonline.com/doi/full/10.1080/19438192.2026.2721640" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`btn btnPrimary ${styles.btn}`}
              >
                Read Online
              </a>
              <a 
                href="/south_asian_diaspora_review.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`btn btnGhost ${styles.btn}`}
              >
                View PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

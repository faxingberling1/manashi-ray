import Image from 'next/image';
import styles from './BookReviews.module.css';

export default function BookReviews() {
  return (
    <section className={`${styles.bookReviews} section`} id="book-reviews">
      <div className="container">
        <div className="sectionHeader animateInit">
          <span className="sectionLabel">Book Reviews</span>
          <h2 className="sectionTitle" style={{ color: 'var(--clr-navy)', display: 'block' }}>Featured Reviews</h2>
          <hr className="sectionRule" style={{ backgroundColor: '#d4af37', border: 'none', height: '3px', width: '56px', margin: '1.5rem auto', display: 'block', clear: 'both' }} />
        </div>

        <div className={styles.reviewsGrid}>
          {/* The Wire Review */}
          <div className={`${styles.contentWrapper} animateInit delay100`}>
            <div className={styles.imageContainer}>
              <Image
                src="/Book-Cover-Manashi.jpg"
                alt="Becoming Boundless Book Cover"
                width={150}
                height={225}
                className={styles.bookImage}
              />
            </div>
            <div className={styles.textContent}>
              <h3 className={styles.reviewTitle}>The Wire Review</h3>
              <p className={styles.description}>
                "The Making of India's Transnational Entrepreneurs" by Tapti Roy. Read the featured review of <em>Becoming Boundless</em> in The Wire.
              </p>
              <p className={styles.excerpt}>
                "Sri, owner of a cloud-based software company serving 50,000 organisations across 160 countries, was ranked among 100 richest Indians in 2024. Raised humbly in a village and later educated in the United States, Sri attributes his entrepreneurial drive not to his advanced degrees but to his modest schooling, which inspired him to create opportunities for rural youth in India."
              </p>
              <div className={styles.actionButtons}>
                <a
                  href="https://thewire.in/article/books/the-making-of-indias-transnational-entrepreneurs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btnPrimary ${styles.btn}`}
                >
                  Read It on Wire
                </a>
                <a
                  href="/Review_of_the_Book_The_WIRE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btnGhost ${styles.btn}`}
                >
                  View PDF
                </a>
              </div>
            </div>
          </div>

          {/* South Asian Diaspora Review */}
          <div className={`${styles.contentWrapper} animateInit delay200`}>
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
              <h3 className={styles.reviewTitle}>South Asian Diaspora</h3>
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
      </div>
    </section>
  );
}

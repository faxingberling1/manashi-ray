import Image from 'next/image';
import styles from './FeaturedArticle.module.css';

export default function FeaturedArticle() {
  return (
    <section className={`${styles.featuredArticle} section`} id="featured-article">
      <div className="container">
        <div className="sectionHeader animateInit">
          <span className="sectionLabel">Featured Article</span>
          <h2 className="sectionTitle">The Wire Review</h2>
          <div className="sectionRule"></div>
        </div>

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
            <p className={styles.description}>
              "The Making of India's Transnational Entrepreneurs" by Tapti Roy. Read the featured review of <em>Becoming Boundless</em> in The Wire.
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
      </div>
    </section>
  );
}

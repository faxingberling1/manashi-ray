import Image from 'next/image';
import styles from './BookReviews.module.css';

const REVIEWS = [
  {
    id: 'wire',
    journal: 'The Wire',
    badge: 'Featured Review',
    reviewerName: 'Tapti Roy',
    reviewerTitle: 'Historian and Writer',
    quote:
      'Together, these are stories of individuals, of struggle and resilience, of creativity and resourcefulness, carefully woven into a compelling narrative tapestry. Ray\'s engagement with her subjects lends her writing the quality of storytelling that brings entrepreneurs vividly to life.',
    readUrl: 'https://thewire.in/article/books/the-making-of-indias-transnational-entrepreneurs',
    pdfUrl: '/Review_of_the_Book_The_WIRE.pdf',
    readLabel: 'Read Online',
  },
  {
    id: 'south-asian-diaspora',
    journal: 'South Asian Diaspora',
    badge: 'Academic Journal',
    reviewerName: 'Amba Pande',
    reviewerTitle: 'Jawaharlal Nehru University, New Delhi',
    quote:
      'Becoming Boundless is an essential text in sociology, migration studies, and international political economy, and it\'s a pleasure to read. It addresses an empirical gap by moving beyond traditional migration studies to offer a detailed analysis of highly educated, capital-rich transnational actors.',
    readUrl: 'https://www.tandfonline.com/doi/full/10.1080/19438192.2026.2721640',
    pdfUrl: '/south_asian_diaspora_review.pdf',
    readLabel: 'Read Online',
  },
  {
    id: 'developing-economies',
    journal: 'The Developing Economies',
    badge: 'Notable Academic Journal',
    reviewerName: 'Daniel Naujoks',
    reviewerTitle: 'Columbia University',
    quote:
      'Becoming Boundless is a great read, well researched, and a welcome contribution to our understanding of transnational entrepreneurship, transnational social spaces, diaspora engagement and return migration.',
    readUrl: 'https://doi.org/10.1111/deve.70050',
    pdfUrl: '/The_Developing_Economies_Review.pdf',
    readLabel: 'Read Online',
  },
];

export default function BookReviews() {
  return (
    <section className={`${styles.bookReviews} section`} id="book-reviews">
      <div className="container">
        <div className="sectionHeader animateInit">
          <span className="sectionLabel">Book Reviews</span>
          <h2 className="sectionTitle" style={{ color: 'var(--clr-navy)', display: 'block' }}>
            Featured Reviews
          </h2>
          <hr
            className="sectionRule"
            style={{
              backgroundColor: '#d4af37',
              border: 'none',
              height: '3px',
              width: '56px',
              margin: '1.5rem auto',
              display: 'block',
              clear: 'both',
            }}
          />
        </div>

        <div className={styles.reviewsGrid}>
          {REVIEWS.map((review, index) => (
            <article
              key={review.id}
              className={`${styles.reviewCard} animateInit delay${(index + 1) * 100}`}
            >
              <div className={styles.imageContainer}>
                <a href={review.pdfUrl} target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/Book-Cover-Manashi.jpg"
                    alt="Becoming Boundless Book Cover"
                    width={95}
                    height={143}
                    className={styles.bookImage}
                  />
                </a>
              </div>

              <span className={styles.journalBadge}>{review.badge}</span>
              <h3 className={styles.reviewTitle}>{review.journal}</h3>

              <div className={styles.reviewerLine}>
                <span>Reviewed by <strong>{review.reviewerName}</strong></span>
                <em>{review.reviewerTitle}</em>
              </div>

              <div className={styles.quoteContainer}>
                <blockquote className={styles.excerpt}>
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
              </div>

              <div className={styles.actionButtons}>
                <a
                  href={review.readUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btnPrimary ${styles.btn}`}
                >
                  {review.readLabel}
                </a>
                <a
                  href={review.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btnGhost ${styles.btn}`}
                >
                  View PDF
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

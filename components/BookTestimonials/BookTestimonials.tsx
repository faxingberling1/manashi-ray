import styles from './BookTestimonials.module.css';

const TESTIMONIALS = [
  {
    quote: "Becoming Boundless is a deeply engaging book which fills a gap in migration scholarship on highly educated migrants. Ray offers a fresh perspective on the men and women who build transnational businesses, across the US and India, in their quest to balance economic success with meaningful family lives.",
    author: "Bandana Purkayastha",
    title: "University of Connecticut"
  },
  {
    quote: "In Becoming Boundless, Manashi Ray breaks new ground by pushing us to take a closer look at the interstices of transnational entrepreneurship, social networks and economic development. Ray's superb and stimulating book is bound to become an indispensable source of inspiration for understanding cross-border economic activities and underlying power relations. We have waited a long time for such a truly pathbreaking account.",
    author: "Thomas Faist",
    title: "Bielefeld University"
  }
];

export default function BookTestimonials() {
  return (
    <section className={`${styles.testimonials} section`} id="testimonials">
      <div className="container">
        <div className="sectionHeader animateInit">
          <span className="sectionLabel">Praise &amp; Reviews</span>
          <h2 className="sectionTitle">Praise for Becoming Boundless</h2>
          <div className="sectionRule"></div>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className={`${styles.card} animateInit delay100`}>
              <div className={styles.quoteMark} aria-hidden="true">&ldquo;</div>
              <p className={styles.quoteText}>{t.quote}</p>
              <div className={styles.authorBox}>
                <p className={styles.authorName}>{t.author}</p>
                <p className={styles.authorTitle}>{t.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image';
import styles from './BookTalks.module.css';

const UPCOMING_TALKS = [
  {
    title: "Who Becomes Boundless? Migration, Privilege, and Entrepreneurship in a Multipolar World",
    event: "Michigan State University, Department of Sociology",
    date: "Thursday Sept. 17, 2026, 12:30 p.m.",
    location: "457 Berkey Hall and Zoom",
    image: "/book-talk-msu.png", // User needs to upload this
  }
];

export default function BookTalks() {
  return (
    <section className={`${styles.bookTalks} section`} id="book-talks">
      <div className="container">
        
        {/* Upcoming Talks Section */}
        <div className="sectionHeader animateInit">
          <span className="sectionLabel">Presentations</span>
          <h2 className="sectionTitle">Upcoming Book Talks</h2>
          <div className="sectionRule"></div>
        </div>

        <div className={styles.grid}>
          {UPCOMING_TALKS.map((talk, idx) => (
            <div key={idx} className={`${styles.card} animateInit delay100`}>
              <div className={styles.imageWrap}>
                <Image
                  src={talk.image}
                  alt={talk.title}
                  width={600}
                  height={800}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.talkTitle}>{talk.title}</h3>
                <p className={styles.talkEvent}><strong>Event:</strong> {talk.event}</p>
                <p className={styles.talkDate}><strong>Date:</strong> {talk.date}</p>
                <p className={styles.talkLocation}><strong>Location:</strong> {talk.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Past Recordings (Future Placeholder) */}
        <div className="sectionHeader animateInit" style={{ marginTop: '4rem' }}>
          <span className="sectionLabel">Archive</span>
          <h2 className="sectionTitle">Past Recordings &amp; Galleries</h2>
          <div className="sectionRule"></div>
        </div>
        
        <div className={styles.emptyState}>
          <p>Recordings and photos of past book talks will be featured here.</p>
        </div>

      </div>
    </section>
  );
}

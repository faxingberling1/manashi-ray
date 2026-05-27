import styles from './Speaking.module.css';

export default function Speaking() {
  return (
    <section className={`${styles.speaking} section`} id="speaking">
      <div className="container">
        <div className="sectionHeader animateInit">
          <span className="sectionLabel">Speaking</span>
          <h2 className="sectionTitle">Events &amp; Media</h2>
          <div className="sectionRule"></div>
        </div>

        <div className={`${styles.intro} animateInit`}>
          <p>
            Manashi Ray is an engaging and sought-after speaker who brings intellectual
            depth, warmth, and clarity to every stage. She speaks on topics spanning
            identity, scholarship, memoir, and the life of the mind.
          </p>
        </div>

        <div className={styles.topics}>
          {/* Topic 1 */}
          <div className={`${styles.card} animateInit`}>
            <div className={styles.icon}>💬</div>
            <h3 className={styles.title}>Keynote Speaking</h3>
            <p className={styles.desc}>
              Compelling keynote addresses for academic institutions, literary festivals,
              and corporate audiences on themes of identity, resilience, and intellectual life.
            </p>
          </div>

          {/* Topic 2 */}
          <div className={`${styles.card} animateInit delay100`}>
            <div className={styles.icon}>📚</div>
            <h3 className={styles.title}>Book Readings &amp; Discussions</h3>
            <p className={styles.desc}>
              Intimate readings from her memoir, followed by rich Q&amp;A sessions that draw
              audiences deeper into the ideas and stories at the book&apos;s heart.
            </p>
          </div>

          {/* Topic 3 */}
          <div className={`${styles.card} animateInit delay200`}>
            <div className={styles.icon}>🎙️</div>
            <h3 className={styles.title}>Panels &amp; Interviews</h3>
            <p className={styles.desc}>
              Featured panelist on media, podcasts, and academic forums — bringing nuance,
              expertise, and a gift for clear communication to complex conversations.
            </p>
          </div>

          {/* Topic 4 */}
          <div className={`${styles.card} animateInit delay300`}>
            <div className={styles.icon}>🎓</div>
            <h3 className={styles.title}>Academic Lectures</h3>
            <p className={styles.desc}>
              Guest lectures and masterclasses at universities and research institutions,
              tailored to students and faculty seeking to engage with her research and writing.
            </p>
          </div>
        </div>

        <div className={`${styles.cta} animateInit`}>
          <p>Interested in booking Manashi for your event?</p>
          <a href="#contact" className="btn btnPrimary">Enquire About Speaking</a>
        </div>
      </div>
    </section>
  );
}

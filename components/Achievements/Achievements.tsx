import styles from './Achievements.module.css';

export default function Achievements() {
  return (
    <section className={`${styles.achievements} section`} id="achievements">
      <div className="container">
        <div className="sectionHeader animateInit">
          <span className="sectionLabel">Milestones</span>
          <h2 className="sectionTitle">Achievements &amp; Recognition</h2>
          <div className="sectionRule"></div>
        </div>

        <div className={`${styles.timeline} animateInit`}>
          {/* Item 1 */}
          <div className={`${styles.item} animateInit`}>
            <div className={styles.marker}>
              <span className={styles.icon}>🎓</span>
            </div>
            <div className={styles.content}>
              <span className={styles.year}>Academic Foundation</span>
              <h3 className={styles.title}>Advanced Academic Credentials</h3>
              <p className={styles.desc}>
                Completed rigorous doctoral-level research with distinction, laying the groundwork for a career defined by intellectual excellence and scholarly contribution.
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className={`${styles.item} animateInit delay100`}>
            <div className={styles.marker}>
              <span className={styles.icon}>📖</span>
            </div>
            <div className={styles.content}>
              <span className={styles.year}>Research &amp; Scholarship</span>
              <h3 className={styles.title}>Published Works &amp; Papers</h3>
              <p className={styles.desc}>
                Authored numerous papers, essays, and contributions to academic journals and anthologies, earning recognition from peers across disciplines.
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className={`${styles.item} animateInit delay200`}>
            <div className={styles.marker}>
              <span className={styles.icon}>🏆</span>
            </div>
            <div className={styles.content}>
              <span className={styles.year}>Awards &amp; Honors</span>
              <h3 className={styles.title}>National &amp; International Recognition</h3>
              <p className={styles.desc}>
                Received prestigious awards and fellowships honoring contributions to scholarship, public discourse, and the advancement of knowledge in her field.
              </p>
            </div>
          </div>

          {/* Item 4 */}
          <div className={`${styles.item} animateInit delay300`}>
            <div className={styles.marker}>
              <span className={styles.icon}>🌍</span>
            </div>
            <div className={styles.content}>
              <span className={styles.year}>Global Outreach</span>
              <h3 className={styles.title}>International Speaking &amp; Media</h3>
              <p className={styles.desc}>
                Invited as keynote speaker and panelist at conferences, universities, and cultural institutions across the globe, reaching diverse audiences with her ideas.
              </p>
            </div>
          </div>

          {/* Item 5 */}
          <div className={`${styles.item} animateInit delay400`}>
            <div className={styles.marker}>
              <span className={styles.icon}>✍️</span>
            </div>
            <div className={styles.content}>
              <span className={styles.year}>The Book</span>
              <h3 className={styles.title}>Debut Memoir — <em>Charting My Own Course</em></h3>
              <p className={styles.desc}>
                The culmination of a lifetime&apos;s work: a memoir that brings together personal story, scholarly depth, and a powerful invitation for readers to live more examined lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

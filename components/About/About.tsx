import Image from 'next/image';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={`${styles.about} section`} id="about">
      <div className="container">
        <div className="sectionHeader animateInit">
          <span className="sectionLabel">Biography</span>
          <h2 className="sectionTitle">About Manashi</h2>
          <div className="sectionRule"></div>
        </div>

        <div className={styles.grid}>
          {/* Text */}
          <div className="animateInit">
            <p className={styles.lead}>
              Manashi Ray is a distinguished author, researcher, and public intellectual
              whose work bridges the worlds of academia and lived experience.
            </p>
            <div className={styles.text}>
              <p>
                With a career spanning over two decades, she has dedicated herself to
                exploring the intersections of culture, identity, and social transformation.
                Her writing draws on deep scholarly rigor while remaining accessible and
                profoundly human.
              </p>
              <p>
                Born and raised with a deep appreciation for literature and inquiry,
                Manashi pursued her academic path with singular focus — earning accolades
                at every stage of her journey. Today, she is recognized internationally
                for her contributions to scholarship and public discourse.
              </p>
              <p>
                Her debut book is the culmination of years of research, reflection, and
                a passionate desire to share knowledge with the world — to spark
                conversations that matter.
              </p>
            </div>

            {/* Stats */}
            <div className={styles.stats}>
              <div className={`${styles.stat} animateInit`}>
                <span className={styles.statNumber}>20+</span>
                <span className={styles.statLabel}>Years of Research</span>
              </div>
              <div className={`${styles.stat} animateInit delay100`}>
                <span className={styles.statNumber}>50+</span>
                <span className={styles.statLabel}>Talks &amp; Lectures</span>
              </div>
              <div className={`${styles.stat} animateInit delay200`}>
                <span className={styles.statNumber}>1</span>
                <span className={styles.statLabel}>Landmark Book</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`${styles.imageCol} animateInit delay150`}>
            <div className={styles.portraitWrap}>
              <Image
                src="/manashi_portrait.png"
                alt="Manashi Ray"
                width={500}
                height={625}
                className={styles.portrait}
              />
              <div className={styles.portraitCaption}>
                <span>&quot;Every story worth telling begins with a question.&quot;</span>
              </div>
            </div>
            <div className={styles.links}>
              <a href="#" className={styles.linkPill}>Download CV</a>
              <a href="mailto:contact@manashiray.com" className={`${styles.linkPill} ${styles.linkPillGhost}`}>
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

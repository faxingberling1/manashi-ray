import Image from 'next/image';
import Link from 'next/link';
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
              Manashi Ray is a Professor of Sociology at West Virginia State University, where she has taught since 2011. Her work explores migration, identity, gender, and social inequality across national and transnational contexts.
            </p>
            <div className={styles.text}>
              <p>
                Trained at Michigan State University, where she earned her doctorate with distinction, Dr. Ray's scholarship has taken her across continents — from fieldwork among Burmese refugees in Michigan to research on transnational Indian entrepreneurs — always following the human story at the heart of complex social phenomena.
              </p>
              <p>
                Her academic career is distinguished by a rare ability to move between rigorous scholarly inquiry and deeply human storytelling. She has taught graduate and undergraduate courses spanning Social Inequality, Sociology of Gender, Sociology of Family, and the special-topics course <em>Migrants and Refugees: The American Experience</em>, shaping the intellectual lives of hundreds of students.
              </p>
              <p>
                The recipient of numerous prestigious fellowships and grants — including a fellowship at the Jawaharlal Nehru Institute of Advanced Study and the UNFPA Global Training Program at the Institute of Social Studies, The Hague — Dr. Ray brings a truly global perspective to her work. Her forthcoming memoir, <em>Charting My Own Course</em>, is the culmination of this extraordinary journey.
              </p>
            </div>

            {/* Stats */}
            <div className={styles.stats}>
              <div className={`${styles.stat} animateInit`}>
                <span className={styles.statNumber}>15+</span>
                <span className={styles.statLabel}>Years at WVSU</span>
              </div>
              <div className={`${styles.stat} animateInit delay100`}>
                <span className={styles.statNumber}>14</span>
                <span className={styles.statLabel}>Awards &amp; Honors</span>
              </div>
              <div className={`${styles.stat} animateInit delay200`}>
                <span className={styles.statNumber}>5+</span>
                <span className={styles.statLabel}>Courses Taught</span>
              </div>
              <div className={`${styles.stat} animateInit delay300`}>
                <span className={styles.statNumber}>1</span>
                <span className={styles.statLabel}>Landmark Book</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`${styles.imageCol} animateInit delay150`}>
            <div className={styles.portraitWrap}>
              <Image
                src="/web image.png"
                alt="Dr. Manashi Ray, Professor of Sociology"
                width={500}
                height={625}
                className={styles.portrait}
              />
              <div className={styles.portraitCaption}>
                <span>&ldquo;Every story worth telling begins with a question.&rdquo;</span>
              </div>
            </div>
            <div className={styles.links}>
              <a
                href="/CV-Manashi-Ray.pdf"
                className={styles.linkPill}
                target="_blank"
                rel="noopener noreferrer"
                download="CV-Manashi-Ray.pdf"
              >
                ↓ Download CV
              </a>
              <Link href="/contact" className={`${styles.linkPill} ${styles.linkPillGhost}`}>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

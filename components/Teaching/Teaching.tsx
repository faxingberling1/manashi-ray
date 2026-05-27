import styles from './Teaching.module.css';

export default function Teaching() {
  return (
    <section className={`${styles.teaching} section`} id="teaching">
      <div className="container">
        <div className="sectionHeader animateInit">
          <span className="sectionLabel">Experience</span>
          <h2 className="sectionTitle">Teaching</h2>
          <div className="sectionRule"></div>
        </div>

        <div className={styles.grid}>
          {/* Positions */}
          <div className={`${styles.card} animateInit`}>
            <h3 className={styles.cardTitle}>Academic Positions</h3>
            
            <div className={styles.position}>
              <span className={styles.year}>2011 – Present</span>
              <h4 className={styles.role}>Professor of Sociology</h4>
              <p className={styles.dept}>Department of Psychology and Sociology<br />West Virginia State University</p>
            </div>

            <div className={styles.position}>
              <span className={styles.year}>2010 – 2011</span>
              <h4 className={styles.role}>Visiting Assistant Professor</h4>
              <p className={styles.dept}>Department of Sociology, Anthropology and Social Work<br />Central Michigan University</p>
            </div>

            <div className={styles.position}>
              <span className={styles.year}>2009 – 2010</span>
              <h4 className={styles.role}>Adjunct Faculty</h4>
              <p className={styles.dept}>Department of Sociology<br />Saginaw Valley State University</p>
            </div>
          </div>

          {/* Courses */}
          <div className={`${styles.card} animateInit delay100`}>
            <h3 className={styles.cardTitle}>Courses Taught</h3>
            
            <div className={styles.courseGroup}>
              <h4 className={styles.courseLevel}>Graduate Courses</h4>
              <ul className={styles.courseList}>
                <li>Sociology of Organization</li>
              </ul>
            </div>

            <div className={styles.courseGroup}>
              <h4 className={styles.courseLevel}>Undergraduate Courses</h4>
              <ul className={styles.courseList}>
                <li>Social Inequality</li>
                <li>Sociology of Family</li>
                <li>Sociology of Gender</li>
                <li>Migrants and Refugees: The American Experience <em>(Special Topic)</em></li>
                <li>Introduction to Sociology</li>
              </ul>
            </div>

            <div className={styles.skills}>
              <span className={styles.skillsIcon}>💻</span>
              <p><strong>Proficient in Online Teaching:</strong> Sakai &amp; Moodle</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

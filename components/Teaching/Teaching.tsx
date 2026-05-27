import styles from './Teaching.module.css';

const positions = [
  {
    period: '2011 – Present',
    role: 'Professor of Sociology',
    dept: 'Department of Psychology and Sociology',
    institution: 'West Virginia State University',
    current: true,
  },
  {
    period: '2010 – 2011',
    role: 'Visiting Assistant Professor',
    dept: 'Department of Sociology, Anthropology and Social Work',
    institution: 'Central Michigan University',
    current: false,
  },
  {
    period: '2009 – 2010',
    role: 'Adjunct Faculty',
    dept: 'Department of Sociology',
    institution: 'Saginaw Valley State University',
    current: false,
  },
];

const courses = {
  graduate: ['Sociology of Organization'],
  undergraduate: [
    'Social Inequality',
    'Sociology of Family',
    'Sociology of Gender',
    'Migrants and Refugees: The American Experience',
    'Introduction to Sociology',
  ],
};

export default function Teaching() {
  return (
    <section className={`${styles.teaching} section`} id="teaching">
      <div className="container">
        <div className="sectionHeader animateInit">
          <span className="sectionLabel">Academics</span>
          <h2 className="sectionTitle">Teaching</h2>
          <div className="sectionRule"></div>
          <p className={styles.intro}>
            Over 15 years of dedicated classroom experience spanning three distinguished institutions,
            shaping students across graduate and undergraduate levels.
          </p>
        </div>

        {/* Career Timeline */}
        <div className={`${styles.timeline} animateInit`}>
          {positions.map((pos, i) => (
            <div key={i} className={`${styles.timelineItem} ${pos.current ? styles.current : ''}`}>
              <div className={styles.timelineLeft}>
                <span className={styles.period}>{pos.period}</span>
                {pos.current && <span className={styles.currentBadge}>Current</span>}
              </div>
              <div className={styles.timelineNode}>
                <div className={styles.nodeDot} />
                {i < positions.length - 1 && <div className={styles.nodeLine} />}
              </div>
              <div className={styles.timelineRight}>
                <h3 className={styles.posRole}>{pos.role}</h3>
                <p className={styles.posDept}>{pos.dept}</p>
                <p className={styles.posInstitution}>{pos.institution}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Courses + Skills */}
        <div className={`${styles.bottom} animateInit delay200`}>
          {/* Graduate */}
          <div className={styles.courseCard}>
            <div className={styles.courseCardHeader}>
              <span className={styles.courseCardIcon}>📘</span>
              <h4 className={styles.courseCardTitle}>Graduate Courses</h4>
            </div>
            <div className={styles.tags}>
              {courses.graduate.map((c) => (
                <span key={c} className={`${styles.tag} ${styles.tagGold}`}>{c}</span>
              ))}
            </div>
          </div>

          {/* Undergraduate */}
          <div className={styles.courseCard}>
            <div className={styles.courseCardHeader}>
              <span className={styles.courseCardIcon}>📗</span>
              <h4 className={styles.courseCardTitle}>Undergraduate Courses</h4>
            </div>
            <div className={styles.tags}>
              {courses.undergraduate.map((c) => (
                <span key={c} className={styles.tag}>{c}</span>
              ))}
            </div>
          </div>

          {/* Online Platforms */}
          <div className={styles.platformCard}>
            <span className={styles.platformIcon}>💻</span>
            <div>
              <h4 className={styles.platformTitle}>Proficient in Online Teaching</h4>
              <div className={styles.platformTags}>
                <span className={styles.platformTag}>Sakai</span>
                <span className={styles.platformTag}>Moodle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

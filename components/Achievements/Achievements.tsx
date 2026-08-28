import Link from 'next/link';
import styles from './Achievements.module.css';

const awards = [
  {
    category: 'International Fellowships',
    icon: '🌍',
    items: [
      {
        year: '1992 – 1993',
        title: 'United Nations Population Fund (UNFPA) Fellowship',
        detail: 'Global Training Program in Population and Sustainable Development',
        org: 'Institute of Social Studies, The Hague, The Netherlands',
      },
      {
        year: '1992 – 1993',
        title: 'Rafael Salas Memorial Scholarship',
        detail: 'In recognition of outstanding academic performance',
        org: 'United Nations Population Fund (UNFPA)',
      },
      {
        year: '1994 – 1995',
        title: 'Visiting Scholar Fellowship',
        detail: '',
        org: 'Institute of Rural Management, Anand, Gujarat, India',
      },
      {
        year: '2019',
        title: 'Fellowship',
        detail: 'Jawaharlal Nehru Institute of Advanced Study',
        org: 'Jawaharlal Nehru University, New Delhi',
      },
      {
        year: '2012 – 2013',
        title: 'Travel Grant , RC 31 Research Committee',
        detail: 'ISA World Congress of Sociology, Yokohama, Japan',
        org: 'International Sociological Association',
      },
    ],
  },
  {
    category: 'University Grants & Research Awards',
    icon: '🏛️',
    items: [
      {
        year: '2017–18 & 2021–22',
        title: 'Promoting Excellence in Education through Research (PEER) Grant',
        detail: 'Book project: Becoming Boundless: The Story of Transnational Indian Entrepreneurs',
        org: 'West Virginia State University',
      },
      {
        year: '2012 – 2013',
        title: 'Promoting Excellence in Education through Research (PEER) Grant',
        detail: 'Burmese Refugee Research Program',
        org: 'West Virginia State University',
      },
      {
        year: '2011–13 & 2014–15',
        title: 'Faculty Research and Development Fund',
        detail: 'Research on Burmese Refugees at Battle Creek, Michigan',
        org: 'West Virginia State University',
      },
    ],
  },
  {
    category: 'Graduate Honors & Scholarships',
    icon: '🎓',
    items: [
      {
        year: '2008 – 2009',
        title: 'The S. C. Lee Best Graduate Paper Award',
        detail: '',
        org: 'Asian Studies Center, Michigan State University',
      },
      {
        year: '2008 – 2009',
        title: 'Dissertation Completion Award',
        detail: '',
        org: 'College of Social Science, Michigan State University',
      },
      {
        year: '2007 – 2008',
        title: 'The Jay Artis Endowment Fund for Graduate Studies in Sociology',
        detail: '',
        org: 'Michigan State University',
      },
      {
        year: '2007 – 2008',
        title: 'Graduate Student Research Enhancement Award',
        detail: '',
        org: 'Graduate School, Michigan State University',
      },
      {
        year: '2007–08 & 2003–05',
        title: 'Decker-Muns Friendship Memorial Scholarship',
        detail: 'In recognition of accomplishments, community involvement and perspective on disability',
        org: 'Resource Center for Persons with Disabilities, Michigan State University',
      },
      {
        year: '2000 – 2002',
        title: 'Graduate School Fellowship, Recruitment Award',
        detail: '',
        org: 'Michigan State University',
      },
    ],
  },
];

export default function Achievements() {
  return (
    <section className={`${styles.achievements} section`} id="achievements">
      <div className="container">
        <Link href="/my-other-self" className={styles.backButton}>
          ← Back to My &ldquo;Other Self&rdquo;
        </Link>
        <div className={`sectionHeader animateInit`}>
          <span className="sectionLabel">Recognition</span>
          <h2 className="sectionTitle">My Other Self</h2>
          <div className="sectionRule"></div>
          <p className={styles.intro}>
            A career marked by distinction , from international fellowships at The Hague to
            national recognition at Michigan State and sustained research funding at West Virginia State University.
          </p>
        </div>

        <div className={styles.groups}>
          {awards.map((group, gi) => (
            <div key={gi} className={`${styles.group} animateInit`} style={{ transitionDelay: `${gi * 100}ms` }}>
              <div className={styles.groupHeader}>
                <span className={styles.groupIcon}>{group.icon}</span>
                <h3 className={styles.groupTitle}>{group.category}</h3>
                <span className={styles.groupCount}>{group.items.length}</span>
              </div>

              <div className={styles.groupItems}>
                {group.items.map((item, ii) => (
                  <div key={ii} className={styles.awardCard}>
                    <div className={styles.awardIndex}>{String(ii + 1).padStart(2, '0')}</div>
                    <div className={styles.awardBody}>
                      <div className={styles.awardMeta}>
                        <span className={styles.awardYear}>{item.year}</span>
                        {item.org && <span className={styles.awardOrg}>{item.org}</span>}
                      </div>
                      <h4 className={styles.awardTitle}>{item.title}</h4>
                      {item.detail && <p className={styles.awardDetail}>{item.detail}</p>}
                    </div>
                    <div className={styles.awardAccent} aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

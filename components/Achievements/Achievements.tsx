import styles from './Achievements.module.css';

export default function Achievements() {
  const awards = [
    { year: '2019', title: 'Fellowship', org: 'Jawaharlal Nehru Institute of Advanced Study, Jawaharlal Nehru University, New Delhi' },
    { year: '2017–18 & 2021–22', title: 'Promoting Excellence in Education through Research (PEER) Grant', org: 'West Virginia State University for book project: Becoming Boundless: The Story of Transnational Indian Entrepreneurs' },
    { year: '2012–13', title: 'Travel Grant from RC 31 Research Committee', org: 'International Sociological Association for attending the ISA World Congress of Sociology, Yokohama, Japan' },
    { year: '2012–13', title: 'Promoting Excellence in Education through Research (PEER) Grant', org: 'West Virginia State University for Burmese Refugee Research Program' },
    { year: '2011–13 & 2014–15', title: 'Faculty Research and Development Fund', org: 'West Virginia State University for research on Burmese Refugees at Battle creek, Michigan' },
    { year: '2008–09', title: 'The S. C. Lee Best Graduate Paper Award', org: 'Asian Studies Center, Michigan State University' },
    { year: '2008–09', title: 'Dissertation Completion Award', org: 'College of Social Science, Michigan State University' },
    { year: '2007–08', title: 'The Jay Artis Endowment Fund for Graduate Studies in Sociology', org: 'Michigan State University' },
    { year: '2007–08', title: 'Graduate Student Research Enhancement Award', org: 'Graduate School, Michigan State University' },
    { year: '2007–08 & 2003–05', title: 'Decker-Muns Friendship Memorial Scholarship', org: 'In recognition of accomplishments, community involvement and perspective on disability by Resource Center for Persons with Disabilities, Michigan State University' },
    { year: '2000–02', title: 'Graduate School Fellowship, Recruitment Award', org: 'Michigan State University' },
    { year: '1994–95', title: 'Visiting Scholar Fellowship', org: 'Institute of Rural Management, Anand, Gujarat, India' },
    { year: '1992–93', title: 'Rafael Salas Memorial Scholarship', org: 'United Nations Population Fund, in recognition of outstanding academic performance' },
    { year: '1992–93', title: 'United Nations Population Fund (UNFPA) Fellowship', org: 'Global Training Program in Population and Sustainable Development, Institute of Social Studies, The Hague, The Netherlands' }
  ];

  return (
    <section className={`${styles.achievements} section`} id="achievements">
      <div className="container">
        <div className="sectionHeader animateInit">
          <span className="sectionLabel">Recognition</span>
          <h2 className="sectionTitle">Awards &amp; Honors</h2>
          <div className="sectionRule"></div>
        </div>

        <div className={styles.list}>
          {awards.map((award, index) => (
            <div key={index} className={`${styles.item} animateInit`} style={{ transitionDelay: `${(index % 5) * 50}ms` }}>
              <div className={styles.yearCol}>
                <span className={styles.year}>{award.year}</span>
              </div>
              <div className={styles.contentCol}>
                <h3 className={styles.title}>{award.title}</h3>
                <p className={styles.org}>{award.org}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import styles from './Publications.module.css';

const expertise = [
  'International Migration',
  'Transnationalism',
  'Network Analysis',
  'Social Stratification & Mobility',
  'Gender Studies',
  'Ethnic Studies',
  'South Asia',
  'Refugee Studies',
];

const peerReviewed = [
  {
    year: '2019',
    citation: 'Ray, Manashi',
    title: 'Experiences of Empowerment and Constraint: Narratives of Transnational Indian Women Entrepreneurs',
    venue: 'Routledge Handbook of Indian Transnationalism',
    detail: 'edited by Ajaya Sahoo and Bandana Purkayastha',
    type: 'Book Chapter',
  },
  {
    year: '2017',
    citation: 'Ray, Manashi',
    title: 'Crossing borders: family migration strategies and routes from Burma to the US',
    venue: 'Journal of Ethnic and Migration Studies',
    detail: 'Vol 44, Issue No. 5, p. 773–791. DOI: 10.1080/1369183X.2017.1314815',
    type: 'Journal Article',
  },
  {
    year: '2013',
    citation: 'Ray, Manashi',
    title: 'The Global Circulation of Skill and Capital – Pathways of return migration of Indian Entrepreneurs from the United States to India',
    venue: 'Diaspora Engagement and Development in South Asia',
    detail: 'edited by Tan Tai Yong and Md Mizanur Rahman, Palgrave Macmillan. p. 75–102',
    type: 'Book Chapter',
  },
  {
    year: '2008',
    citation: 'Ray, Manashi (with Shobha Raghuram)',
    title: 'Poverty Eradication – South Asia\'s Burdens: A Question of Urgent Redressal',
    venue: 'Does Culture Make A Difference? Progress and Development in India and Its Implications for International Cooperation',
    detail: 'edited by Martin Wade, Seagull Books, Calcutta',
    type: 'Book Chapter',
  },
  {
    year: '1999',
    citation: 'Ray, Manashi (with Shobha Raghuram)',
    title: 'The State and Civil Society: Meeting Health Needs, Reaching Equity',
    venue: 'Development',
    detail: 'Vol. 42, No. 4. p. 54–85',
    type: 'Journal Article',
  },
  {
    year: '1995',
    citation: 'Ray, Manashi',
    title: 'The Economics of Population and Development',
    venue: 'Economic and Political Weekly',
    detail: 'Special Article; September 9th. Sameeksha Trust Publication, Vol. XXX, p. 2263–2269. Also listed in Population Index, Vol. 62, No. 2, Princeton University Library.',
    type: 'Journal Article',
  },
];

const encyclopedia = [
  {
    year: '2012',
    citation: 'Ray, Manashi',
    title: 'Brain Drain',
    venue: 'Encyclopedia of Globalization',
    detail: 'edited by George Ritzer, Oxford, Wiley-Blackwell. DOI: 10.1002/9780470670590.wbeog053',
    type: 'Encyclopedia Entry',
  },
];

const other = [
  {
    year: '2013',
    citation: 'Ray, Manashi',
    title: 'Book Review: "The Immigration and Settlement of Asian Indians in Phoenix, Arizona 1965–2011: Ethnic Pride vs. Racial Discrimination in the Suburbs" by Emily Skop',
    venue: 'Asia and Pacific Migration Journal',
    detail: 'Vol. 22, No. 4, pp. 573–76',
    type: 'Book Review',
  },
  {
    year: '2003',
    citation: 'Ray, Manashi (with Shobha Raghuram)',
    title: 'The Necessity for Compulsory School Education in Social Development – An Overview',
    venue: 'Hivos Monograph',
    detail: '',
    type: 'Monograph',
  },
  {
    year: '2000',
    citation: 'Ray, Manashi (with Shobha Raghuram)',
    title: 'The State and Civil Society: Meeting Health Needs, Reaching Equity',
    venue: 'Hivos Technical Report Series 1.8',
    detail: '',
    type: 'Report',
  },
  {
    year: '1995',
    citation: 'Ray, Manashi',
    title: 'Shifting the Population Policy: From Numbers to People',
    venue: 'The Economic Times',
    detail: 'Publication of the Times Group, India. August 20, 1995',
    type: 'Newspaper',
  },
  {
    year: '1995',
    citation: 'Ray, Manashi',
    title: 'Women Managers in the Rural Sector',
    venue: 'IRMA Working Paper, WP-88',
    detail: 'Institute of Rural Management, Anand, India',
    type: 'Working Paper',
  },
  {
    year: '1993',
    citation: 'Ray, Manashi',
    title: 'Characteristics of Growth of the Urban Population in India during 1981–1991',
    venue: 'Institute of Social Studies',
    detail: 'The Hague, The Netherlands',
    type: 'Report',
  },
  {
    year: '1992',
    citation: 'Ray, Manashi',
    title: 'Effectiveness of Adult Education Program among Women Learners in West Bengal',
    venue: 'Tata Institute of Social Sciences',
    detail: 'Bombay, India',
    type: 'Report',
  },
];

type TypeBadgeProps = { type: string };
function TypeBadge({ type }: TypeBadgeProps) {
  const colorMap: Record<string, string> = {
    'Journal Article': styles.badgeJournal,
    'Book Chapter':    styles.badgeBook,
    'Encyclopedia Entry': styles.badgeEncyclopedia,
    'Book Review':     styles.badgeReview,
    'Monograph':       styles.badgeMonograph,
    'Report':          styles.badgeReport,
    'Working Paper':   styles.badgeWorking,
    'Newspaper':       styles.badgeNewspaper,
  };
  return <span className={`${styles.badge} ${colorMap[type] ?? ''}`}>{type}</span>;
}

type PubItemProps = { item: typeof peerReviewed[0]; index: number };
function PubItem({ item, index }: PubItemProps) {
  return (
    <div className={styles.pubItem}>
      <div className={styles.pubIndex}>{String(index + 1).padStart(2, '0')}</div>
      <div className={styles.pubBody}>
        <div className={styles.pubMeta}>
          <span className={styles.pubYear}>{item.year}</span>
          <TypeBadge type={item.type} />
        </div>
        <p className={styles.pubCitation}>{item.citation}</p>
        <h4 className={styles.pubTitle}>&ldquo;{item.title}&rdquo;</h4>
        <p className={styles.pubVenue}>{item.venue}{item.detail ? `. ${item.detail}` : '.'}</p>
      </div>
    </div>
  );
}

export default function Publications() {
  return (
    <div className={styles.wrapper}>
      {/* Expertise */}
      <section className={`${styles.expertiseSection} section`}>
        <div className="container">
          <div className="sectionHeader animateInit">
            <span className="sectionLabel">Scholarship</span>
            <h1 className="sectionTitle">Research &amp; Writing</h1>
            <div className="sectionRule"></div>
          </div>

          <div className={`${styles.expertiseBox} animateInit`}>
            <h2 className={styles.expertiseTitle}>Areas of Expertise</h2>
            <div className={styles.expertiseTags}>
              {expertise.map((e) => (
                <span key={e} className={styles.expertiseTag}>{e}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Book in Progress */}
      <section className={`${styles.manuscriptSection} section`}>
        <div className="container">
          <div className={`${styles.manuscript} animateInit`}>
            <div className={styles.manuscriptLabel}>
              <span>📖</span>
              <span>Book Manuscript in Progress</span>
            </div>
            <h2 className={styles.manuscriptTitle}>
              Becoming Boundless: The Story of Transnational Indian Entrepreneurs
            </h2>
            <p className={styles.manuscriptDesc}>
              Drawing on years of research, interviews, and fieldwork, this book explores how Indian entrepreneurs navigate borders, capital, and identity in the 21st-century global economy.
            </p>
          </div>
        </div>
      </section>

      {/* Peer-Reviewed */}
      <section className={`${styles.pubSection} section`}>
        <div className="container">
          <div className="sectionHeader animateInit">
            <span className="sectionLabel">Publications</span>
            <h2 className="sectionTitle">Peer-Reviewed Articles &amp; Book Chapters</h2>
            <div className="sectionRule"></div>
          </div>
          <div className={`${styles.pubList} animateInit`}>
            {peerReviewed.map((item, i) => (
              <PubItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Encyclopedia */}
      <section className={`${styles.pubSection} section`} style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="sectionHeader animateInit">
            <span className="sectionLabel">Reference Works</span>
            <h2 className="sectionTitle">Encyclopedia Entry</h2>
            <div className="sectionRule"></div>
          </div>
          <div className={`${styles.pubList} animateInit`}>
            {encyclopedia.map((item, i) => (
              <PubItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Other */}
      <section className={`${styles.pubSection} section`} style={{ paddingTop: 0, paddingBottom: '5rem' }}>
        <div className="container">
          <div className="sectionHeader animateInit">
            <span className="sectionLabel">Other Writing</span>
            <h2 className="sectionTitle">Book Reviews, Reports &amp; Working Papers</h2>
            <div className="sectionRule"></div>
          </div>
          <div className={`${styles.pubList} animateInit`}>
            {other.map((item, i) => (
              <PubItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

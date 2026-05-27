import styles from './Lectures.module.css';

const invitedTalks = [
  {
    year: '2020',
    title: 'Discussant — Plenary Session on Migration and the Politics of Borders',
    event: 'Sociologists for Women in Society (Winter Meeting)',
    location: 'San Diego, CA',
    date: 'February 1',
  },
  {
    year: '2019',
    title: 'The Disruptors – Returnee Transnational Entrepreneurs in India',
    event: 'Jawaharlal Nehru Institute of Advanced Study',
    location: 'Jawaharlal Nehru University, New Delhi',
    date: 'March 12 — organized by Diaspora, International Migration Program (CAS) and Organization for Diaspora Initiatives (ODI)',
  },
  {
    year: '2019',
    title: 'The Disruptors – Returnee Transnational Entrepreneurs in India & Escaping Gender Roles or Seeking Compromise? Changing the Narrative of Womenpreneurs',
    event: 'University of Hyderabad',
    location: 'Hyderabad, India',
    date: 'January 29–30 — organized by UGC Centre for the Study of Indian Diaspora and Centre for Women\'s Study',
  },
  {
    year: '2017',
    title: 'Migration of Chin-Refugees from Their Homeland to the US',
    event: 'St. Xavier\'s College',
    location: 'Kolkata, India',
    date: 'July 13',
  },
  {
    year: '2009',
    title: 'Social and Human Capital at Work – A Case of Transnational Asian Indian Entrepreneurs in the Global Economy',
    event: 'Asian Studies Center, Michigan State University',
    location: 'East Lansing, MI',
    date: 'March 26',
  },
  {
    year: '2008',
    title: 'Rethinking Identity in Transnational Spaces',
    event: 'Global Urban Studies Program Workshop, Michigan State University',
    location: 'East Lansing, MI',
    date: 'November 25',
  },
  {
    year: '2004',
    title: 'The Role of Women\'s Rights and Empowerment in Global Economic Development',
    event: 'United Nations Day — 59th Year Anniversary Celebration',
    location: 'Michigan State University International Center, East Lansing',
    date: 'October 24',
  },
];

const conferenceGroups: { year: string; papers: { title: string; session: string; event: string }[] }[] = [
  {
    year: '2023',
    papers: [
      {
        title: 'Social Mobility in Transnational Spaces: Subjective Perceptions of Indian Women Entrepreneurs',
        session: 'Social and Spatial Mobility: New Entanglements of Class and Migration',
        event: 'XX ISA World Congress of Sociology, Melbourne, Australia — June 25–July 1',
      },
      {
        title: 'To Flee or Not to Flee? Im/Mobility Among Ukrainian Glass Artists and Entrepreneurs',
        session: 'The Social Economy of Migrant Labor — Improving Social Protections to End Exploitation',
        event: 'XX ISA World Congress of Sociology, Melbourne, Australia — June 25–July 1',
      },
    ],
  },
  {
    year: '2021',
    papers: [
      {
        title: 'Ambiguities and Complexities of Selective Adaptation Among Transnational Indian American Entrepreneurs',
        session: 'Diversification in Migrant (Non)adaptation',
        event: 'IV ISA Forum of Sociology, Porto Alegre, Brazil — Feb 23–27',
      },
      {
        title: 'Not to be \'Outpaced\' Nor \'Underestimated\': Transnational Lives of Indian Women Entrepreneurs',
        session: 'Gendered Resistances in Postcolonial and Transnational Context',
        event: 'IV ISA Forum of Sociology, Porto Alegre, Brazil — Feb 23–27',
      },
    ],
  },
  {
    year: '2018',
    papers: [
      {
        title: 'Reproducing Inequalities or Promoting Upward Mobility? A Case of Transnational Asian-Indian Entrepreneurs',
        session: 'International Mobility and Social Stratification',
        event: 'ISA World Congress of Sociology, Toronto, Canada — July 15–21',
      },
    ],
  },
  {
    year: '2016',
    papers: [
      {
        title: 'What we eat makes us who we are! The food practices and transnational identity of Burmese refugee families in Battle Creek, Michigan',
        session: 'Food in Social Life: Mini Conference on Sociology of Food',
        event: 'Eastern Sociological Association Annual Meeting, Boston — March 17–20',
      },
    ],
  },
  {
    year: '2014',
    papers: [
      {
        title: 'Navigating the Myanmar–Thailand–Malaysia border: The escape strategies of Burmese refugees from Chin State, Myanmar, to Battle Creek, Michigan',
        session: 'XVIII ISA World Congress of Sociology',
        event: 'Yokohama, Japan — July 13–19',
      },
    ],
  },
  {
    year: '2012',
    papers: [
      {
        title: 'The latent power of Networks: the routes of re-migration of returnee entrepreneurs from the United States to India in the 21st century',
        session: 'Invited Workshop: Diaspora and Development: South Asian Diaspora Engagement in South Asia',
        event: 'Institute of South Asian Studies (ISAS), National University of Singapore — Sept 27–28',
      },
      {
        title: 'How did I get here? – The cultural and social moorings of business behavior among Asian Indian women entrepreneurs in the 21st century',
        session: 'Work/Life Balance',
        event: 'Eastern Sociological Association Annual Meeting, New York — Feb 23–26',
      },
    ],
  },
  {
    year: '2011',
    papers: [
      {
        title: 'A Balancing Act! – The World of Transnational Indian Women Entrepreneurs',
        session: 'South Asian American Female Consumptions',
        event: 'Asian American Studies Annual Conference, New Orleans — May 18–21',
      },
      {
        title: 'Is Accessing Global Markets easier than ever in the 21st century? A comparative study of U.S. based returnee and non-migrant transnational Indian entrepreneurs in India',
        session: 'Highly Skilled Migration in the 21st Century',
        event: 'Eastern Sociological Association Annual Meeting, Philadelphia — February 24–27',
      },
    ],
  },
  {
    year: '2010',
    papers: [
      {
        title: 'Transcending National Borders for Global Markets: A comparison of Immigrant and non-migrant transnational Indian entrepreneurs in high tech and consumer goods sectors',
        session: 'Transnational Entrepreneurs: Old and New',
        event: '22nd Society for the Advancement of Socio-Economics Annual Meeting, Philadelphia — June 24–26',
      },
      {
        title: 'Negotiating Identity as \'Transnationals\': The contextual intersection of multi-state membership and identity among the immigrant and returnee entrepreneurs in the U.S. and India',
        session: 'Religion and Ethnicity in India',
        event: '38th National Association for Ethnic Studies Annual Conference, Washington D.C. — April 8–10',
      },
    ],
  },
  {
    year: '2008',
    papers: [
      {
        title: '"I can talk Baseball with an average American and Cricket with an Indian!" – The Construction of Symbolic Identity by Professional Asian Indian Immigrants in the United States',
        session: 'Individual Paper Presentation',
        event: 'Asian American Studies Annual Conference, Chicago — April 16–20',
      },
    ],
  },
];

export default function Lectures() {
  return (
    <div>
      {/* Invited Talks */}
      <section className={`${styles.invitedSection} section`}>
        <div className="container">
          <div className="sectionHeader animateInit">
            <span className="sectionLabel">Public Engagement</span>
            <h1 className="sectionTitle">Invited Talks</h1>
            <div className="sectionRule"></div>
          </div>

          <div className={styles.talksList}>
            {invitedTalks.map((talk, i) => (
              <div key={i} className={`${styles.talkCard} animateInit`} style={{ transitionDelay: `${(i % 4) * 60}ms` }}>
                <div className={styles.talkYear}>{talk.year}</div>
                <div className={styles.talkBody}>
                  <h3 className={styles.talkTitle}>{talk.title}</h3>
                  <p className={styles.talkEvent}>{talk.event}</p>
                  <div className={styles.talkMeta}>
                    <span className={styles.talkLocation}>📍 {talk.location}</span>
                    {talk.date && <span className={styles.talkDate}>🗓 {talk.date}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conference Presentations */}
      <section className={`${styles.conferenceSection} section`}>
        <div className="container">
          <div className="sectionHeader animateInit">
            <span className="sectionLabel">Academic Conferences</span>
            <h2 className="sectionTitle">Conference Presentations</h2>
            <div className="sectionRule"></div>
          </div>

          <div className={styles.confGroups}>
            {conferenceGroups.map((group, gi) => (
              <div key={gi} className={`${styles.confGroup} animateInit`} style={{ transitionDelay: `${(gi % 4) * 60}ms` }}>
                <div className={styles.confYear}>{group.year}</div>
                <div className={styles.confPapers}>
                  {group.papers.map((paper, pi) => (
                    <div key={pi} className={styles.confPaper}>
                      <h3 className={styles.confTitle}>&ldquo;{paper.title}&rdquo;</h3>
                      <p className={styles.confSession}>Session: <em>{paper.session}</em></p>
                      <p className={styles.confEvent}>{paper.event}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

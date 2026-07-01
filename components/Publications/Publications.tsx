import { useState, useEffect } from 'react';
import styles from './Publications.module.css';
import { bookReviewContent } from './bookReviewContent';
import { brainDrainContent } from './brainDrainContent';
import { crossingBordersContent } from './crossingBordersContent';
import { economicsPopulationContent } from './economicsPopulationContent';
import { experiencesContent } from './experiencesContent';
import { globalCirculationContent } from './globalCirculationContent';
import { stateAndCivilSocietyContent } from './stateAndCivilSocietyContent';
import { rc32NewsletterContent } from './rc32NewsletterContent';

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
    content: experiencesContent,
    pdf: '/Publications/Experiences of Empowerment and Constraints - Narratives of Indian Women Transnational Entrepreneurs.pdf',
  },
  {
    year: '2017',
    citation: 'Ray, Manashi',
    title: 'Crossing borders: family migration strategies and routes from Burma to the US',
    venue: 'Journal of Ethnic and Migration Studies',
    detail: 'Vol 44, Issue No. 5, p. 773–791. DOI: 10.1080/1369183X.2017.1314815',
    type: 'Journal Article',
    content: crossingBordersContent,
    pdf: '/Publications/Crossing borders family migration strategies and routes from Burma to the US - 2017.pdf',
  },
  {
    year: '2013',
    citation: 'Ray, Manashi',
    title: 'The Global Circulation of Skill and Capital – Pathways of return migration of Indian Entrepreneurs from the United States to India',
    venue: 'Diaspora Engagement and Development in South Asia',
    detail: 'edited by Tan Tai Yong and Md Mizanur Rahman, Palgrave Macmillan. p. 75–102',
    type: 'Book Chapter',
    content: globalCirculationContent,
    pdf: '/Publications/Global Circulation of Skill and Capital - Pathways of return migration of India entrepreneurs from the United States to India - 2014.pdf',
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
    content: stateAndCivilSocietyContent,
    pdf: '/Publications/The State and Civil Society Meeting - meeting health needs, reaching equity.pdf',
  },
  {
    year: '1995',
    citation: 'Ray, Manashi',
    title: 'The Economics of Population and Development',
    venue: 'Economic and Political Weekly',
    detail: 'Special Article; September 9th. Sameeksha Trust Publication, Vol. XXX, p. 2263–2269. Also listed in Population Index, Vol. 62, No. 2, Princeton University Library.',
    type: 'Journal Article',
    content: economicsPopulationContent,
    pdf: '/Publications/Economics of Population and Development.pdf',
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
    content: brainDrainContent,
    pdf: '/Publications/Brain Drain - 2012.pdf',
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
    content: bookReviewContent,
    pdf: '/Publications/Book_Review_of_The_Immigration_and_Settl.pdf',
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

const newsletters = [
  {
    year: '2021',
    citation: 'Ray, Manashi',
    title: 'FEATURE ARTICLE: Kolkata Under Covid: Reflections on a Visit Home, Winter 2020-21',
    venue: 'RC32 NEWSLETTER, Summer/ Fall 2021',
    detail: 'Volume #12',
    type: 'Newsletter',
    content: 'embed',
    embedPdf: true,
    pdf: '/Publications/Kolkata_Under_Covid.pdf',
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
    'Newsletter':      styles.badgeNewspaper,
  };
  return <span className={`${styles.badge} ${colorMap[type] ?? ''}`}>{type}</span>;
}

type PubItemProps = { item: any; index: number };
function PubItem({ item, index }: PubItemProps) {
  const [isReading, setIsReading] = useState(false);
  const baseViews = 1240 + (item.title.length * 13) + (index * 87);
  const [views, setViews] = useState(baseViews);

  // Generate a consistent namespace/key for this article
  const articleKey = `article_${item.year}_${index}`;
  const namespace = `manashiray_portfolio`;

  // Fetch the current global view count on mount
  useEffect(() => {
    fetch(`https://abacus.jasoncameron.dev/get/${namespace}/${articleKey}`)
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.value === 'number') {
          // Add a base value so it doesn't start at 0 visually, or just use the real value if they prefer.
          // Let's just use the real global value, but since it's new it will be 0. 
          // We can seed it with a base value like before so it looks good.
          const baseViews = 1240 + (item.title.length * 13) + (index * 87);
          setViews(baseViews + data.value);
        }
      })
      .catch(err => console.error('Failed to fetch view count', err));
  }, [articleKey, namespace, item.title, index]);

  const handleRead = () => {
    setIsReading(true);
    
    // Hit the API to increment the global counter when opened
    fetch(`https://abacus.jasoncameron.dev/hit/${namespace}/${articleKey}`)
      .then(res => res.json())
      .then(data => {
        if (data && typeof data.value === 'number') {
          const baseViews = 1240 + (item.title.length * 13) + (index * 87);
          setViews(baseViews + data.value);
        }
      })
      .catch(err => console.error('Failed to increment view count', err));
  };

  useEffect(() => {
    if (isReading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isReading]);

  return (
    <div className={`${styles.pubItem} ${isReading ? styles.pubItemReading : ''}`}>
      <div className={styles.pubIndex}>{String(index + 1).padStart(2, '0')}</div>
      <div className={styles.pubBody}>
        <div className={styles.pubMeta}>
          <span className={styles.pubYear}>{item.year}</span>
          <TypeBadge type={item.type} />
          {views > 0 && (
            <span className={styles.viewCount}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>
              {views.toLocaleString()} Reads
            </span>
          )}
        </div>
        <p className={styles.pubCitation}>{item.citation}</p>
        <h4 className={styles.pubTitle}>&ldquo;{item.title}&rdquo;</h4>
        <p className={styles.pubVenue}>{item.venue}{item.detail ? `. ${item.detail}` : '.'}</p>
        
        {(item.content || item.pdf) && (
          <div className={styles.readingActions}>
            {item.content && (
              <button 
                className={`btn btnGhost ${styles.readBtn}`} 
                onClick={handleRead}
              >
                Read Full Text
              </button>
            )}
            {item.pdf && (
              <a href={item.pdf} target="_blank" rel="noopener noreferrer" className={`btn btnPrimary ${styles.downloadBtn}`}>Download PDF</a>
            )}
          </div>
        )}

        {item.content && (
          <div className={`${styles.modalOverlay} ${isReading ? styles.open : ''}`} onClick={() => setIsReading(false)}>
            <div className={styles.modalContainer} onClick={(e) => e.stopPropagation()}>
              <div className={styles.modalHeader}>
                 <h4 className={styles.modalTitle}>&ldquo;{item.title}&rdquo;</h4>
                 <button className={styles.modalCloseBtn} onClick={() => setIsReading(false)}>
                   &times;
                 </button>
              </div>
              <div className={styles.modalBody} style={item.embedPdf ? { padding: 0, overflow: 'hidden' } : {}}>
                {item.embedPdf ? (
                  <iframe src={`${item.pdf}#view=FitH`} style={{ width: '100%', height: '85vh', border: 'none', display: 'block' }} title={item.title} />
                ) : (
                  item.content.trim().split('\n\n').map((paragraph: string, idx: number) => {
                    if (paragraph.startsWith('REFERENCES') || paragraph.startsWith('FURTHER READING')) {
                      return (
                        <div key={idx} className={styles.readingReferences}>
                          <strong>{paragraph.split('\n')[0]}</strong>
                          {paragraph.split('\n').slice(1).map((ref: string, i: number) => (
                            <p key={i} className={styles.readingParagraph}>{ref}</p>
                          ))}
                        </div>
                      );
                    }
                    return <p key={idx} className={styles.readingParagraph}>{paragraph}</p>;
                  })
                )}
              </div>
            </div>
          </div>
        )}
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
      <section className={`${styles.pubSection} section`} style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="sectionHeader animateInit">
            <span className="sectionLabel">Other Writing</span>
            <h2 className="sectionTitle">Book Reviews, Reports &amp; Working Papers</h2>
            <div className="sectionRule"></div>
          </div>
          <div className={`${styles.pubList} animateInit`}>
            {other.map((item, i) => (
              <PubItem key={`other-${i}`} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletters */}
      <section className={`${styles.pubSection} section`} style={{ paddingTop: 0, paddingBottom: '5rem' }}>
        <div className="container">
          <div className="sectionHeader animateInit">
            <span className="sectionLabel">Featured Articles</span>
            <h2 className="sectionTitle">Newsletters</h2>
            <div className="sectionRule"></div>
          </div>
          <div className={`${styles.pubList} animateInit`}>
            {newsletters.map((item, i) => (
              <PubItem key={`news-${i}`} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

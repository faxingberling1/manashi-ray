'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './About.module.css';

type Tab = 'biography' | 'career' | 'teaching' | 'charting';

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>('biography');
  const [lightboxImg, setLightboxImg] = useState<{ src: string, title: string } | null>(null);

  return (
    <section className={`${styles.about} section`} id="about">
      <div className="container">
        <div className="sectionHeader animateInit">
          <span className="sectionLabel">About</span>
          <h2 className="sectionTitle">Manashi Ray</h2>
          <div className="sectionRule"></div>
        </div>

        {/* Tab Buttons */}
        <div className={styles.tabBar}>
          <button
            id="tab-biography"
            className={`${styles.tabBtn} ${activeTab === 'biography' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('biography')}
            aria-selected={activeTab === 'biography'}
            role="tab"
          >
            <span className={styles.tabIcon}>✦</span>
            <span className={styles.tabLabel}>Biography</span>
          </button>
          <button
            id="tab-charting"
            className={`${styles.tabBtn} ${activeTab === 'charting' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('charting')}
            aria-selected={activeTab === 'charting'}
            role="tab"
          >
            <span className={styles.tabIcon}>✧</span>
            <span className={styles.tabLabel}>Charting My Course</span>
          </button>
          <button
            id="tab-career"
            className={`${styles.tabBtn} ${activeTab === 'career' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('career')}
            aria-selected={activeTab === 'career'}
            role="tab"
          >
            <span className={styles.tabIcon}>◈</span>
            <span className={styles.tabLabel}>Career Trajectory</span>
          </button>
          <button
            id="tab-teaching"
            className={`${styles.tabBtn} ${activeTab === 'teaching' ? styles.tabActive : ''}`}
            onClick={() => setActiveTab('teaching')}
            aria-selected={activeTab === 'teaching'}
            role="tab"
          >
            <span className={styles.tabIcon}>◆</span>
            <span className={styles.tabLabel}>Teaching</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className={styles.tabContent}>

          {/* === BIOGRAPHY === */}
          {activeTab === 'biography' && (
            <div className={styles.grid}>
              {/* Text */}
              <div>
                <p className={styles.lead}>
                  I have always been curious about how the mechanisms of social processes unfold over time: why people behave in particular ways, their daily patterns of interaction, how they engage in collective behaviors, how institutional practices shape culture, why individuals stand out, defying all odds. Attempting to answer these questions has defined my career&apos;s trajectory, from development work in India to postgraduate education in the Netherlands and United States.
                </p>
                <div className={styles.text}>

                  <p>
                    My journey as a scholar has also been shaped by a life-changing automobile accident resulting in the loss of my left leg below the knee. Although becoming an amputee brought lifelong challenges, including lengthy recovery and rehabilitation, it never diminished my curiosity, passion, nor my determination to pursue my professional goals. Living with a partial disability has deepened my appreciation for perseverance and resilience &ndash; crucial skills for a researcher &ndash; and influenced my approach to field work, conferences, teaching, and mentoring. I believe that meaningful work often grows from overcoming adversity.
                  </p>
                  <p>
                    My work bridges rigorous scholarship and public engagement through organizing workshops, lectures, podcasts, contributing to debates on migration, entrepreneurship, and structures of inequality and social transformation between and within nations.
                  </p>
                </div>

                {/* Stats 
                <div className={styles.stats}>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>15+</span>
                    <span className={styles.statLabel}>Years at WVSU</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>14</span>
                    <span className={styles.statLabel}>Awards &amp; Honors</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>5+</span>
                    <span className={styles.statLabel}>Courses Taught</span>
                  </div>
                  <div className={styles.stat}>
                    <span className={styles.statNumber}>1</span>
                    <span className={styles.statLabel}>Landmark Book</span>
                  </div>
                </div>
                */}
              </div>

              {/* Image */}
              <div className={styles.imageCol}>
                <div className={styles.portraitWrap}>
                  <Image
                    src="/Manashi-Potrait.JPG"
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
                    href="/Curriculum_Vitae_Manashi_Ray_August_2026.pdf"
                    className={styles.linkPill}
                    target="_blank"
                    rel="noopener noreferrer"
                    download="Curriculum_Vitae_Manashi_Ray_August_2026.pdf"
                  >
                    ↓ Download CV
                  </a>
                  <Link href="/contact" className={`${styles.linkPill} ${styles.linkPillGhost}`}>
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* === CAREER TRAJECTORY === */}
          {activeTab === 'career' && (
            <div className={styles.careerSection}>
              <div className={styles.careerIntro}>
                <p>A distinguished academic career spanning more than fifteen years across leading American universities, dedicated to advancing sociological research, teaching excellence, and global perspectives on migration, inequality, and transnationalism.</p>
              </div>

              <div className={styles.timeline}>
                {[
                  {
                    period: '2011 – Present',
                    role: 'Professor of Sociology',
                    dept: 'Department of Psychology and Sociology',
                    institution: 'West Virginia State University',
                    current: true,
                    detail: 'Full-time faculty member teaching graduate and undergraduate courses in sociology, migration studies, social inequality, gender, family sociology, and refugee studies while conducting internationally recognized research on migration, transnationalism, and global social mobility.',
                  },
                  {
                    period: '2010 – 2011',
                    role: 'Visiting Assistant Professor',
                    dept: 'Department of Sociology, Anthropology and Social Work',
                    institution: 'Central Michigan University',
                    current: false,
                    detail: 'Visiting faculty appointment teaching undergraduate sociology courses while completing doctoral research at Michigan State University.',
                  },
                  {
                    period: '2009 – 2010',
                    role: 'Adjunct Faculty',
                    dept: 'Department of Sociology',
                    institution: 'Saginaw Valley State University',
                    current: false,
                    detail: 'Taught introductory and advanced sociology courses for undergraduate students, laying the foundation for a distinguished academic career in higher education.',
                  },
                ].map((pos, i, arr) => (
                  <div key={i} className={`${styles.timelineItem} ${pos.current ? styles.timelineCurrent : ''}`}>
                    <div className={styles.timelineLeft}>
                      <span className={styles.timelinePeriod}>{pos.period}</span>
                      {pos.current && <span className={styles.currentBadge}>Current</span>}
                    </div>
                    <div className={styles.timelineNode}>
                      <div className={styles.nodeDot} />
                      {i < arr.length - 1 && <div className={styles.nodeLine} />}
                    </div>
                    <div className={styles.timelineRight}>
                      <h3 className={styles.posRole}>{pos.role}</h3>
                      <p className={styles.posDept}>{pos.dept}</p>
                      <p className={styles.posInstitution}>{pos.institution}</p>
                      <p className={styles.posDetail}>{pos.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <hr className={styles.sectionDivider} />

              <div className={styles.careerIntro} style={{ marginTop: '3rem' }}>
                <p>A strong foundation in research and social development built through leadership roles with renowned institutions across India, advancing policy, governance, gender equity, poverty alleviation, and sustainable development initiatives.</p>
              </div>
              <div className={styles.timeline}>
                {[
                  {
                    period: '1999 – 2000',
                    role: 'Research Consultant',
                    dept: 'Humanistic Institute for Co-operation with Developing Countries (Hivos)',
                    institution: 'Bangalore, India',
                    current: false,
                    detail: 'Conducted research on development, globalization, and sustainable social policies, contributing to projects addressing poverty and economic development.',
                  },
                  {
                    period: '1998 – 1999',
                    role: 'Research Consultant',
                    dept: 'ActionAid Asia Regional Office',
                    institution: 'Bangalore, India',
                    current: false,
                    detail: 'Led research on the Impact of Globalization and Liberal Policies on Poverty Issues in India, examining socio-economic challenges and development strategies.',
                  },
                  {
                    period: '1996 – 1997',
                    role: 'Research Coordinator',
                    dept: 'ActionAid India Office',
                    institution: 'Bangalore, India',
                    current: false,
                    detail: 'Coordinated research initiatives supporting poverty alleviation, community development, and social policy programs across India.',
                  },
                  {
                    period: '1995 – 1996',
                    role: 'Research Consultant',
                    dept: 'M.S. Swaminathan Research Foundation',
                    institution: 'Chennai, India',
                    current: false,
                    detail: 'Directed the project "Gender Issues in Local Governance," developing training modules to strengthen local governance and empower elected village panchayat members.',
                  },
                  {
                    period: '1994 – 1995',
                    role: 'Visiting Fellow',
                    dept: 'Institute of Rural Management (IRMA)',
                    institution: 'Anand, Gujarat, India',
                    current: false,
                    detail: 'Conducted research in rural management and development, contributing to policy-focused academic and community initiatives.',
                  },
                  {
                    period: '1987 – 1991',
                    role: 'Research Officer',
                    dept: 'Lutheran World Service (India)',
                    institution: 'Kolkata, India',
                    current: false,
                    detail: 'Managed planning, research, evaluation, and monitoring of social development projects, working closely with communities to advance sustainable development initiatives throughout India.',
                  },
                  {
                    period: '1982 – 1986',
                    role: 'Lecturer',
                    dept: '',
                    institution: 'Mahatma Gandhi Memorial College, Udupi, Karnataka, India',
                    current: false,
                    detail: 'Lecturer at Mahatma Gandhi Memorial College, Udupi, Karnataka, India',
                  },
                ].map((pos, i, arr) => (
                  <div key={i} className={`${styles.timelineItem} ${pos.current ? styles.timelineCurrent : ''}`}>
                    <div className={styles.timelineLeft}>
                      <span className={styles.timelinePeriod}>{pos.period}</span>
                      {pos.current && <span className={styles.currentBadge}>Current</span>}
                    </div>
                    <div className={styles.timelineNode}>
                      <div className={styles.nodeDot} />
                      {i < arr.length - 1 && <div className={styles.nodeLine} />}
                    </div>
                    <div className={styles.timelineRight}>
                      <h3 className={styles.posRole}>{pos.role}</h3>
                      <p className={styles.posDept}>{pos.dept}</p>
                      <p className={styles.posInstitution}>{pos.institution}</p>
                      <p className={styles.posDetail}>{pos.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.fellowships}>
                <h3 className={styles.fellowshipsTitle}>Fellowship, Grants and Awards</h3>
                <div className={styles.fellowshipGrid}>
                  {[
                    { icon: '🌐', title: 'UNFPA Global Training Program', sub: 'Institute of Social Studies, The Hague' },
                    { icon: '🎓', title: 'Jawaharlal Nehru Institute of Advanced Study', sub: 'International Fellowship' },
                    { icon: '🏆', title: 'Awards & Honors', sub: 'Including the 1992–1993 Rafael Salas Memorial Scholarship, United Nations Population Fund' },
                  ].map((f, i) => (
                    <div key={i} className={styles.fellowshipCard}>
                      <span className={styles.fellowshipIcon}>{f.icon}</span>
                      <div>
                        <p className={styles.fellowshipTitle}>{f.title}</p>
                        <p className={styles.fellowshipSub}>{f.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* === TEACHING === */}
          {activeTab === 'teaching' && (
            <div className={styles.teachingSection}>
              <div className={styles.teachingIntro}>
                <p>Over 15 years of dedicated classroom experience spanning three distinguished institutions, shaping students across graduate and undergraduate levels.</p>
              </div>

              <div className={styles.courseGrid}>
                <div className={styles.courseCard}>
                  <div className={styles.courseCardHeader}>
                    <span className={styles.courseCardIcon}>📘</span>
                    <h4 className={styles.courseCardTitle}>Graduate Courses</h4>
                  </div>
                  <div className={styles.courseTags}>
                    <span className={`${styles.courseTag} ${styles.courseTagGold}`}>Sociology of Organization</span>
                  </div>
                </div>

                <div className={styles.courseCard}>
                  <div className={styles.courseCardHeader}>
                    <span className={styles.courseCardIcon}>📗</span>
                    <h4 className={styles.courseCardTitle}>Undergraduate Courses</h4>
                  </div>
                  <div className={styles.courseTags}>
                    {['Social Inequality', 'Sociology of Family', 'Sociology of Gender', 'Migrants and Refugees: The American Experience', 'Introduction to Sociology'].map((c) => (
                      <span key={c} className={styles.courseTag}>{c}</span>
                    ))}
                  </div>
                </div>

                <div className={styles.platformCard}>
                  <span className={styles.platformIcon}>💻</span>
                  <div>
                    <h4 className={styles.platformTitle}>Online Teaching Platforms</h4>
                    <div className={styles.platformTags}>
                      <span className={styles.platformTag}>Sakai</span>
                      <span className={styles.platformTag}>Moodle</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.teachingPhilosophy}>
                <div className={styles.philosophyInner}>
                  <span className={styles.philosophyQuoteIcon}>&ldquo;</span>
                  <p className={styles.philosophyText}>
                    My teaching is rooted in the belief that sociology is not just an academic discipline , it is a lens through which students come to understand the world, their place within it, and the structures that shape their lives. I strive to create classrooms that are intellectually rigorous, culturally inclusive, and deeply human.
                  </p>
                  <cite className={styles.philosophyCite}>, Dr. Manashi Ray, Teaching Philosophy</cite>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* === CHARTING MY COURSE === */}
        {activeTab === 'charting' && (
          <div className={styles.chartingSection}>
            <div className={styles.chartingGrid}>
              <div className={styles.chartingText}>
                <p>
                  <span className={styles.chartingLead}>Before entering</span> academia as a sociologist, I worked in India’s development sector in the late 1980s and ’90s. Grassroots engagement and field work among rural, indigent, and resource-constrained communities was formative in my thinking as a social scientist. It taught me that poverty, inequality, and social transformation can only be understood by listening closely to people&apos;s lived experiences. I learned that &ldquo;power&rdquo; is not only imposed by institutions and state policies, but it is continually produced, negotiated, and contested in everyday practices and embedded in relationships that theory alone can never fully capture.
                </p>
              </div>
              <div className={styles.chartingImagesCol}>
                <div className={styles.chartingImages}>
                  <div className={styles.chartingImageFigure}>
                    <div className={styles.chartingImageWrap}>
                      <Image src="/field-work-new-1.jpg" alt="Field work in India" width={400} height={300} className={styles.chartingImage} />
                    </div>
                  </div>
                  <div className={styles.chartingImageFigure}>
                    <div className={styles.chartingImageWrap}>
                      <Image src="/field-work-new-2.jpg" alt="Field work in Gujarat, India" width={400} height={300} className={styles.chartingImage} />
                    </div>
                  </div>
                </div>
                <p className={styles.chartingCaption}>
                  Doing field work in Gujarat, India.
                </p>
              </div>
            </div>

            <hr className={styles.sectionDivider} />

            <div className={`${styles.chartingGrid} ${styles.chartingGridReverse}`}>
              <div className={styles.chartingText}>
                <p>
                  <span className={styles.chartingLead}>A turning point</span> came in 1992–93 when I was studying at the International Institute of Social Studies (ISS), then located in the historic Hotel Wittebrug in The Hague. Studying population and sustainable development alongside scholars and practitioners from around the world broadened my perspective, enabling me to situate India&apos;s challenges within powerful global structures of inequality and social change. At ISS, my interest in linking local realities with global processes in transnational contexts took deeper shape, and I came to see migration as an important catalyst for economic and social development.
                </p>
              </div>
              <div className={styles.chartingImagesCol}>
                <div className={styles.chartingImages}>
                  <div className={styles.chartingImageFigure}>
                    <div className={styles.chartingImageWrap}>
                      <Image src="/hotel-wittebrug.jpg" alt="Hotel Wittebrug, The Hague" width={400} height={300} className={styles.chartingImage} />
                    </div>
                    <p className={styles.chartingImageCaption}>Hotel Wittebrug, The Hague</p>
                  </div>
                  <div className={styles.chartingImageFigure}>
                    <div className={styles.chartingImageWrap}>
                      <Image src="/red-cedar-river.jpg" alt="Red Cedar River, MSU Campus" width={400} height={300} className={styles.chartingImage} />
                    </div>
                    <p className={styles.chartingImageCaption}>Red Cedar River, MSU Campus</p>
                  </div>
                </div>
              </div>
            </div>

            <hr className={styles.sectionDivider} />

            <div className={styles.chartingGrid}>
              <div className={styles.chartingText}>
                <p>
                  <span className={styles.chartingLead}>In the 2000s</span> as India&apos;s economy liberalized and globalization reshaped patterns of mobility, my academic research—as a doctoral student at Michigan State University—focused on migration, transnationalism, and entrepreneurship as mechanisms of social change. This long-standing interest culminated in <em>Becoming Boundless: Indian Transnational Entrepreneurs in the Global Economy</em>, a longitudinal ethnographic study exploring the opportunities, contradictions, and human dimensions of transnational entrepreneurship.
                </p>
                <p style={{ marginTop: '1rem' }}>
                  Though I think of myself as an interdisciplinary scholar, my work increasingly adopts a transdisciplinary orientation by engaging with practitioners and policy communities to address issues related to climate, (im)mobility, and sustainable architecture.
                </p>
              </div>
              <div className={styles.chartingImagesCol}>
                <div className={styles.chartingImages}>
                  <div className={styles.chartingImageFigure}>
                    <div className={styles.chartingImageWrap}>
                      <Image src="/community-1.jpg" alt="Community Engagement in Semiliguda Tehsil, Odisha State" width={400} height={300} className={styles.chartingImage} />
                    </div>
                    <p className={styles.chartingImageCaption}>Community Engagement, Semiliguda Tehsil, in Odisha State.</p>
                  </div>
                  <div className={styles.chartingImageFigure}>
                    <div className={styles.chartingImageWrap}>
                      <Image src="/matrix-energy-resource-mapping-odisha.jpg" alt="Matrix of Energy resource mapping at Koraput district, Odisha State" width={400} height={300} className={styles.chartingImage} />
                    </div>
                    <p className={styles.chartingImageCaption}>Matrix of Energy resource mapping at Koraput district, Odisha State</p>
                  </div>
                </div>
              </div>
            </div>

            <hr className={styles.sectionDivider} />

            <div className={styles.gallerySection}>
              <h3 className={styles.galleryTitle}>Fieldwork Archives</h3>
              <div className={styles.galleryGrid}>
                {[
                  { src: '/field-work-meghalaya-state.jpg', title: 'Field work - Meghalaya State, Northeastern India' },
                  { src: '/field-site-meghalaya.jpeg', title: 'Field site - Meghalaya, Northeast India' },
                  { src: '/field-work-meghalaya-2.jpeg', title: 'Field work - Meghalaya state, India' },
                  { src: '/very-young-headloader-meghalaya-state.jpg', title: 'A very young headloader - Meghalaya State, Northeastern India' },
                  { src: '/field-work-odisha-state-2.jpg', title: 'Field work - Odisha state, India' },
                  { src: '/field-work-odisha-3.jpeg', title: 'Field work in Odisha state, India' },
                  { src: '/village-visit-odisha.jpeg', title: 'Village visit - Odisha India' },
                  { src: '/urmul-trust-1.jpeg', title: 'Workshop on participatory development, URMUL Trust, Western Rajasthan, India' },
                  { src: '/urmul-trust-2.jpeg', title: 'Workshop on participatory development, URMUL Trust, Western Rajasthan, India' },
                  { src: '/urmul-trust-3.jpeg', title: 'Workshop on participatory development, URMUL Trust, Western Rajasthan, India' },
                  { src: '/with-irma-colleagues-1994-95.jpg', title: 'With IRMA colleagues in 1994-95' },
                  { src: '/women-headloaders-irma-campus.jpg', title: 'Women headloaders in IRMA campus' },
                ].map((img, i) => (
                  <div key={i} className={styles.galleryItem} onClick={() => setLightboxImg(img)}>
                    <div className={styles.galleryImageWrap}>
                      <Image src={img.src} alt={img.title} fill sizes="(max-width: 768px) 100vw, 33vw" className={styles.galleryImage} />
                    </div>
                    <div className={styles.galleryCaption}>
                      <span>{img.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div className={styles.lightbox} onClick={() => setLightboxImg(null)}>
          <div className={styles.lightboxClose} onClick={() => setLightboxImg(null)}>&times;</div>
          <div className={styles.lightboxContentWrap} onClick={e => e.stopPropagation()}>
            <img src={lightboxImg.src} alt={lightboxImg.title} className={styles.lightboxImage} />
            <p className={styles.lightboxCaption}>{lightboxImg.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}

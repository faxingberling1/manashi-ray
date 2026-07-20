'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './About.module.css';

type Tab = 'biography' | 'career' | 'teaching';

export default function About() {
  const [activeTab, setActiveTab] = useState<Tab>('biography');

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
                    I am a graduate of Michigan State University and an active participant in international scholarly networks who has published in leading sociological journals and edited volumes. At the International Sociological Association, I&apos;ve served as Treasurer of RC 32 (Women, Gender and Society) and currently as Secretary and Treasurer of RC 31 (Sociology of Migration). My work has received numerous awards.
                  </p>
                  <p>
                    My journey as a scholar has also been shaped by a life-changing automobile accident resulting in the loss of my left leg below the knee. Although becoming an amputee brought lifelong challenges, including lengthy recovery and rehabilitation, it never diminished my curiosity, passion, nor my determination to pursue my professional goals. Living with a partial disability has deepened my appreciation for perseverance and resilience &ndash; crucial skills for a researcher &ndash; and influenced my approach to field work, conferences, teaching, and mentoring. I believe that meaningful work often grows from overcoming adversity.
                  </p>
                  <p>
                    My work bridges rigorous scholarship and public engagement through organizing workshops, lectures, podcasts, contributing to debates on migration, entrepreneurship, and structures of inequality and social transformation between and within nations.
                  </p>
                </div>

                {/* Stats */}
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
          )}

          {/* === CAREER TRAJECTORY === */}
          {activeTab === 'career' && (
            <div className={styles.careerSection}>
              <div className={styles.careerIntro}>
                <p>A distinguished academic career spanning over fifteen years across three institutions, shaped by an unwavering commitment to sociological inquiry and global perspectives.</p>
              </div>

              <div className={styles.timeline}>
                {[
                  {
                    period: '2011 – Present',
                    role: 'Professor of Sociology',
                    dept: 'Department of Psychology and Sociology',
                    institution: 'West Virginia State University',
                    current: true,
                    detail: 'Full-time faculty member teaching graduate and undergraduate courses in sociology, migration studies, and social inequality.',
                  },
                  {
                    period: '2010 – 2011',
                    role: 'Visiting Assistant Professor',
                    dept: 'Department of Sociology, Anthropology and Social Work',
                    institution: 'Central Michigan University',
                    current: false,
                    detail: 'Visiting appointment teaching undergraduate sociology courses while completing doctoral research.',
                  },
                  {
                    period: '2009 – 2010',
                    role: 'Adjunct Faculty',
                    dept: 'Department of Sociology',
                    institution: 'Saginaw Valley State University',
                    current: false,
                    detail: 'Introductory and advanced sociology coursework for undergraduate students.',
                  },
                ].map((pos, i) => (
                  <div key={i} className={`${styles.timelineItem} ${pos.current ? styles.timelineCurrent : ''}`}>
                    <div className={styles.timelineLeft}>
                      <span className={styles.timelinePeriod}>{pos.period}</span>
                      {pos.current && <span className={styles.currentBadge}>Current</span>}
                    </div>
                    <div className={styles.timelineNode}>
                      <div className={styles.nodeDot} />
                      {i < 2 && <div className={styles.nodeLine} />}
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
                <h3 className={styles.fellowshipsTitle}>International Fellowships &amp; Grants</h3>
                <div className={styles.fellowshipGrid}>
                  {[
                    { icon: '🌐', title: 'UNFPA Global Training Program', sub: 'Institute of Social Studies, The Hague' },
                    { icon: '🎓', title: 'Jawaharlal Nehru Institute of Advanced Study', sub: 'International Fellowship' },
                    { icon: '📚', title: '14 Awards & Honors', sub: 'Over the course of her academic career' },
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
      </div>
    </section>
  );
}

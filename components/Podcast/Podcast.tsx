import styles from './Podcast.module.css';

export default function Podcast() {
  return (
    <section className={`${styles.podcast} section`} id="podcast">
      <div className={styles.bgTexture}></div>
      <div className="container">
        <div className="sectionHeader">
          <span className="sectionLabel">Watch &amp; Listen</span>
          <h2 className="sectionTitle">Video Podcast</h2>
          <div className="sectionRule"></div>
          <p className={styles.intro}>
            Join Dr. Manashi Ray in this video podcast as she discusses her latest work and insights.
          </p>
        </div>

        <div className={styles.videoContainer}>
          {/* YouTube Embed Container */}
          <div className={styles.videoWrapper}>
            <div className={styles.videoGlow} aria-hidden="true"></div>
            <iframe
              className={styles.iframe}
              src="https://www.youtube.com/embed/Tch_NyhZ-0c"
              title="Video Podcast with Manashi Ray"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <div className={styles.actions}>
            <p className={styles.note}>
              Prefer to watch directly on YouTube?
            </p>
            <a
              href="https://www.youtube.com/watch?v=Tch_NyhZ-0c"
              className="btn btnGold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

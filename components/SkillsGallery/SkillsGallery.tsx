import Link from 'next/link';
import Image from 'next/image';
import styles from './SkillsGallery.module.css';

export default function SkillsGallery() {
  return (
    <>
      <section className={`${styles.hobbySection} section`} id="skills" style={{ paddingTop: '100px' }}>
        <div className="container">
          <Link href="/my-other-self" className={styles.backButton}>
            ← Back to My &ldquo;Other Self&rdquo;
          </Link>
          
          <div className="sectionHeader animateInit">
            <span className="sectionLabel">Creative Pursuits</span>
            <h2 className="sectionTitle">Skills &amp; Hobbies</h2>
            <div className="sectionRule" style={{ marginInline: 'auto' }}></div>
          </div>
          
          <div className={styles.hobbyGrid} style={{ marginTop: '3rem' }}>
            <div className={`${styles.masonryLayout} animateInit`}>
              <div className={styles.masonryCol}>
                <div className={styles.masonryImageWrap} style={{ aspectRatio: '4/5' }}>
                  <Image 
                    src="/pottery-1.jpg" 
                    alt="Handmade pottery"
                    fill
                    className={styles.hobbyImage}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </div>
                <div className={styles.masonryImageWrap} style={{ aspectRatio: '4/5' }}>
                  <Image 
                    src="/pottery-2.jpg" 
                    alt="Handmade pottery details"
                    fill
                    className={styles.hobbyImage}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className={styles.masonryCol}>
                <div className={styles.masonryImageWrap} style={{ aspectRatio: '1/1' }}>
                  <Image 
                    src="/pottery-3.jpg" 
                    alt="Pottery on the wheel"
                    fill
                    className={styles.hobbyImage}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </div>
                <div className={styles.masonryImageWrap} style={{ aspectRatio: '4/5' }}>
                  <Image 
                    src="/pottery-5.jpg" 
                    alt="Finished pottery"
                    fill
                    className={styles.hobbyImage}
                    sizes="(max-width: 900px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
            
            <div className={`${styles.hobbyContent} animateInit delay100`}>
              <span className="sectionLabel">Current Passions</span>
              <h3>The Art of Pottery</h3>
              <p>
                As part of my life progression and healing, I discovered the tactile, grounding art of pottery. There is something profoundly transformative about taking a raw piece of clay and shaping it with intention. 
              </p>
              <p>
                Working at the wheel requires a centering of the mind and body. It has become a space where I find stillness outside of academia, allowing me to express creativity through my hands. Every piece I throw is a reminder that beauty often emerges from the messy, imperfect process of creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.futureSection} section`} id="future" style={{ backgroundColor: 'var(--clr-ivory)', marginTop: '4rem' }}>
        <div className="container">
          <div className="sectionHeader animateInit">
            <span className="sectionLabel">Expanding Horizons</span>
            <h2 className="sectionTitle">Future Canvas</h2>
            <div className="sectionRule" style={{ marginInline: 'auto' }}></div>
            <p style={{ maxWidth: '600px', margin: '1.5rem auto 0', color: 'var(--clr-text-mid)' }}>
              Life is a continuous process of learning. While pottery holds a special place in my routine, I am always looking forward to exploring new skills and hobbies.
            </p>
          </div>

          <div className={styles.futureGrid}>
            <div className={`${styles.futureCard} animateInit`}>
              <div className={styles.futureIcon}>🌿</div>
              <h4>Gardening</h4>
              <p>Cultivating life and finding peace in the rhythms of nature and the changing seasons.</p>
            </div>
            <div className={`${styles.futureCard} animateInit delay100`}>
              <div className={styles.futureIcon}>🎨</div>
              <h4>Painting</h4>
              <p>Exploring color and abstract expression as a new visual language and creative outlet.</p>
            </div>
            <div className={`${styles.futureCard} animateInit delay200`}>
              <div className={styles.futureIcon}>📖</div>
              <h4>Creative Writing</h4>
              <p>Expanding beyond academic prose to capture personal reflections and untold stories.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

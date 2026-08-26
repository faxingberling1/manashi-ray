import Image from 'next/image';
import styles from './MyOtherSelf.module.css';

export default function MyOtherSelf() {
  return (
    <>
      <section className={`${styles.section} section`} id="journey">
        <div className={styles.bgDecoration}></div>
        <div className="container">
          <div className="sectionHeader animateInit">
            <span className="sectionLabel">My Other Self</span>
            <h2 className="sectionTitle">A Journey of Resilience</h2>
            <div className="sectionRule"></div>
          </div>

          <div className={`${styles.intro} animateInit delay100`}>
            <p>
              My journey has been shaped not just by the books I have read or the research I have conducted, but by the deeply personal reality of living with a disability. It has been a profound teacher—one that demands patience, reframes perspectives, and reveals strengths I did not know I possessed.
            </p>
            <p>
              Embracing my disability has meant learning to navigate the world on different terms. It is an ongoing progression, a testament to the fact that our physical limitations do not define our intellectual boundaries or our capacity for joy. <strong>This is the story of my other self.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.hobbySection} section`} id="pottery">
        <div className="container">
          <div className={styles.hobbyGrid}>
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
                <div className={styles.masonryImageWrap} style={{ aspectRatio: '1/1' }}>
                  <Image 
                    src="/pottery-5.jpg" 
                    alt="Clay bowl from top"
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
                    src="/pottery-4.jpg" 
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

      <section className={`${styles.futureSection} section`} id="future">
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

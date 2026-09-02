import Image from 'next/image';
import Link from 'next/link';
import styles from './MyOtherSelf.module.css';

export default function MyOtherSelf() {
  return (
    <section className={`${styles.section} section`} id="journey">
      <div className={styles.bgDecoration}></div>
      <div className="container">
        <div className="sectionHeader animateInit">
          <span className="sectionLabel">My &ldquo;Other Self&rdquo;</span>
          <h2 className="sectionTitle">A Life, Interrupted and Reimagined</h2>
          <div className="sectionRule" style={{ marginInline: 'auto' }}></div>
        </div>

        <div className={`${styles.bannerContainer} animateInit`}>
          <Image 
            src="/my-other-self-banner.jpg" 
            alt="Beautiful serene banner" 
            fill
            className={styles.bannerImage}
            priority
          />
        </div>

        <div className={`${styles.intro} animateInit delay100`}>
          <p>
            Whether one conducts research, works with clay on a potter's wheel, or learns to navigate life with a partial disability, striving toward a goal is always a leap of faith. For me, all three are an ongoing process of learning and discovery—different in scale and experience, but connected by the same encounter with uncertainty. Each day, my living meets this reality: where any tiny progress comes through patience, adaptation, and the willingness to begin again. This is story of my "other self."
          </p>
          <p>
            Living independently and working as a full-time academic and researcher, my partial disability has been a constant truth and relentless teacher since 2001. It is a life status I did not ask for nor wanted, but in quiet and stubborn ways it has taught me to navigate a world that is not always designed for me. In the process it has prompted me to more keenly observe untold stories and be empathetic to the subjects and participants of my research. Above all, it has taught me to adapt graciously, find new ways of moving, and accept without complaint that some things cannot be done how I once imagined or desired.
          </p>
          <p>
            Perhaps this was the reason why I found myself drawn to work with clay this summer. Like extensive field notes and primary data, a lump of clay does not arrive with a predetermined shape, but has potential, both possibilities and limitations. To be a potter, I have to be aware what the material will allow and work with it skillfully without resistance. In a broader sense, making ceramics and pottery appeals to me because it combines creativity, touch, patience, and chemistry – a soft piece of earth is transformed through the right amount of pressure of my fingers, the rhythmic spinning of the wheel, and fire into something durable. Working with clay on a potter's wheel is a meditative experience, like when an argument finds its shape in prose.
          </p>
          <p>
            My two universes exist in parallel: both pottery and ethnographic research require time, attentiveness, patience, and a willingness to be changed by the material that I am working with. I find the comparison especially apt, because you begin with an idea or a research question – though the data and evidence frequently take me somewhere I did not anticipate. And yet, when the ceramic emerges slowly from my hands, or a paragraph or page of findings is written, it is deeply satisfying, almost magical, and imperfect, but uniquely mine.
          </p>
        </div>

        <div className={`${styles.roadmapSection} animateInit delay200`}>
          <div className={styles.roadmapGrid}>
            <Link href="/my-other-self/skills" className={styles.roadmapCard}>
              <div className={styles.roadmapIcon}>🎨</div>
              <h4>Skills &amp; Life Achievements</h4>
              <p>Explore a gallery of my creative pursuits, including pottery and future passions.</p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

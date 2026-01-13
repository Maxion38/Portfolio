import layout from './me.module.css'
import styles from './page1.module.css'
import glassStyles from '../../components/glass.module.css'
import myPhoto from '../../assets/myPhotoAIUpscaled.png';
import { GiWarlockEye } from "react-icons/gi";
import { FaUserGraduate } from "react-icons/fa";
import { GiBurningPassion } from "react-icons/gi";
import GlassDiv from '../../components/ui/glass/GlassDiv';


export default function Page1() {
  return (
    <section className={layout.page}>
      <div className={styles.grid}>

        {/* LEFT CARD */}
        <GlassDiv>
          <article>
          <h2 className={styles.center}>
            <GiBurningPassion size="2.5rem" /> Ma passion
          </h2>
          <p>
            La programmation est une véritable passion pour moi. Elle me permet de transformer des idées en projets concrets. Depuis tout petit, mon imagination est en constante ébullition, et le développement me donne aujourd’hui les moyens de donner vie à mes idées. 
          </p>
          </article>
        </GlassDiv>

        {/* CENTER PROFILE */}
        <div className={styles.profile}>
          <img src={myPhoto} alt="Moi" className={styles.photo} />
          <GlassDiv>
            <article>
            <h2 className={styles.center}>
                <FaUserGraduate size="2.2rem" /> Maxime Bongartz
            </h2>
            <p>
              Je suis étudiant en 3ème année de bachelier en informatique à l’EHPEC. J'ai entièrement construit et imaginé ce site portfolio dans le but de présenter ce que j'ai pu apprendre dans le cadre de ma formation et de ma passion pour l'informatique et pour expliquer comment j'ai mis cela en pratique lors de mon stage.
            </p>
            </article>
          </GlassDiv>
        </div>

        {/* RIGHT CARD */}
        <GlassDiv>
          <article>
          <h2 className={styles.center}>
            <GiWarlockEye size="2.5rem" /> Ma vision
          </h2>
          <p>
            En plus de l'informatique, je suis passioné par la photographie animalière. La forêt est un lieu que j'apprécie beaucoup par sa tranquillité et toutes les espèces que l'on peut y découvir lorsqu'on prends le temps d'observer. C'est sur cette passion que j'ai contruit ma direction artisique pour ce site, le but étant de vous faire ressentir ce sentiment agréable de paix que je peux retrouver quand je vais en forêt.
          </p>
          </article>
        </GlassDiv>
      </div>
    </section>
  );
}


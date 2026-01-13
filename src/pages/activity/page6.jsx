import styles from './page6.module.css';
import GlassDiv from "../../components/ui/glass/GlassDiv"
import { MdBookmarkAdded } from "react-icons/md";

export default function Page6() {
  return (
    <div className={styles.page}>     

      <div className={styles.container}>
        {/* Texts */}
        <GlassDiv>
          <article className={styles.article}>
            <h1>Roadbook Tracker</h1>
            <p>
              Dans le cadre de mon cours de de Développement Informatique III en 3ᵉ année, nous avons réalisé un travail de groupe consistant à développer une application mobile permettant d’enregistrer et de visualiser automatiquement les kilomètres parcourus lors de l’apprentissage du permis pratique. Le but était de remplir automatiquement le Roadbook Belge.
            </p>
          </article>
          <article className={styles.article}>
            <h2><MdBookmarkAdded size={"1em"} />Compétences techniques mobile</h2>
            <p>
              Le travail était conséquent et je trouve le résultat final très propre. Cela m’a permis de développer pour la première fois une application mobile, ce qui m’a fait acquérir des compétences dans ce domaine. Cette expérience m’a été très utile pendant mon stage, où j’ai également programmé une application mobile.
            </p>
          </article>
        </GlassDiv>

        {/* Temps */}
        <div className={styles.row}>
          <GlassDiv padding={false} className={styles.padding}>
            <p className={styles.noMargin}>
              Temps comptabilisé <strong className={styles.strong}>15h</strong>
            </p>
          </GlassDiv>
          <GlassDiv padding={false} className={styles.padding}>
            <p className={styles.noMargin}>
              Temps réel <strong className={styles.strong}>30h+</strong>
            </p>
          </GlassDiv>
        </div>
      </div>


      {/* Video */}
      <div className={styles.container}>
        <div className={styles.videoWrapper}>
          <iframe 
            src="https://www.youtube.com/embed/0-4NaK0FaOk" 
            allowFullScreen
          />
        </div>
      </div>

    </div>
  );
}

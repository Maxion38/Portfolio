import styles from './page5.module.css';
import GlassDiv from "../../components/ui/glass/GlassDiv"
import glassStyles from '../../components/glass.module.css';
import odoo from '../../assets/odoo.png';
import { MdBookmarkAdded } from "react-icons/md";

export default function Page5() {
  return (
    <div className={styles.page}>
      {/* image */}
      <div className={styles.container}>
        <img src={odoo} alt="Logo Odoo " className={styles.photo} />
      </div>

      {/* text */}
      <div className={styles.container}>
        <GlassDiv>
          <article className={styles.article}>
            <h1>Visite de odoo</h1>
            <p>
              Avec l’EPHEC, nous avons eu droit à une visite des bureaux d’ODOO à Louvain-la-Neuve. D’une part, nous avons découvert les locaux, et d’autre part, nous avons reçu des informations sur l’entreprise, son histoire et son fonctionnement actuel. Nous avons également assisté à une démo : chacun de nous, avec notre ordinateur portable, avions pour objectif de récupérer du code, identifier une erreur, puis la corriger. Pour cela, plusieurs outils étaient à notre disposition.
            </p>

            <h2><MdBookmarkAdded size={"1em"} /> Monde professionnel</h2>
            <p>
              Cette expérience était très intéressante, que ce soit pour comprendre comment s’organise une grosse entreprise comptant plusieurs milliers d’employés dans le monde, ou pour tester par nous-mêmes leurs outils et moyens de travail. Cela m’a permis de savoir à quoi m’attendre pour mon stage, étant donné que celui-ci s’est déroulé à la BGL, qui est également une grosse entreprise comptant plusieurs milliers d’employés. 
            </p>
          </article>
        </GlassDiv>

        <div className={styles.row}>
          <GlassDiv padding={false} className={styles.padding}>
            <p className={styles.noMargin}>
              Temps comptabilisé : <strong>8h</strong>
            </p>
          </GlassDiv>
          <GlassDiv padding={false} className={styles.padding}>
            <p className={styles.noMargin}>
              Temps réel : <strong>8h</strong>
            </p>
          </GlassDiv>
        </div>
      </div>
    </div>
  );
}

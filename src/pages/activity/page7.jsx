import styles from './page7.module.css'
import GlassDiv from '../../components/ui/glass/GlassDiv';
import pageLayout from '../../components/layout/PageLayout.module.css'


export default function Page1() {
  return (
    <div className={pageLayout.page}>
      <GlassDiv>
        <article className={styles.article}>
          <h2>Merci d'avoir visité, à bientôt !</h2>
        </article> 
      </GlassDiv>
    </div>
  );
}

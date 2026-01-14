import { useNavigate } from 'react-router-dom';
import styles from './page3.module.css'
import { BsArrowRight } from "react-icons/bs";
import GlassDiv from '../../components/ui/glass/GlassDiv';
import GlassButton from '../../components/ui/glass/GlassButton';


export default function Page3() {
  const navigate = useNavigate();
  
  return (
    <div className={styles.page}>
      <div>
        <iframe
          src="/cv.pdf"
          className={styles.cv}
          title="PDF Viewer"
        />
      </div>
      <div className={styles.contentZone}>
        <GlassDiv>
          <article>
            <h2 className={styles.title}>Voici mon CV</h2>
            <p>C'est avec celui-ci que j'ai postulé pour mon stage.</p>
          </article>
        </GlassDiv>
        <GlassButton onClick={() => navigate("/stage")} className={styles.next}>2. Mon stage à la BLG <div className={styles.go}>Stage <BsArrowRight fontSize={"2.2rem"} /></div></GlassButton>
      </div>
    </div>
  );
}
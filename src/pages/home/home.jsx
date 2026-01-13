import { useNavigate } from 'react-router-dom';
import styles from './home.module.css'
import { BsArrowRight } from "react-icons/bs";
import GlassDiv from '../../components/ui/glass/GlassDiv';
import GlassButton from '../../components/ui/glass/GlassButton';


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      <GlassDiv className={styles.title}>
        <h2>Bienvenue sur mon portfolio !</h2>
      </GlassDiv>
      <div className={styles.space} />
      <div className={styles.row}>
        <GlassButton onClick={() => navigate("/me")} className={styles.card}>
          1. Qui je suis
          <div className={styles.go}>
            Profile <BsArrowRight fontSize={"2.2rem"} />
          </div>
        </GlassButton>
        <GlassButton onClick={() => navigate("/stage")} className={styles.card}>
          2. Mon stage à la BGL 
          <div className={styles.go}>
            Stage <BsArrowRight fontSize={"2.2rem"} />
          </div>
        </GlassButton>
        <GlassButton onClick={() => navigate("/activity")} className={styles.card}>
          3. Mes activitées réalisées 
          <div className={styles.go}>
            Activitées<BsArrowRight fontSize={"2.2rem"} />
          </div>
        </GlassButton>
      </div>
    </div>
  );
}

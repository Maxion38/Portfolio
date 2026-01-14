import { useNavigate } from 'react-router-dom';
import styles from './page3.module.css'
import GlassButton from '../../components/ui/glass/GlassButton';
import pageLayout from '../../components/layout/PageLayout.module.css'
import { BsArrowRight } from "react-icons/bs";


export default function Page1() {
  const navigate = useNavigate();

  return (
    <div className={pageLayout.page}>
      <GlassButton onClick={() => navigate("/activity")} className={styles.card}>
        3. Mes activitées réalisées 
        <div className={styles.go}>
          Activitées<BsArrowRight fontSize={"2.2rem"} />
        </div>
      </GlassButton>
    </div>
  );
}

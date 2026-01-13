import styles from "./page3.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      {/* Card du haut */}
      <div className={` ${styles.card} ${styles.topCard} `}>
        Card du haut
      </div>
      <div className={styles.space} />
      {/* Cards centrées par rapport à la page */}
      <div className={styles.centerCards}>
        <div className={styles.card}>Card 1</div>
        <div className={styles.card}>Card 2</div>
        <div className={styles.card}>Card 3</div>
      </div>
    </div>
  );
}

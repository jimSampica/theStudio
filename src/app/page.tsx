import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h2>Featured Student Work</h2>

      <div className={styles.topwave}>
      </div>
      <div className={styles.bottomwave + " d-flex align-items-center justify-content-center"}>
        <p>testtestest</p>
      </div>
    </main>
  );
}

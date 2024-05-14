import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
        <h2>Featured Student Work</h2>
        <div className={styles.wavePink}></div>
        <div className={styles.wave}></div>
    </main>
  );
}

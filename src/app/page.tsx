import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
        <h1>Hello world</h1>
        <div className={styles.wave}></div>
    </main>
  );
}

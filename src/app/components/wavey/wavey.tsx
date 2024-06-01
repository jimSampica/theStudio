import styles from "./wavey.module.css";

export default function Wavey({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  {
    return (
        <div className={styles.wavey + " d-flex align-items-center justify-content-center"}
             style={{ ["--testVar" as string]: '25%' }}>
            {children}
        </div>
    );
  }
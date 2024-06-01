import styles from "./wavey.module.css";

export default function Wavey({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  {
    return (
        <div className={styles.wavey} style={{ 'height': '500px' }}>
            {children}
        </div>
    );
  }
import styles from "./wavey.module.css";

export default function Wavey({
    children,
    offsetPercent
  }: Readonly<{
    children: React.ReactNode, 
    offsetPercent: `${number}%`;
  }>)  {
    return (
        <div className={styles.wavey + " d-flex align-items-center justify-content-center"} 
             style={{["--leftOffset" as string]: offsetPercent}}>
            {children}
        </div>
    );
  }
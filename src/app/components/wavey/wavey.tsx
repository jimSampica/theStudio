import styles from "./wavey.module.css";

interface WaveyProps {
    children: React.ReactNode, 
    offsetPercent?: `${number}%`,
    topMargin?: number;
  }

export default function Wavey({
    children,
    offsetPercent = "25%",
    topMargin = 0
  }: Readonly<WaveyProps>)  {
    return (
        <div className={styles.wavey + " d-flex align-items-center justify-content-center"} 
             style={{["--leftOffset" as string]: offsetPercent, 
                     ["--topMargin" as string]: topMargin}}>
            {children}
        </div>
    );
  }
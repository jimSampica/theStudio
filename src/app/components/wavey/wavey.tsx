import styles from "./wavey.module.css";
import { CSSProperties } from "react";

interface WaveyProps {
    children: React.ReactNode,
    offsetPercent?: `${number}%`,
    topMargin?: number;
    className?: string | undefined;
    style?: CSSProperties | undefined;
}

export default function Wavey({
    children,
    offsetPercent = "25%",
    topMargin = 0,
    className
}: Readonly<WaveyProps>) {
    return (
        <div className={styles.wavey + " " + className}
            style={{
                ["--leftOffset" as string]: offsetPercent,
                ["--topMargin" as string]: `${topMargin}px`
            }}>
            {children}
        </div>
    );
}
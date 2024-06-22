import styles from "./wavey.module.css";
import { CSSProperties } from "react";

interface WaveyProps {
    children: React.ReactNode,
    className?: string | undefined;
    style?: CSSProperties | undefined;
}

export function WaveyMirror({
    children,
    className,
    style
}: Readonly<WaveyProps>) {
    return WaveyFn(children, "25%", className, style);
}

export function Wavey({
    children,
    className,
    style
}: Readonly<WaveyProps>) {
    return WaveyFn(children, "75%", className, style);
}

function WaveyFn(children: React.ReactNode, 
                 offsetPercent?: `${number}%`, 
                 className?: string | undefined, 
                 style?: CSSProperties | undefined) {

    const waveStyle = {
        ...{
            ["--leftOffset" as string]: offsetPercent
        },
        ...style
    }

    return (
        <div className={styles.wavey + " " + className}
            style={waveStyle}>
            {children}
        </div>
    );
}
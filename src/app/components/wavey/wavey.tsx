import styles from "./wavey.module.css";
import type { CSSProperties } from "react";

interface WaveyProps {
    children: React.ReactNode,
    waveColor: HexColor,
    className?: string | undefined;
    style?: CSSProperties | undefined;
}

type HexColor = `#${string}`;

export function WaveyMirror({
    children,
    waveColor,
    className,
    style
}: Readonly<WaveyProps>) {
    return WaveyFn(children, waveColor, "25%", className, style);
}

export function Wavey({
    children,
    waveColor,
    className,
    style
}: Readonly<WaveyProps>) {
    return WaveyFn(children, waveColor, "75%", className, style);
}

function WaveyFn(children: React.ReactNode, 
                 waveColor: HexColor,
                 offsetPercent?: `${number}%`, 
                 className?: string | undefined, 
                 style?: CSSProperties | undefined) {

    const waveStyle = {
        ...{
            ["--leftOffset" as string]: offsetPercent,
            ["--wave-color" as string]: waveColor
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
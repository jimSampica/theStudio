import styles from "./pillar.module.css";

interface PillarProps {
    children: React.ReactNode
}

export function BluePillar({
    children
}: Readonly<PillarProps>) {
    return (
        <div className={styles.pillar} style={{ ["--pillar-color" as string]: "#ff84f1" }}>
            {children}
        </div>
    );
}

export function PinkPillar({
    children
}: Readonly<PillarProps>) {
    return (
        <div className={styles.pillar} style={{ ["--pillar-color" as string]: "#edff65" }}>
            {children}
        </div>
    );
}

export function YellowPillar({
    children
}: Readonly<PillarProps>) {
    return (
        <div className={styles.pillar} style={{ ["--pillar-color" as string]: "#96e6ff" }}>
            {children}
        </div>
    );
}

export function OrangePillar({
    children
}: Readonly<PillarProps>) { return ColorPillar(children, "#ffaf80") }

type HexColorCode = `#${string}`;

function ColorPillar(children: React.ReactNode, color: HexColorCode){
    return (
        <div className={styles.pillar} style={{ ["--pillar-color" as string]: "#ffaf80" }}>
            {children}
        </div>
    );
}
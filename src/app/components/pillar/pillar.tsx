import styles from "./pillar.module.css";

interface PillarProps {
    children: React.ReactNode
}

export function PinkPillar({
    children
}: Readonly<PillarProps>) { return ColorPillar(children, "#ff84f1") } 

export function YellowPillar({
    children
}: Readonly<PillarProps>) { return ColorPillar(children, "#edff65") } 

export function BluePillar({
    children
}: Readonly<PillarProps>) { return ColorPillar(children, "#96e6ff") } 

export function OrangePillar({
    children
}: Readonly<PillarProps>) { return ColorPillar(children, "#ffaf80") }

type HexColorCode = `#${string}`;

function ColorPillar(children: React.ReactNode, color: HexColorCode){
    return (
        <div className={styles.pillar} style={{ ["--pillar-color" as string]: color }}>
            {children}
        </div>
    );
}
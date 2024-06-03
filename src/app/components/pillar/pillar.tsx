import styles from "./pillar.module.css";

type HexColor = `#${string}`;

interface PillarProps {
    children: React.ReactNode,
    hexColor: HexColor
}

export default function Pillar({
    children,
    hexColor
}: Readonly<PillarProps>) {
    return (
        <div className={styles.pillar} style={{ ["--hexColor" as string]: hexColor }}>
            {children}
        </div>
    );
}
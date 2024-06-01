import styles from "./pillar.module.css";

interface PillarProps {
    children: React.ReactNode,
    offsetPercent?: `${number}%`,
    topMargin?: number;
}

export default function Pillar({
    children,
    offsetPercent = "25%",
    topMargin = 0
}: Readonly<PillarProps>) {
    return (
        <div className={styles.pillar}>
          {children}
        </div>
    );
}
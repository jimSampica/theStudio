import styles from "./pillar.module.css";

interface PillarProps {
    children: React.ReactNode
}

export default function Pillar({
    children,
}: Readonly<PillarProps>) {
    return (
        <div className={styles.pillar}>
          {children}
        </div>
    );
}
import styles from "./splashButton.module.css";

interface SplashButtonProps {
    children: React.ReactNode
}

export default function SplashButton({
    children
}: Readonly<SplashButtonProps>) {
    return (
        <a className={styles.splashButton + " d-flex align-items-center justify-content-evenly p-3 btn btn-warning"}>
            {children}
        </a>
    );
}
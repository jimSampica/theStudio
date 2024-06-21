import styles from "./splashButton.module.css";

interface SplashButtonProps {
    children: React.ReactNode
}

export function PinkSplashButton({
    children
}: Readonly<SplashButtonProps>) { return SplashButton(children, "pink") } 

export function YellowSplashButton({
    children
}: Readonly<SplashButtonProps>) { return SplashButton(children, "yellow") } 

export function BlueSplashButton({
    children
}: Readonly<SplashButtonProps>) { return SplashButton(children, "blue") } 

export function OrangeSplashButton({
    children
}: Readonly<SplashButtonProps>) { return SplashButton(children, "orange") }

type StudioColor2 = "blue" | "pink" | "orange" | "yellow";

function SplashButton(children: React.ReactNode, color: StudioColor2) {
    return (
        <a className={styles.splashButton + " d-flex align-items-center justify-content-evenly p-3 btn btn-warning"}>
            {children}
        </a>
    );
}
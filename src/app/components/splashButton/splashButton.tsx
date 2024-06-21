import styles from "./splashButton.module.css";
import { StudioColor } from "@/app/types/StudioColor";

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

function SplashButton(children: React.ReactNode, color: StudioColor) {
    return (
        <a className={styles.splashButton + " d-flex align-items-center justify-content-evenly p-3 btn btn-warning"}
            style={{ "backgroundColor": `var(--studio-${color})` }}>
            {children}
        </a>
    );
}
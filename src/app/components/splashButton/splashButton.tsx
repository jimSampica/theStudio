import styles from "./splashButton.module.css";
import { StudioColor } from "@/app/types/StudioColor";
import { Url } from "@/app/types/Url"

interface SplashButtonProps {
    children: React.ReactNode,
    href: Url
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
        <a className={styles["btn-splash"] + " d-flex align-items-center justify-content-evenly p-3 btn " + styles[`splash-${color}`]}>
            {children}
        </a>
    );
}
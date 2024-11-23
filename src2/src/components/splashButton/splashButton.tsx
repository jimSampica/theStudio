import styles from "./splashButton.module.css";
import type { StudioColor } from "../../types/StudioColor";
import { Url } from "@/app/types/Url"
import Link from "next/link";

interface SplashButtonProps {
    children: React.ReactNode,
    href: Url
}

export function PinkSplashButton({
    children,
    href
}: Readonly<SplashButtonProps>) { return SplashButton(children, href, "pink") } 

export function YellowSplashButton({
    children,
    href
}: Readonly<SplashButtonProps>) { return SplashButton(children, href, "yellow") } 

export function BlueSplashButton({
    children,
    href
}: Readonly<SplashButtonProps>) { return SplashButton(children, href, "blue") } 

export function OrangeSplashButton({
    children,
    href
}: Readonly<SplashButtonProps>) { return SplashButton(children, href, "orange") }

export function PurpleSplashButton({
    children,
    href
}: Readonly<SplashButtonProps>) { return SplashButton(children, href, "purple") } 

function SplashButton(children: React.ReactNode, href: Url, color: StudioColor) {
    return (
        <Link href={href} className={styles["btn-splash"] + " d-flex align-items-center justify-content-evenly p-3 btn " + styles[`splash-${color}`]}>
            {children}
        </Link>
    );
}
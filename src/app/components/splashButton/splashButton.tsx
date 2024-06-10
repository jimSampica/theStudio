import styles from "./splashButton.module.css";

interface SplashButtonProps {
    children: React.ReactNode
}

export default function SplashButton({
    children
}: Readonly<SplashButtonProps>) {
    return (
        <button>
            {children}
        </button>
    );
}
import { Hitbox } from "./hitbox";
import styles from "./toolHitbox.module.css";

export type Tool = { id: string, description: string, toolTip: string, hitbox: Hitbox }

interface ToolProps {
    tool: Tool
}

export function ToolHitbox({ tool }: ToolProps) {

    function toolClicked() {
        alert(tool.id);
    }

    return (
        <div className={styles.tool} style={tool.hitbox} onClick={toolClicked}></div>
    );
}
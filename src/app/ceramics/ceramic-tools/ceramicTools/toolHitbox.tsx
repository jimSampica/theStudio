import type { Hitbox } from "./hitbox";
import styles from "./toolHitbox.module.css";

export type Tool = { id: string, description: string, toolTip: string, hitbox: Hitbox }

interface ToolProps {
    tool: Tool,
    toolClickedCallback: (answer: Tool) => void
}

function ToolHitbox(tool : Tool, toolClickedCallback :  (answer: Tool) => void, isSelected: boolean) {

    var shownClass = isSelected ? styles.shown : "";
    function toolClicked() {
        toolClickedCallback(tool);
    }

    return (
        <div className={styles.tool + " " + shownClass} style={tool.hitbox} onClick={toolClicked}></div>
    );
}

export function ShownTool({ tool, toolClickedCallback }: ToolProps){
    return ToolHitbox(tool, toolClickedCallback, true);
}

export function HiddenTool({ tool, toolClickedCallback }: ToolProps){
    return ToolHitbox(tool, toolClickedCallback, false);
}
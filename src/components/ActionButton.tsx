import type {Action} from "../types.ts";
import {ActionIcon} from "./ActionIcon.tsx";

export function ActionButton({
                          action = "rock",
                          onActionSelected,
                      }: {
    action: Action;
    onActionSelected: (a: Action) => void;
}) {
    return (
        <button className="round-btn" onClick={() => onActionSelected(action)}>
            <ActionIcon action={action} size={20} />
        </button>
    );
}
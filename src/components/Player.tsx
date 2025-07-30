import {ActionIcon} from './ActionIcon';
import type {Action} from "../types.ts";


// Player listing
 export function Player({name, score, action}: {
    name: string;
    score: number;
    action: Action;
}) {
    return (
        <div className="player">
            <div className="score">{`${name}: ${score}`}</div>
            <div className="action">
                {action && <ActionIcon action={action} size={60} />}
            </div>
        </div>
    );
}
import type {Action} from "../types.ts";
import type {IconType} from "react-icons";
import {FaHome, FaGamepad, FaHandPaper, FaHandRock, FaHandScissors} from "react-icons/fa";

const icons: Record<Action, IconType> = {
    rock: FaHandRock,
    paper: FaHandPaper,
    scissors: FaHandScissors,
    home: FaHome,
    game: FaGamepad,
};

export function ActionIcon({ action, ...props }: { action: Action; size?: number }) {
    const Icon = icons[action];
    return <Icon {...props} />;
}
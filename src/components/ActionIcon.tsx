import type {Action} from "../types.ts";
import type {IconType} from "react-icons";
import {FaHome, FaGamepad, FaHandPaper, FaHandRock, FaHandScissors, FaHandLizard, FaHandSpock} from "react-icons/fa";
import {DiAtom} from "react-icons/di";

const icons: Record<Action, IconType> = {
    rock: FaHandRock,
    paper: FaHandPaper,
    scissors: FaHandScissors,
    home: FaHome,
    game: FaGamepad,
    lizard: FaHandLizard,
    spock: FaHandSpock,
    extendedVersion: DiAtom
};

export function ActionIcon({ action, ...props }: { action: Action; size?: number }) {
    const Icon = icons[action];
    return <Icon {...props} />;
}
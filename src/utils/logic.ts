import type {Action} from "../types.ts";

const actions: Record<Action, Action []>= {
    //winner: "loser"
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    lizard: ["spock", "paper"],
    spock: ["scissors", "rock"],
    home: [],
    game: [],
    extendedVersion: [],
};
export function randomAction(): Action {
    const keys: Action[] = ["rock", "paper", "scissors", "lizard", "spock"];
    const index = Math.floor(Math.random() * keys.length);
    return keys[index];
}

export function calculateWinner(action1: Action, action2: Action):0|1|-1|null {
    //===, because we are comparing type and value
    if (action1 === action2) return 0;
    if (actions[action1].includes(action2)) return -1;
    if (actions[action2].includes(action1)) return 1;

    return null;
}
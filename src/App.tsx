// App.tsx
import "./App.css";
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";
import { useState } from "react";
import type { IconType } from "react-icons";

// Type for game action
type Action = "rock" | "paper" | "scissors";

//which action wins against which action
const actions = {
    //winner: "loser"
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
};

// Type for Computeraction
function randomAction(){
    const keys = Object.keys(actions) as Action[];
    const index = Math.floor(Math.random() * keys.length); //multiply with number of option
    return keys[index];
}

// getting the score
function calculateWinner(action1: Action, action2: Action) {
    //===, because we are comparing type and value
    if (action1 === action2) return 0;
    if (actions[action1] === action2) return -1;
    if(actions[action2] === action1) return 1;

    return null;
}

function ShowWinner({ winner }: { winner: number }) {
    const text: Record<number, string> = {
        [-1]: "Du gewinnst!",
        0: "Unentschieden",
        1: "Du verlierst",
    };

    return <h2>{text[winner]}</h2>;
}

// Icons
const icons: Record<Action, IconType> = {
    rock: FaHandRock,
    paper: FaHandPaper,
    scissors: FaHandScissors,
};

// Icon-Components
function ActionIcon({ action, ...props }: { action: Action; size?: number }) {
    const Icon = icons[action];
    return <Icon {...props} />;
}

// Button for choosing action
function ActionButton({
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

// Player listing
function Player({
                    name = "Player",
                    score = 0,
                    action = "rock",
                }: {
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

// Hauptkomponente
function App() {
    const [playerAction, setPlayerAction] = useState<Action>("rock");
    const [computerAction, setComputerAction] = useState<Action>("rock");

    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [winner, setWinner] = useState<number | null>(null);

    const onActionSelected = (selectedAction: Action) => {
        const newComputerAction = randomAction();

        setPlayerAction(selectedAction);
        setComputerAction(newComputerAction);

        const newWinner = calculateWinner(selectedAction, newComputerAction);
        setWinner(newWinner);
        if (newWinner === -1){
            setPlayerScore(playerScore +1);
        } else if (newWinner === 1) {
            setComputerScore(computerScore +1);
        }
    };

    return (
        <main className="center">
            <h1>Schere Stein Papier</h1>
            <div>
                <div className="container">
                    <Player name="Spieler" score={playerScore} action={playerAction} />
                    <Player name="Computer" score={computerScore} action={computerAction} />
                </div>
                <div>
                    <ActionButton action="scissors" onActionSelected={onActionSelected} />
                    <ActionButton action="rock" onActionSelected={onActionSelected} />
                    <ActionButton action="paper" onActionSelected={onActionSelected} />
                </div>
                <div>
                    {winner !== null && <ShowWinner winner={winner} />}
                </div>
            </div>
        </main>
    );
}

export default App;

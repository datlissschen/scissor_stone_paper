
import "../modules/ScissorStonePaper.css";
import { useState } from "react";

//import components
import { Player } from "../components/Player.tsx";
import { ActionButton } from "../components/ActionButton";
import { ShowWinner } from "../components/ShowWinner.tsx";
import { randomActionExtended, calculateWinner } from "../utils/logicSSP.ts";
import type {Action} from "../types.ts";
import {ActionIcon} from "../components/ActionIcon.tsx";

// main
export default function ScissorStonePaperSpock() {
    const [playerAction, setPlayerAction] = useState<Action>("rock");
    const [computerAction, setComputerAction] = useState<Action>("rock");

    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [winner, setWinner] = useState<number | null>(null);
    const actions: Action[] = ["rock", "paper", "scissors"];

    const onActionSelected = (selectedAction: Action) => {
        const newComputerAction = randomActionExtended();

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
                    {actions.map((action) => (
                        <ActionButton key={action} action={action} onActionSelected={onActionSelected} />
                    ))}
                    <button className="round-btn" onClick={() => onActionSelected("lizard")}>
                        <ActionIcon action={"lizard"} size={20} />
                    </button>
                    <button className="round-btn" onClick={() => onActionSelected("spock")}>
                        <ActionIcon action={"spock"} size={20} />
                    </button>
                </div>
                <div>
                    {winner !== null && <ShowWinner winner={winner} />}
                </div>
            </div>
        </main>
    );
}



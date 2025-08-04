import { Link } from "react-router-dom";
import "../modules/Game.css";
import "../modules/ModalGame.css"
import ModalGame from "../components/ModalGame.tsx";

export default function Game() {
    return (
        <>
            <ModalGame />
            <div className="general">
                <h1>Wähle deine Spieloptionen</h1>
                <ul className="optionlist">
                    <li>
                        <Link to="/SSP" className="gamebutton">SchereSteinPapier</Link>
                    </li>
                    <li>
                        <Link to="/SSPComplex" className="gamebutton">SchereSteinPapierKomplex</Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

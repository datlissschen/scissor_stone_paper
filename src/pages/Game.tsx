import { Link } from "react-router-dom";
import "../modules/Game.css";
import "../modules/Modal.css"
import Modal from "../components/Modal.tsx";

export default function Game() {
    return (
        <>
            <Modal />
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

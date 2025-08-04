import { Link } from "react-router-dom";
import "../modules/Navbar.css"
import {ActionIcon} from "./ActionIcon.tsx"

export function Navbar() {
    return (
        <header className="navbar">
            <nav className="navbar-nav">
                {/*small buttons just for optics*/}
                <button className="designbutton"></button>
                <button className="smallbutton"></button>
                <button className="designbutton"></button>
                <button className="smallbutton"></button>
                <button title="home">
                    <Link to="/">
                        <ActionIcon action="home" size={15} />
                    </Link>
                </button>
                <button title="SchereSteinPapierLizard und Spark Extension">
                    <Link to="/SSPComplex">
                        SchereSteinPapierKomplex
                    </Link>
                </button>
                <button title = "SchereSteinPapier">
                    <Link to="/game">
                        <ActionIcon action="game" size={15} />
                    </Link>
                </button>
            </nav>
        </header>
    );
}

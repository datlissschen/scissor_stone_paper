import { Link } from "react-router-dom";
import "../modules/Navbar.css"
import {ActionIcon} from "./ActionIcon.tsx"

export function Navbar() {
    return (
        <header className="navbar">
            <nav className="navbar-nav">
                <button className="designbutton"></button>
                <button className="smallbutton"></button>
                <button className="designbutton"></button>
                <button>
                    <Link to="/">
                        <ActionIcon action="home" size={15} />
                    </Link>
                </button>
                <button>
                    <Link to="/SSPComplex">
                        SchereSteinPapierKomplex
                    </Link>
                </button>
                <button>
                    <Link to="/game">
                        <ActionIcon action="game" size={15} />
                    </Link>
                </button>
            </nav>
        </header>
    );
}

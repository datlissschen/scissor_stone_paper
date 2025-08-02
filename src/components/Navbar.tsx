import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
            <Link to="/">ScissorStonePaper</Link>
            <Link to="/game">SchereSteinPapier</Link>
        </nav>
    );
}

import {Link} from "react-router-dom";

export default function Game(){
    return(
        <div>
            <h1>Wähle deine Spieloptionen</h1>
            <button title = "SchereSteinPapier">
                <Link to="/schereSteinPapier">
                    SchereSteinPaper
                </Link>
            </button>
            <button title="SchereSteinPapierLizard und Spark Extension">
                <Link to="/SSPComplex">
                    SchereSteinPapierKomplex
                </Link>
            </button>
        </div>
    )
}

import {Link} from "react-router-dom";
import "../modules/Game.css"

export default function Game(){
    return(
        <div className = "general">
            <h1>Wähle deine Spieloptionen</h1>
            <ul className = "optionlist">
                <li>
                    <button className={"gamebutton"} title= "SchereSteinPapier">
                        <Link to="/SSP">
                            SchereSteinPaper
                        </Link>
                    </button>
                </li>
                <li>
                    <button className={"gamebutton"} title="SchereSteinPapierLizard und Spark Extension">
                        <Link to="/SSPComplex">
                            SchereSteinPapierKomplex
                        </Link>
                    </button>
                </li>

            </ul>

        </div>
    )
}

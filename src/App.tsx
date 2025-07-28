import React from 'react';
import "./App.css"
import { FaHandRock, FaHandPaper, FaHandScissors } from "react-icons/fa";

const App: React.FC = () => {
    return (
        <main className = "center">
            <h1> Schere Stein Papier</h1>
            <div>
                <div className = "container">
                    <div className="player">
                        <div className="score">
                            Spieler 1:0
                        </div>
                        <div className="action">
                            <FaHandRock size={60}/>
                        </div>
                    </div>
                    <div className="player">
                        <div className="score">
                        Spieler 2:0
                        </div>
                        <div className = "action">
                            <FaHandRock size={60} />
                        </div>
                    </div>
                </div>
                <div>
                    <button className = "round-btn"><FaHandScissors size={20}/></button>
                    <button className = "round-btn"><FaHandRock size={20}/></button>
                    <button className = "round-btn"><FaHandPaper size={20}/></button>
                </div>
                <div>
                    Spieler 1 gewinnt!
                </div>
            </div>
        </main>
    );
};

export default App;

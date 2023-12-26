import React, { useContext } from "react";
import { QuizContext } from "../../Helpers/Contexts";
import './Main.css';


export default function Main() {
    const{gameState,setGameState}=useContext(QuizContext)
    return (
        <div className="main">
            <button className="submit" onClick={() => { setGameState("quiz"); }}>Start Quiz</button>

        </div>
    )
}
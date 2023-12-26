import React,{useContext} from "react";
import { QuizContext } from "../../Helpers/Contexts";
import { jsquestions } from "../../Helpers/Question";
import './End.css';

const Quiz = () => {
    const { score,setScore,setGameState } = useContext(QuizContext)
    const restart = () => {
        setScore(0);
        setGameState('main');
}
    return (
        <div className="end">
            <h1>Quiz Finished</h1>
            <h3>{score} / {jsquestions.length}</h3>
            <button className="submit" onClick={()=>restart()}>Restart Quiz</button>

        </div>
    )
}

export default Quiz;
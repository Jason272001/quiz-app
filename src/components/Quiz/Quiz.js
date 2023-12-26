import React,{useState,useContext} from "react";
import { jsquestions } from "../../Helpers/Question";
import { QuizContext } from "../../Helpers/Contexts";
import './Quiz.css';
const Quiz = () => {
    const{score,setScore,setGameState}=useContext(QuizContext)
    const [ Question, setQuestion ] = useState(0);
    const [Chosen, setChosen] = useState("");
    const nextQuestion = () => {
        if (jsquestions[Question].answer === Chosen) {
            setScore(score+1)
        }
        
        setQuestion(Question + 1);
        
    }

    const finishQuiz = () => {
            if (jsquestions[Question].answer === Chosen) {
            setScore(score+1)
        }
        setGameState("end")
    }
    return (
        
        <div className="quiz">
            <h1 className="question">{jsquestions[Question].question}</h1>
            <div className="option">
                <button className="btn" onClick={() => setChosen("optionA")}>
                    {jsquestions[Question].optionA}
                </button>
                <button className="btn" onClick={() => setChosen("optionB")}>
                    {jsquestions[Question].optionB}
                </button>
                <button className="btn" onClick={() => setChosen("optionC")}>
                    {jsquestions[Question].optionC}
                </button>
                <button className="btn" onClick={() => setChosen("optionD")}>
                    {jsquestions[Question].optionD}
                </button>
            </div>
            {Question === jsquestions.length - 1 ?
                (<button className="submit" onClick={()=>finishQuiz()}>Finish Quiz</button>)
                : (<button className="submit" onClick={() => nextQuestion()}>Next Question</button>)
            }
        </div>
    )
}

export default Quiz;
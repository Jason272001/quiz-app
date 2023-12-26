
import './App.css';
import Main from './components/Main/Main'
import Quiz from './components/Quiz/Quiz'
import End from './components/End/End'
import React, { useState,useContext } from 'react';
import { QuizContext } from './Helpers/Contexts';
function App() {

  const [gameState, setGameState] = useState("main");
  const [score,setScore]=useState(0)

  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuizContext.Provider value={{ gameState,setGameState,score,setScore }}>
    
        {gameState === "main" && <Main />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "end" && <End />}

      </QuizContext.Provider>
    </div>
  );
}

export default App;

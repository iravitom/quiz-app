import "./quiz.styles.css";
import { Questions } from "../../helpers/questions";
import { useState, useContext } from "react";
import { CurrentStateContext } from "../../helpers/contexts";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const { score, setScore } = useContext(CurrentStateContext);

  const submitAnswer = (inputVal) => {
    setCurrentQuestion(currentQuestion + 1);
    setSelectedAnswer(inputVal);
    alert(selectedAnswer);
    inputVal === Questions[currentQuestion].answer && setScore(score + 2);
  };
  return (
    <div className="quiz-component">
      <h4>{Questions[currentQuestion].question} </h4>
      <div className="d-flex flex-column align-items-center  justify-content-center">
        <button
          onClick={() => submitAnswer("optionA")}
          type="button"
          className="btn btn-outline-secondary mt-3 w-75  "
        >
          {Questions[currentQuestion].optionA}
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary mt-3 w-75 "
          onClick={() => submitAnswer("optionB")}
        >
          {Questions[currentQuestion].optionB}
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary mt-3 w-75 "
          onClick={() => submitAnswer("optionC")}
        >
          {Questions[currentQuestion].optionC}
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary mt-3 w-75 "
          onClick={() => submitAnswer("optionD")}
        >
          {Questions[currentQuestion].optionD}
        </button>
      </div>
    </div>
  );
}
export default Quiz;

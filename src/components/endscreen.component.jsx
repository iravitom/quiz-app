import { useContext } from "react";
import { CurrentStateContext } from "../helpers/contexts";
function EndComponent() {
  const { score, setScore, userName, setCurrentState } =
    useContext(CurrentStateContext);
  const reset = () => {
    setCurrentState("quiz");
    setScore(0);
  };
  return (
    <div className="d-flex flex-column align-items-center">
      <h2 className="font">
        Hi <span className="username">{userName},</span> you have played well
        and your score is
        <span className="score"> {score} / 30</span>
      </h2>
      <div className="mt-5">
        <button onClick={reset} className="btn btn-primary custom-btn mt-3">
          Play Again
        </button>
      </div>
    </div>
  );
}
export default EndComponent;

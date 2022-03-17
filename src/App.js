import "./App.css";
import Menu from "./components/menu.component";
import logo from "./assets/logo.png";
import Quiz from "./components/quiz/quiz.component";
import EndComponent from "./components/endscreen.component";
import { useRef, useState } from "react";

import { CurrentStateContext } from "./helpers/contexts";

function App() {
  const [currentState, setCurrentState] = useState("menu");
  const [userName, setUserName] = useState("");
  const [score, setScore] = useState(0);

  return (
    <div className="container d-flex flex-column align-items-center  justify-content-center">
      <img className="mt-4" width="250" src={logo} alt="logo" />
      <br />
      <CurrentStateContext.Provider
        value={{
          currentState,
          setCurrentState,
          userName,
          setUserName,
          score,
          setScore,
        }}
      >
        {currentState === "menu" && <Menu></Menu>}
        {currentState === "quiz" && <Quiz></Quiz>}
        {currentState === "finshed" && <EndComponent></EndComponent>}
      </CurrentStateContext.Provider>
    </div>
  );
}

export default App;

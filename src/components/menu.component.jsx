import "./menu.styles.css";
import { useContext, useRef } from "react";
import { CurrentStateContext } from "../helpers/contexts";
function Menu() {
  const { currentState, setCurrentState, userName, setUserName } =
    useContext(CurrentStateContext);
  const inputEl = useRef(null);
  return (
    <div className="d-flex flex-column w-25 mt-5 ">
      <div className="form-group">
        <input
          type="Text"
          className="form-control"
          ref={inputEl}
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter Name"
          onChange={() => setUserName(inputEl.current.value)}
        />
      </div>
      <button
        onClick={() => inputEl.current.value && setCurrentState("quiz")}
        className="btn btn-primary custom-btn mt-3"
      >
        Start Quiz
      </button>
    </div>
  );
}
export default Menu;

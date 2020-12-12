import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Game from "./components/Game";
import Start from "./components/Start";
import { useState } from "react";

function App() {
  const [state, setState] = useState("start");

  function handleStart() {
    setState("play");
  }

  function handleCompleted(count) {
    console.log(`Correct count ${count}`);
  }

  const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
  const count = 5;

  const bodyElement =
    state === "start" ? (
      <Start onStart={handleStart} />
    ) : (
      <Game count={count} onCompleted={handleCompleted} numbers={numbers} />
    );

  return (
    <div className="App">
      <header className="App-header">{bodyElement}</header>
    </div>
  );
}

export default App;

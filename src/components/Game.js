import { useState } from "react";
import generateProblems from "../utils/generateProblems";
import Problems from "./Problems";

const Game = (props) => {
  // input: count, numbers
  // output: onCompleted
  const [turn, setTurn] = useState(0);

  const problems = generateProblems(props.count, props.numbers);

  function handleCompleted() {
    const total = problems.filter((p) => p.correct).length;
    props.onCompleted(total);
    setTurn(turn + 1);
  }

  return (
    <Problems key={turn} problems={problems} onCompleted={handleCompleted} />
  );
};

export default Game;

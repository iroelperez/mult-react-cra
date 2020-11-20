import generateProblems from "../utils/generateProblems";
import Problems from "./Problems";

const Game = (props) => {
  // input: count, numbers
  // output: onCompleted
  const problems = generateProblems(props.count, props.numbers);

  function handleCompleted() {
    const total = problems.filter((p) => p.correct).length;
    props.onCompleted(total);
  }

  return <Problems problems={problems} onCompleted={handleCompleted} />;
};

export default Game;

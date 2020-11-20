import { useState } from "react";
import Problem from "./Problem";

const Problems = (props) => {
  // input -> problems: [{ a, b, sol1, sol2, sol3 },..]

  const [index, setIndex] = useState(0);

  const total = props.problems.length;
  const problem = props.problems[index];

  function handleCompled(correct) {
    problem.correct = correct;
    if (index < total - 1) {
      setIndex(index + 1);
    } else if (props.onCompleted) {
      props.onCompleted();
    }
  }

  return (
    <Problem
      key={index}
      {...problem}
      problem={index + 1}
      total={total}
      onCompleted={handleCompled}
    />
  );
};

export default Problems;

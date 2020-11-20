import { useState, useEffect } from "react";
import { Card, ListGroup } from "react-bootstrap";

import Solution from "./Solution";

// input: a, b, sol1, sol2, sol3
// events: onClick
const Problem = (props) => {
  const [picked, setSolution] = useState(null);

  const solution = props.a * props.b;
  const solutions = [props.sol1, props.sol2, props.sol3].map(getSolutionFrom);
  const correct = picked === solution;

  function getSolutionFrom(number) {
    if (picked == null) {
      return { number, status: "before" };
    } else if (number === picked) {
      return { number, status: picked === solution ? "right" : "wrong" };
    } else {
      return { number, status: number === solution ? "right" : "none" };
    }
  }

  useEffect(() => {
    if (picked && props.onCompleted) {
      const timerId = setTimeout(
        () => props.onCompleted(correct),
        correct ? 1000 : 2000
      );
      return () => clearTimeout(timerId);
    }
  });

  return (
    <Card>
      <Card.Header style={{ color: "black" }}>
        Problem {props.problem} / {props.total}
      </Card.Header>
      <Card.Body style={{ color: "black" }}>
        <p>
          <span>{props.a}</span>&nbsp;<span>x</span>&nbsp;<span>{props.b}</span>
          &nbsp;<span>=</span>
        </p>
        <ListGroup horizontal>
          {solutions.map((s) => (
            <ListGroup.Item key={s.number}>
              <Solution {...s} onClick={setSolution} />
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Problem;

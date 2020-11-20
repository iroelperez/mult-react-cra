import { Button } from "react-bootstrap";

const Solution = (props) => {
  const classMap = {
    before: "primary",
    right: "success",
    wrong: "danger",
    none: "secondary",
  };

  const btnClass = classMap[props.status] || "primary";
  const handleClick = () => props.onClick(props.number);
  const isDisabled = props.status !== "before";

  return (
    <Button variant={btnClass} onClick={handleClick} disabled={isDisabled}>
      {props.number}
    </Button>
  );
};

export default Solution;

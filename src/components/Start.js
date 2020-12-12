import { Form, Button } from "react-bootstrap";

const Start = (props) => {
  return (
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Your name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" />
        <Form.Text className="text-muted">
          We'll never share your name with anyone else.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="button" onClick={props.onStart}>
        Play!
      </Button>
    </Form>
  );
};

export default Start;

import { render, screen } from "@testing-library/react";
import Solution from "./Solution";

test("renders proper number and class primary", () => {
  render(<Solution number="33" status="before" />);
  const linkElement = screen.getByText(/33/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toContainHTML(
    '<button type="button" class="btn btn-primary">33</button>'
  );
});

test("renders class success on status right", () => {
  render(<Solution number="42" status="right" />);
  const linkElement = screen.getByText(/42/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveClass("btn-success");
});

test("renders class danger on status wrong", () => {
  render(<Solution number="42" status="wrong" />);
  const linkElement = screen.getByText(/42/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveClass("btn-danger");
});

test("renders class danger on status none", () => {
  render(<Solution number="42" status="none" />);
  const linkElement = screen.getByText(/42/i);
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toHaveClass("btn-secondary");
});

// todo: test the buttons must be dissable if not status = 'before'

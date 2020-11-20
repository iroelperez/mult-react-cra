import generateProblems from "./generateProblems";

test("renders proper number and class primary", () => {
  const problems = generateProblems(5, [2, 3, 5, 6, 9]);
  expect(problems.length === 5).toBeTruthy();
});

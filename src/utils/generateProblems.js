function generateProblems(count, numbers) {
  function getRandomOf(n) {
    return 1 + Math.floor(Math.random() * n);
  }

  function generateProblem(a, b) {
    function shuffleArray(array) {
      var len = array.length;
      var shuffled = [...array];

      for (var i = 0; i < getRandomOf(10); i++) {
        var p = getRandomOf(len - 1);
        var aux = shuffled[p - 1];
        shuffled[p - 1] = shuffled[p];
        shuffled[p] = aux;
      }

      return shuffled;
    }

    const solution = a * b;
    const under_solution = solution - getRandomOf(5);
    const over_solution = solution + getRandomOf(5);
    const problem = shuffleArray([
      under_solution < 0 ? over_solution + 1 : under_solution,
      solution,
      over_solution,
    ]);

    return { a, b, sol1: problem[0], sol2: problem[1], sol3: problem[2] };
  }

  const relevant = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return [...Array(count).keys()].map((k) => {
    const a = numbers[getRandomOf(numbers.length) - 1];
    const b = relevant[getRandomOf(relevant.length) - 1];
    return generateProblem(a, b);
  });
}

export default generateProblems;

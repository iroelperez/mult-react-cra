import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Game from "./components/Game";

function App() {
  function handleCompleted(count) {
    console.log(`Correct count ${count}`);
  }

  const numbers = [2, 3, 4, 5, 6, 7, 8, 9];
  const count = 5;

  return (
    <div className="App">
      <header className="App-header">
        <Game count={count} onCompleted={handleCompleted} numbers={numbers} />
      </header>
    </div>
  );
}

export default App;

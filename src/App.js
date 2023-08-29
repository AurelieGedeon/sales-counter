import "./App.css";
import Counter from "./components/Counter/Counter";
import Modal from "./components/Modal/Modal";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Modal />
      </header>
    </div>
  );
}

export default App;

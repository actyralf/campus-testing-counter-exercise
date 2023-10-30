import "./App.css";
import { Counter } from "./components/Counter";
import { useState } from "react";

function App() {
  const [persons, setPersons] = useState(8);
  function handleSubmit(newValue) {
    setPersons(newValue);
  }
  return (
    <>
      <h1>Vite + React</h1>
      <h2>You selected {persons} persons</h2>

      <Counter initialValue={persons} onSubmit={handleSubmit} />
    </>
  );
}

export default App;

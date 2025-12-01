import { useState } from "react";
import lor from "./assets/lor.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Lor</h1>
        <img src={lor} className="logo" alt="Vite logo" />
      </div>
    </>
  );
}

export default App;

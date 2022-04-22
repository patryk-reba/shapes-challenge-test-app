import logo from "./logo.svg";
import "./App.css";
import { Triangle, Square, Circle, Hexagon } from "reba-shapes-challenge";
import { useState } from "react";

// import { Triangle } from "reba-shapes-react";
function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <div className="shapes">
          <Triangle
            color="yellow"
            onClick={() => setText("Triangle Clicked")}
          />
          <Square color="green" onClick={() => setText("Square Clicked")} />
          <Circle color="pink" onClick={() => setText("Circle Clicked")} />
          <Hexagon color="orange" onClick={() => setText("Hexagon Clicked")} />
        </div>

        {text}
      </header>
    </div>
  );
}

export default App;

import { useState } from "react";
import Card from "./Card";
import "./styles.css";

export default function App() {
  const [difficulty, setDifficulty] = useState("");
  function handelDifficulty(str) {
    setDifficulty(str);
  }
  return (
    <div className="App">
      <h3 className="ttl">Dev Challenge Picker</h3>
      <div className="container">
        <div className="btnsCont">
          <button className="btn-easy" onClick={() => handelDifficulty("Easy")}>
            Easy 🟢
          </button>
          <button
            className="btn-medium"
            onClick={() => handelDifficulty("Medium")}
          >
            Medium 🟡
          </button>
          <button className="btn-hard" onClick={() => handelDifficulty("Hard")}>
            Hard 🔴
          </button>
          <button
            className="btn-random"
            onClick={() => handelDifficulty("Random")}
          >
            Random 🔵
          </button>
        </div>
        {difficulty !== "" && <Card difficulty={difficulty} />}
      </div>
    </div>
  );
}

import { useState } from "react";
import "./index.css";

function App() {
  let randomColor = () => {
    return Math.floor(Math.random() * 255);
  };

  const [color, setColor] = useState([
    randomColor(),
    randomColor(),
    randomColor(),
  ]);

  const [rotate, setRotate] = useState(0);

  console.log(color);

  setInterval(
    () => setColor([randomColor(), randomColor(), randomColor()]),
    1000
  );

  return (
    <div
      className="App"
      onClick={() => {
        setColor([randomColor(), randomColor(), randomColor()]);
        setRotate(rotate + 20);
      }}
    >
      <h3>
        <span>COLOR</span>
      </h3>
      <div
        className="colorPanel"
        style={{
          backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})`,
          transform: `rotate(${rotate}deg)`,
        }}
      ></div>
    </div>
  );
}

export default App;

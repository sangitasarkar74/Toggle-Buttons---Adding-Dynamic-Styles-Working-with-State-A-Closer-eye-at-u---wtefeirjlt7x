import React, { useState } from 'react'
import '../styles/App.css';
const App = () => {
  //code here 
  let [buttonState, setButtonState] = useState({ id1: "OFF", id2: "ON" });


  const handleClick = (e) => {
    if (e.target.id == "btn1") {
      if (e.target.innerText == "OFF") {
        setButtonState({
          id1: "ON",
          id2: "OFF",
        });
      } else {
        setButtonState({
          id1: "OFF",
          id2: "ON"
        });
      }
    } else {
      if (e.target.innerText == "ON") {
        setButtonState({
          id1: "ON",
          id2: "OFF",
        });
      } else {
        setButtonState({
          id1: "OFF",
          id2: "ON",
        });
      }
    }
  };

  return (
    <div className="App">
      <button id="btn1" onClick={handleClick}>
        {buttonState.id1}
      </button>
      <br />

      <br />
      <button id="btn2" onClick={handleClick}>
        {buttonState.id2}
      </button>
    </div>
  );
}


export default App;

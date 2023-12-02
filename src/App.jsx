import { useState } from "react";
import "./App.css";
import ButtonsContainer from "./components/ButtonsContainer";
import DisplayResult from "./components/DisplayResult";

function App() {
  //useState to manage display result
  const [calValue, setCalVal] = useState("");

  const buttonClick = (buttonText) => {
    //console.log(`${buttonText} Button CLicked`);

    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      let result = eval(calValue);
      setCalVal(result);
    } else {
      let newResult = calValue + buttonText;
      setCalVal(newResult);
    }
  };

  return (
    <>
      <center>
        <div className="calculator">
          <DisplayResult calValue={calValue} />
          <ButtonsContainer handleButtonClick={buttonClick} />
        </div>
      </center>
    </>
  );
}

export default App;

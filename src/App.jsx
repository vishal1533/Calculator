import InputField from "./components/InputField";
import ButtonContainer from "./components/ButtonContainer";

import "bootstrap/dist/css/bootstrap.min.css";
import style from "./App.module.css";
import { useState } from "react";

function App() {
  let InputItems = [
    "C",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    ".",
    "+",
    "-",
    "*",
    "/",
    "=",
  ];
  let clearExpression = () => {
    setCurrExpression("");
  };
  let [currExpression, setCurrExpression] = useState("");
  const onButtonInput = (item) => {
    if (item === "C") {
      clearExpression();
    } else if (item === "=") {
      const res = eval(currExpression);
      setCurrExpression(res);
    } else {
      setCurrExpression(currExpression + item);
    }

    console.log(currExpression);
  };
  return (
    <div className={style.calculatorContainer}>
      <InputField currExpression={currExpression} />
      <ButtonContainer
        Items={InputItems}
        onButtonInput={onButtonInput}
      ></ButtonContainer>
    </div>
  );
}

export default App;

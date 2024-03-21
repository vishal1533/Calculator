import InputField from "./components/InputField";
import ButtonContainer from "./components/ButtonContainer";

import "bootstrap/dist/css/bootstrap.min.css";
import style from "./App.module.css";

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
  return (
    <div className={style.calculatorContainer}>
      <InputField />
      <ButtonContainer Items={InputItems}></ButtonContainer>
    </div>
  );
}

export default App;

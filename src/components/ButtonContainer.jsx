import ButtonItem from "./ButtonItem";

import style from "./ButtonContainer.module.css";

const ButtonContainer = ({ Items }) => {
  console.log("hello");
  return (
    <div className={style.buttonContainer}>
      {Items.map((Item) => (
        <ButtonItem Item={Item}></ButtonItem>
      ))}
    </div>
  );
};

export default ButtonContainer;

import ButtonItem from "./ButtonItem";

import style from "./ButtonContainer.module.css";

const ButtonContainer = ({ Items }) => {
  return (
    <div className={style.buttonContainer}>
      {Items.map((Item) => (
        <ButtonItem key={Item} Item={Item}></ButtonItem>
      ))}
    </div>
  );
};

export default ButtonContainer;

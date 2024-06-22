import ButtonItem from "./ButtonItem";

import style from "./ButtonContainer.module.css";

const ButtonContainer = ({ Items, onButtonInput }) => {
  return (
    <div className={style.buttonContainer}>
      {Items.map((Item) => (
        <ButtonItem
          key={Item}
          Item={Item}
          onButtonInput={onButtonInput}
        ></ButtonItem>
      ))}
    </div>
  );
};

export default ButtonContainer;

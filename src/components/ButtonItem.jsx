import style from "./ButtonItem.module.css";

const ButtonItem = ({ Item, onButtonInput }) => {
  return (
    <>
      <button className={style.button} onClick={() => onButtonInput(Item)}>
        {Item}
      </button>
    </>
  );
};
export default ButtonItem;

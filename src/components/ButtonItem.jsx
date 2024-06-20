import style from "./ButtonItem.module.css";

const ButtonItem = ({ Item }) => {
  return (
    <>
      <button
        className={style.button}
        onClick={() => console.log(`${Item} Clicked`)}
      >
        {Item}
      </button>
    </>
  );
};
export default ButtonItem;

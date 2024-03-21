import style from "./ButtonItem.module.css";

const ButtonItem = ({ Item }) => {
  return <button className={style.button}>{Item}</button>;
};
export default ButtonItem;

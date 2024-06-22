import style from "./InputField.module.css";

const InputField = ({ currExpression }) => {
  return (
    <input
      className={style.display}
      type="text"
      value={currExpression}
      readOnly={true}
    ></input>
  );
};

export default InputField;

import React, { useEffect } from "react";
import "./InputCG.css";

const InputCG = ({
  state,
  setState,
  name,
  placeHolder,
  errorMsg,
  id,
  expresionRegular,
}) => {
  const onChange = (e) => {
    setState({
      ...state,
      campo: e.target.value,
    });
  };

  let className = "inputcg-input";
  const validate = () => {
    if (expresionRegular) {
      if (expresionRegular.test(state.campo)) state.validate = true;
      else state.validate = false;
    }
  };

  if (state.validate === true) className = "inputcg-inputt";
  else if (state.validate === false) className = "inputcg-inputf";

  return (
    <form className="inputcg-form">
      <label htmlFor={id} className="inputcg-label">
        {name}
      </label>
      <input
        type="text"
        className={className}
        placeholder={placeHolder}
        id={id}
        value={state.campo}
        onChange={onChange}
        onKeyUp={validate}
        onBlur={validate}
      />
      <p className="inputcg-em">{errorMsg}</p>
    </form>
  );
};

export default InputCG;

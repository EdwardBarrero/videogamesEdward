import React from "react";
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

  const validate = () => {
    if (expresionRegular.test(state.campo)) state.validate = true;
    else state.validate = false;
  };


  return (
    <form className="inputcg-form">
      <label htmlFor={id} className="inputcg-label">
        {name}
      </label>
      <input
        type="text"
        className={state.validate == true? "inputcg-input active" : state.validate == false?"inputcg-input disable": "inputcg-input"}
        placeholder={placeHolder}
        id={id}
        value={state.campo}
        onChange={onChange}
        onKeyUp={validate}
        onBlur={validate}
      />
      <p className={state.validate == false? "inputcg-em error" : "inputcg-em"}>{errorMsg}</p>
    </form>
  );
};

export default InputCG;

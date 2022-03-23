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
  let classNameP = "inputcg-em";
  const validate = () => {
    if (expresionRegular.test(state.campo)) state.validate = true;
    else state.validate = false;
  };

  // if (state.validate === true) {
  //   className = "inputcg-inputt";
  // } else if (state.validate === false) {
  //   className = "inputcg-inputf";
  //   classNameP = "inputcg-emf";
  // }

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
      {

      }
      {/* <p className={classNameP}>{errorMsg}</p> */}
    </form>
  );
};

export default InputCG;

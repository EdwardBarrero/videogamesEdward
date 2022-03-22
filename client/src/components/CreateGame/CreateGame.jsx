import React, { useState } from "react";
import "./CreateGame.css";
import InputCG from "../InputCG/InputCG";

export default function CreateGame() {
  const [nombre, setNombre] = useState({ campo: "", validate: null });
  const [descripcion, setDescripcion] = useState({ campo: "", validate: null });
  const [date, setDate] = useState({ campo: "", validate: null });
  const [rating, setRating] = useState({ campo: "", validate: null });

  const expresiones = {
    nombre: /^[a-zA-Z0-9\_\-]{2,16}$/,
    descripcion: /^[a-zA-Z0-9À-ÿ\s]{1,200}$/,
    date: /^([012][1-9]|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/,
    rating: /^[0-5]*(\.?)[0-9]$/,
  };

  return (
    <>
      <div className="creategame">
        <h1>CREA UN JUEGO</h1>
        <div className="creategame-forms">
          <InputCG
            state={nombre}
            setState={setNombre}
            name={"Nombre"}
            placeHolder={"Nombre"}
            errorMsg={
              "Debe de tener de 2 a 16 carácteres, acepta números, letras, guion y guion bajo"
            }
            id={"nombre"}
            expresionRegular={expresiones.nombre}
          />
          <InputCG
            state={descripcion}
            setState={setDescripcion}
            name={"Descripción"}
            placeHolder={"Descripción"}
            errorMsg={"Máximo 200 caracteres, acepta caracteres especiales"}
            id={"descripcion"}
            expresionRegular={expresiones.descripcion}
          />
          <InputCG
            state={date}
            setState={setDate}
            name={"Fecha de lanzamiento"}
            placeHolder={"DD/MM/AAAA"}
            errorMsg={"Debe ingresar una fecha válida"}
            id={"date"}
            expresionRegular={expresiones.date}
          />
          <InputCG
            state={rating}
            setState={setRating}
            name={"Rating"}
            placeHolder={"Rating"}
            errorMsg={"Debe ingresar un número válido"}
            id={"rating"}
            expresionRegular={expresiones.rating}
          />
          {false && (
            <div className="creategame-ef">
              <p>
                <b>Error:</b> Por favor rellena el formulario correctamente
              </p>
            </div>
          )}
          <div className="creategame-btn">
            <button type="submit">CREAR</button>
            <p>El juego fue creado exitosamente!</p>
          </div>
        </div>
      </div>
    </>
  );
}

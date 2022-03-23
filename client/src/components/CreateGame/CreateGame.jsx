import React, { useEffect, useState } from "react";
import "./CreateGame.css";
import InputCG from "../InputCG/InputCG";

export default function CreateGame() {
  const genres = [
    "Action",
    "Indie",
    "Adventure",
    "RPG",
    "Strategy",
    "Shooter",
    "Casual",
    "Simulation",
    "Puzzle",
    "Arcade",
    "Platformer",
    "Racing",
    "Massively Multiplayer",
    "Sports",
    "Fighting",
    "Family",
    "Board Games",
    "Educational",
    "Card",
  ];
  


  const [nombre, setNombre] = useState({ campo: "", validate: null });
  const [descripcion, setDescripcion] = useState({ campo: "", validate: null });
  const [date, setDate] = useState({ campo: "", validate: null });
  const [rating, setRating] = useState({ campo: "", validate: null });
  const [generos, setGeneros] = useState({ generos: [], validate: null });

  const expresiones = {
    nombre: /^[a-zA-Z0-9\_\-]{1,16}$/,
    descripcion: /^[a-zA-Z0-9À-ÿ\s]{1,200}$/,
    date: /^([012][1-9]|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/,
    rating: /^[0-5]*(\.?)[0-9]$/,
  };

  let validado = false;

  const onClick = (g) => {
    let nuevosGeneros = [];
    if (!generos.generos.includes(g)) {
      setGeneros({
        ...generos,
        generos: [...generos.generos, g],
      });
    } else {
      nuevosGeneros = generos.generos.filter((genr) => {
        return genr !== g;
      });
      console.log("Hola");
      setGeneros({
        ...generos,
        generos: nuevosGeneros,
      });
    }
  };

  function validate() {
    nombre.validate &&
      descripcion.validate &&
      date.validate &&
      rating.validate &&
      (validado = true);
  }

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
          {/* {validado === true ? (
            <p>El juego fue creado exitosamente!</p>
          ) : (
            <div className="creategame-ef">
              <p>
                <b>Error:</b> Por favor rellena el formulario correctamente
              </p>
            </div>
          )} */}
          <div className="creategame-genres">
            <p>
              <b>Generos</b> (Selecciona los generos)
            </p>
            <div className="creategame-genrescontent">
              {genres.map((g) =>
                !generos.generos.includes(g) ? (
                  <button className="creategame-genresbtnf" onClick={() => onClick(g)}>{g}</button>
                ) : (
                  <button className="creategame-genresbtnt" onClick={() => onClick(g)}>{g}</button>
                )
              )}
            </div>
          </div>
          <div className="creategame-genres">
            <p>
              <b>Plataformas</b> (Selecciona las plataformas)
            </p>
            <div className="creategame-genrescontent">
              {genres.map((g) =>
                !generos.generos.includes(g) ? (
                  <button className="creategame-genresbtnf" onClick={() => onClick(g)}>{g}</button>
                ) : (
                  <button className="creategame-genresbtnt" onClick={() => onClick(g)}>{g}</button>
                )
              )}
            </div>
          </div>
          <div className="creategame-btn">
            <button type="submit" onClick={validate}>
              CREAR
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

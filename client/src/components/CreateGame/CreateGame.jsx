import React, { useState } from "react";
import "./CreateGame.css";
import InputCG from "../InputCG/InputCG";
import { Link } from "react-router-dom";
const axios = require("axios");

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

  const platforms = [
    "PC",
    "PlayStation 5",
    "Xbox One",
    "PlayStation 4",
    "Xbox Series S/X",
    "Nintendo Switch",
    "iOS",
    "Android",
    "Nintendo 3DS",
    "Nintendo DS",
    "Nintendo DSi",
    "macOS",
    "Linux",
    "Xbox 360",
    "Xbox",
    "PlayStation 3",
    "PlayStation 2",
    "PlayStation",
    "PS Vita",
    "PSP",
    "Wii U",
    "Wii",
    "GameCube",
    "Nintendo 64",
    "Game Boy Advance",
    "Game Boy Color",
    "Game Boy",
    "SNES",
    "NES",
    "Classic Macintosh",
    "Apple II",
    "Commodore / Amiga",
    "Atari 7800",
    "Atari 5200",
    "Atari 2600",
    "Atari Flashback",
    "Atari 8-bit",
    "Atari ST",
    "Atari Lynx",
    "Atari XEGS",
    "Genesis",
    "SEGA Saturn",
    "SEGA CD",
    "SEGA 32X",
    "SEGA Master System",
    "Dreamcast",
    "3DO",
    "Jaguar",
    "Game Gear",
    "Neo Geo",
  ];

  const expresiones = {
    nombre: /^[a-zA-Z0-9\_\-]{1,16}$/,
    descripcion: /^[a-zA-Z0-9À-ÿ\s]{1,200}$/,
    date: /^([012][1-9]|3[01])(-)(0[1-9]|1[012])\2(\d{4})$/,
    rating: /^[0-5]*(\.?)[0-9]$/,
  };

  const [nombre, setNombre] = useState({ campo: "", validate: null });
  const [descripcion, setDescripcion] = useState({ campo: "", validate: null });
  const [date, setDate] = useState({ campo: "", validate: null });
  const [rating, setRating] = useState({ campo: "", validate: null });
  const [generos, setGeneros] = useState({ generos: [], validate: null });
  const [plataformas, setPlataformas] = useState({
    plataformas: [],
    validate: null,
  });
  const [error, setError] = useState(null);

  const onClickGenrs = (g) => {
    let nuevosGeneros = [];
    if (!generos.generos.includes(g)) {
      setGeneros({
        ...generos,
        generos: [...generos.generos, g],
        validate: true,
      });
    } else {
      nuevosGeneros = generos.generos.filter((genr) => {
        return genr !== g;
      });
      if (nuevosGeneros.length === 0) {
        setGeneros({
          ...generos,
          generos: nuevosGeneros,
          validate: false,
        });
      } else {
        setGeneros({
          ...generos,
          generos: nuevosGeneros,
        });
      }
    }
  };

  const onClickPlatforms = (p) => {
    let nuevasPlataformas = [];
    if (!plataformas.plataformas.includes(p)) {
      setPlataformas({
        ...plataformas,
        plataformas: [...plataformas.plataformas, p],
        validate: true,
      });
    } else {
      nuevasPlataformas = plataformas.plataformas.filter((platform) => {
        return platform !== p;
      });
      if (nuevasPlataformas.length === 0) {
        setPlataformas({
          ...plataformas,
          plataformas: nuevasPlataformas,
          validate: false,
        });
      } else {
        setPlataformas({
          ...plataformas,
          plataformas: nuevasPlataformas,
        });
      }
    }
  };

  const validateForm = async () => {
    if (
      nombre.validate &&
      descripcion.validate &&
      date.validate &&
      rating.validate &&
      generos.validate &&
      plataformas.validate
    ) {
      setError(false);
      await axios
        .post("http://localhost:3002/api/videogames/", {
          name: nombre.campo,
          description: descripcion.campo,
          rating: rating.campo,
          platforms: plataformas.plataformas.join(","),
          released: date.campo,
        })
        .then((ress) => {
          const gameId = ress.data;
          generos.generos.map((genero) => {
            axios
              .get(`http://localhost:3002/api/genres/${genero}`)
              .then((response) => {
                let genrId = response.data;
                axios.post(
                  `http://localhost:3002/api/videogames/${gameId}/genr/${genrId}`
                );
              });
          });
        })
        .catch((error) => {
          setError(true);
        });
    } else {
      setError(true);
    }
  };

  const resetStatus = async () => {
    setNombre({
      campo: "",
    });
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
            placeHolder={"DD-MM-AAAA"}
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
          <div className="creategame-genres">
            <p>
              <b>Generos</b> (Selecciona mínimo un genero)
            </p>
            <div className="creategame-genrescontent">
              {genres.map((g) =>
                !generos.generos.includes(g) ? (
                  <button
                    className="creategame-genresbtnf"
                    onClick={() => onClickGenrs(g)}
                  >
                    {g}
                  </button>
                ) : (
                  <button
                    className="creategame-genresbtnt"
                    onClick={() => onClickGenrs(g)}
                  >
                    {g}
                  </button>
                )
              )}
            </div>
          </div>
          <div className="creategame-genres">
            <p>
              <b>Plataformas</b> (Selecciona mínimo una plataforma)
            </p>
            <div className="creategame-genrescontent">
              {platforms.map((p) =>
                !plataformas.plataformas.includes(p) ? (
                  <button
                    className="creategame-genresbtnf"
                    onClick={() => onClickPlatforms(p)}
                  >
                    {p}
                  </button>
                ) : (
                  <button
                    className="creategame-genresbtnt"
                    onClick={() => onClickPlatforms(p)}
                  >
                    {p}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="creategame-btn">
            {error ? (
              <p className="creategame-btn-error">
                Error: llene el formulario correctamente
              </p>
            ) : (
              error === false && (
                <p className="creategame-btn-good">
                  El juego fue creado con éxito
                </p>
              )
            )}
            {error === null || error === true ? (
              <button onClick={validateForm}>CREAR</button>
            ) : (
              error === false && (
                <button type="submit" onClick={() => {window.location.reload()}}>CREAR NUEVO JUEGO</button>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}

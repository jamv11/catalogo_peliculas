import React, { useState } from "react";

export const Buscador = ({ listadoState, setListadoState }) => {
  const [busquedaState, setBusquedaState] = useState("");

  const buscarPelicula = (e) => {
    const target = e.target.value;
    let peliculas = JSON.parse(localStorage.getItem("peliculas"));

    setBusquedaState(target);

    let peliculaEconntrada = listadoState.filter((pelicula) => {
      return pelicula.titulo
        .toLowerCase()
        .includes(busquedaState.toLocaleLowerCase());
    });
    console.log(busquedaState.length);
    if (busquedaState.length <= 1) {
      peliculaEconntrada = peliculas;
    }
    setListadoState(peliculaEconntrada);
  };

  return (
    <>
      <div className=" p-4 rounded-xl box-border bg-white hover:bg-green-100 shadow-md hover:shadow-teal-400 hover:shadow-lg transition-all duration-600">
        <h3 className="text-shadow-lg/10 text-lg ">Buscador</h3>

        <form>
          <input
            className="block my-0 mx-auto mt-2 mb-2 p-4 rounded-md bg-teal-900 focus:bg-teal-600 focus:shadow-teal-400 focus:shadow-lg focus:ring-2 inset-ring-teal-700 inset-ring-2 text-white w-5/6 opacity-100 outline-none border-transparent transition-all duration-600 placeholder-white"
            type="text"
            id="search_field"
            autoComplete="off"
            onChange={buscarPelicula}
            placeholder="Escribe"
          />
        </form>
      </div>
    </>
  );
};

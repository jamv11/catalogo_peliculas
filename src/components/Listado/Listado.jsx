import React, { useEffect, useState } from "react";
import { Editar } from "../Editar/Editar";

export const Listado = ({ listadoState, setListadoState }) => {
  const [editarState, setEditarState] = useState(0);

  useEffect(() => {
    optenerPeliculas();
  }, []);

  const optenerPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("peliculas"));
    setListadoState(peliculas);
    return peliculas;
  };
  const eliminarPelicula = (id) => {
    let peliculaGuardada = optenerPeliculas();
    const arregloNuevo = peliculaGuardada.filter(
      (pelicula) => pelicula.id !== parseInt(id),
    );
    setListadoState(arregloNuevo);
    localStorage.setItem("peliculas", JSON.stringify(arregloNuevo));
  };

  return (
    <div className="bg-black/70 w-full h-full flex flex-row flex-wrap justify-start items-start grow">
      {listadoState != null ? (
        listadoState.map((pelicula) => {
          return (
            <article
              key={pelicula.id}
              className="grow opacity-100 flex flex-col justify-center items-center rounded-lg shadow-xl/60 m-5 px-10 py-25 bg-gradient-to-r from-emerald-500 from-30% via-greem-500 via-10% to-emerald-700 to-100% opacity-[.90] hover:shadow-teal-400 hover:shadow-xl transition-all duration-300"
            >
              <h3 className="title text-5xl text-yellow-500 drop-shadow-lg drop-shadow-yellow-300/60 font-bold break-all px-10">
                {pelicula.titulo}
              </h3>
              <p className="mt-15 text-xl text-cyan-200 drop-shadow-lg drop-shadow-cyan-300/50 break-all px-10">
                {pelicula.descripcion}
              </p>
              <div className="w-100 mt-10">
                <button
                  className="bg-indigo-800 text-white hover:bg-indigo-500 w-1/3 border-0 outline-0 p-3 rounded-md mt-4 mr-10 capitalize cursor-pointer transition-all duration-600 hover:shadow-indigo-500/50 hover:shadow-xl hover:ring-2"
                  onClick={() => setEditarState(pelicula.id)}
                >
                  Editar
                </button>
                <button
                  className="bg-rose-800 text-white hover:bg-red-500 w-1/3 border-0 outline-0 p-3 rounded-md mt-4 capitalize cursor-pointer transition-all duration-600 hover:shadow-red-500/50 hover:shadow-xl hover:ring-2"
                  onClick={() => eliminarPelicula(pelicula.id)}
                >
                  Borrar
                </button>
              </div>
              {editarState === pelicula.id && (
                <Editar
                  pelicula={pelicula}
                  optenerPeliculas={optenerPeliculas}
                  setEditarState={setEditarState}
                  setListadoState={setListadoState}
                />
              )}
            </article>
          );
        })
      ) : (
        <h2 className="text-white">** Agregar Pelicula **</h2>
      )}
    </div>
  );
};

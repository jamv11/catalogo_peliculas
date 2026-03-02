import React, { useState } from "react";
import { GuardarPelicula } from "../../helpers/GuardarPelicula";

export const FormularioCrear = ({ setListadoState }) => {
  const [msjErrState, setMsjErrState] = useState("");
  const [peliculaState, setPeliculaState] = useState({
    titulo: "",
    descripcion: "",
  });
  const { titulo, descripcion } = peliculaState;

  const datosForm = (e) => {
    e.preventDefault();

    let target = e.target;
    let titulo = target.titulo.value;
    let descripcion = target.descripcion.value;
    let pelicula = {
      id: new Date().getTime(),
      titulo,
      descripcion,
    };

    if (titulo !== "" && descripcion !== "") {
      setPeliculaState(pelicula);
      setListadoState((items) => {
        return [...items, pelicula];
      });
      setMsjErrState("!Se ha creado una pelicula!");
      GuardarPelicula(pelicula);
    } else {
      setMsjErrState("!Debe llenar todos los campos!");
    }

    console.log(titulo + " " + descripcion);
  };

  return (
    <>
      <div className="p-4 mt-8 h-90 rounded-xl box-border bg-white shadow-md hover:bg-emerald-100 shadow-md hover:shadow-teal-400 hover:shadow-lg transition-all duration-600">
        <h3 className="title my-5 text-shadow-lg/10 text-lg">
          Añadir Pelicula
        </h3>

        <form className="mb-5" onSubmit={datosForm}>
          <input
            className="block my-0 mx-auto mt-2 p-4 rounded-md bg-slate-200 text-gray-800 w-5/6 opacity-100 outline-none border-transparent placeholder-gray-700  focus:placeholder-white focus:bg-emerald-400 focus:shadow-emerald-400 focus:shadow-lg focus:ring-2 focus:ring-white focus:text-white inset-ring-sky-300/20 inset-ring-2  transition-all duration-600"
            type="text"
            id="titulo"
            name="titulo"
            placeholder="Titulo"
          />
          <textarea
            className="block my-0 mx-auto mt-4 p-4 rounded-md bg-slate-200 text-gray-800 w-5/6 opacity-100 outline-none border-transparent placeholder-gray-700 focus:placeholder-white focus:bg-emerald-400 focus:shadow-emerald-400 focus:shadow-lg focus:ring-2 focus:ring-white focus:text-white inset-ring-sky-300/20 inset-ring-2  transition-all duration-600"
            id="descripcion"
            name="descripcion"
            placeholder="Descripción"
          ></textarea>
          <input
            className="block my-0 mx-auto bg-emerald-800 text-white hover:bg-emerald-500 w-1/3 border-0 outline-0 p-3 rounded-md mt-4 capitalize cursor-pointer transition-all duration-600 hover:shadow-emerald-500/50 hover:shadow-xl hover:ring-2"
            type="submit"
            id="save"
            value="Guardar"
          />
        </form>
        {titulo && descripcion ? <p>{msjErrState}</p> : <p>{msjErrState}</p>}
      </div>
    </>
  );
};

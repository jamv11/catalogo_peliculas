import React from 'react'

export const Editar = ({pelicula,optenerPeliculas,setEditarState,setListadoState}) => {
    const titulo = "Editar Película";
    const guardarEdicion = (e,id) =>{
      e.preventDefault();
      
      const target = e.target;
      const peliculasGuardadas = optenerPeliculas();
      
      //Consigue el indice correspondiente en el local Storage
      const indice = peliculasGuardadas.findIndex(elemento => elemento.id === id);
     
      const peliculaActualizada ={
        id,
        titulo: target.titulo.value,
        descripcion: target.descripcion.value
      }
      
      //Actualiza el array traido desde local Storage
      peliculasGuardadas[indice] = peliculaActualizada;

      //Guarda el nuevo array en Local Storage
      localStorage.setItem("peliculas",JSON.stringify(peliculasGuardadas));

      //Actualiza estado del Listado
      setListadoState(peliculasGuardadas);
      setEditarState(0);
    

    }

  return (
    <div className="bg-cyan-700/50 rounded-2xl p-10 mt-10 flex flex-col justify-center items-center w-full transition-all duration-300 hover:shadow-green-400 hover:shadow-xl hover:ring-green-400 hover:ring-1">
        <h3 className=" text-white text-xl">{titulo}</h3>
        <form onSubmit={ e => guardarEdicion(e, pelicula.id)} className="flex flex-col justify-center mt-5 w-full" action="">
            <input type="text" className="p-4 rounded-md box-border bg-white shadow-md text-gray-600 focus:outline-none focus:placeholder-white focus:bg-emerald-400 focus:shadow-emerald-400 focus:shadow-lg focus:ring-2 focus:ring-white focus:text-white transition-all duration-600" name="titulo" defaultValue={pelicula.titulo} />
            <textarea name="descripcion" defaultValue={pelicula.descripcion} className="p-4 rounded-md box-border bg-white shadow-md text-gray-600 mt-4 focus:placeholder-white focus:bg-emerald-400 focus:shadow-emerald-400 focus:shadow-lg focus:ring-2 focus:ring-white focus:text-white focus:outline-none transition-all duration-600"></textarea>
            <input type="submit" className="bg-amber-800 mx-auto hover:bg-amber-600 mt-5 w-50 p-2 rounded-md cursor-pointer focus:outline-none focus:ring-0 text-white transition-all duration-600 hover:shadow-amber-500/50 hover:shadow-xl hover:ring-2" value="Actualizar" />
        </form>
    </div>
  )
}

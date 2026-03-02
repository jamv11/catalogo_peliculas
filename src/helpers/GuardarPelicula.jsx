 export const GuardarPelicula = pelicula =>{
    
    //Conseguir los elementos que ya tenemos en LocalStorage
    let items = JSON.parse(localStorage.getItem("peliculas"));

    //Comprobar si es un array
    if(Array.isArray(items)){
      items.push(pelicula);
      
    }else{
      items = [pelicula];
    }
    
    //Guardar en el localstorage
    localStorage.setItem('peliculas',JSON.stringify(items));

    return pelicula;

  }
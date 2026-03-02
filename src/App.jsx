import { useState } from "react";
import logoHoja from "./assets/logo_hoja.svg";
import { BarraMenu } from "./components/BarraMenu/BarraMenu";
import { Buscador } from "./components/Buscador/Buscador";
import { FormularioCrear } from "./components/FormularioCrear/FormularioCrear";
import { Listado } from "./components/Listado/Listado";

function App() {
  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="font-sans text-center p-0 m-0 font-medium bg-[url(./assets/hojas_selva.jpg)]  bg-cover bg-center bg-no-repeat min-w-250 h-lvh">
      <div className="grid grid-cols-4">
        {/*Cabecera*/}
        <header className="col-span-4 bg-green-900/95 text-left italic flex justify-left items-center">
          <div className="">
            <img
              className="w-20 h-20 ml-10 my-5"
              src={logoHoja}
              alt="logo_hoja"
            />
          </div>
          <h1 className="ml-5 text-white text-5xl text-shadow-lg/30">
            Selva Movies
          </h1>
        </header>

        {/*Barra de navegación*/}

        <nav className="col-span-4 flex items-center justify-center bg-linear-to-r/srgb from-emerald-700 to-teal-400 border-b-2 border-green-600">
          <BarraMenu />
        </nav>

        <div className="col-span-4 flex flex-row">
          {/*Barra lateral*/}
          <aside className="bg-teal-700 flex flex-col p-8 border-r-1 border-slate-300 min-w-100">
            <Buscador
              listadoState={listadoState}
              setListadoState={setListadoState}
            />
            <FormularioCrear setListadoState={setListadoState} />
          </aside>

          {/*Contenido principal*/}
          <section className="flex flex-row flex-wrap justify-start items-start grow bg-[url(./assets/hojas_selva.jpg)]">
            {/*aqui van las peliculas*/}
            <Listado
              listadoState={listadoState}
              setListadoState={setListadoState}
            />
          </section>
        </div>

        {/*Pie de página*/}
        <footer className="col-span-4 bg-emerald-900 text-stone-500 border-t-1 border-emerald-400 text-right leading-20 pr-10 py-10 h-40">
          <span>Un proyecto de </span>
          <a
            className="text-emerald-500 text-shadow-lg/10 hover:text-emerald-300 transition-all duration-600"
            href="https://jamv11.github.io/ing-javier-moncada-web/"
            target="_blank"
          >
            &copy; Javier Moncada
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

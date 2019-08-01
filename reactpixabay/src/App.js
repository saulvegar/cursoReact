import React, { useState, useEffect } from 'react';
import Buscador from './components/Buscador';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);
  const [paginaActual, guardarPaginaActual] = useState(1);
  const [totalPaginas, guardarTotalPaginas] = useState(1);

  useEffect(() => {

    if(busqueda === '') return;

    const consultarApi = async () => {
      const imagenesPorPagina = 30;
      const key = '';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}&page=${paginaActual}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarImagenes(resultado.hits);
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina);
      guardarTotalPaginas(calcularTotalPaginas);

      //mover la pantalla hacia la parte superior
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior: 'smooth', block: 'end'}); //nueva API de javascript

    }

    consultarApi();
  }, [busqueda, paginaActual]);

  const paginaAnterior = () => {
    let nuevaPaginaActual = paginaActual - 1;
    guardarPaginaActual(nuevaPaginaActual);
  }

  const paginaSiguiente = () => {
    let nuevaPaginaActual = paginaActual + 1;
    guardarPaginaActual(nuevaPaginaActual);
  }

  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Buscador guardarBusqueda={guardarBusqueda} />
      </div>
      <div className="row justify-content-center">
        <ListadoImagenes imagenes={imagenes} />
        { (paginaActual === 1) ? null : (
          <button type="button" onClick={paginaAnterior} className="btn btn-info mr-1">Anterior &laquo;</button>
        )}
        { (paginaActual === totalPaginas) ? null : (
          <button type="button" onClick={paginaSiguiente} className="btn btn-info">Siguiente &raquo;</button>
        )}
      </div>
    </div>
  );
}

export default App;

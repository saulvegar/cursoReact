import React, { useState, useEffect, Fragment } from 'react';
import Formulario from './componentes/Formulario';
import Cancion from './componentes/Cancion';
import Informacion from './componentes/Informacion';
import axios from 'axios';

function App() {
  
  // Utilizar useState con 3 states
  const [artista, agregarArtista] = useState('');
  const [letra, agregarLetra] = useState([]);
  const [info, agregarInfo] = useState({});

  const consultarAPILetra = async (busqueda) => {
    const {artista, cancion} = busqueda;
    const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;

    const resultado = await axios(url);
    agregarArtista(artista);
    agregarLetra(resultado.data.lyrics);
  }

  const consultarAPIInfo = async () => {
    if(artista) {
      const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=coldplay`;
      const resultado = await axios(url);
      agregarInfo(resultado.data.artists[0]);
    }
  }

  useEffect(() => {
    consultarAPIInfo();
  }, [artista])

  return (
    <Fragment>
      <Formulario
        consultarAPILetra={consultarAPILetra}
      />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Informacion infor={info} />
          </div>
          <div className="col-md-6">
            <Cancion
              letra={letra}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default App;
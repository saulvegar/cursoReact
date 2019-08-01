import React, { useState } from 'react';
import Error from './Error';

function Buscador({guardarBusqueda}) {

    const [terminoBusqueda, guardarTerminoBusqueda] = useState('');
    const [error, guardarError] = useState(false);

    const buscarImagen = e => {
        e.preventDefault();

        if(terminoBusqueda === '') {
            guardarError(true);
            return;
        }

        guardarError(false);
        guardarBusqueda(terminoBusqueda);
    }

    return (
        <form onSubmit={buscarImagen}>
            <div className="row">
                <div className="form group col-md-8">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Busca una imagen, ejemplo: Futbol o Café"
                        onChange={e => guardarTerminoBusqueda(e.target.value)}
                    />
                </div>
                <div className="form group col-md-8">
                    <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar" />
                </div>
            </div>
            { (error) ? <Error mensaje="Agregar un término de búsqueda" />: null}
        </form>
    )
}

export default Buscador;
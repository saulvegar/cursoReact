import React, { useState } from 'react';
import shorid from 'shortid';
import Error from './Error';

function Formulario(props) {

    const { guardarGasto, guardarCrearGasto } = props;

    const [nombreGasto, guardarNombreGasto] = useState('');
    const [cantidadGasto, guardarCantidadGasto] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        if(cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === '') {
            guardarError(true);
            return;
        }

        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        }

        guardarError(false);
        guardarGasto(gasto);
        guardarCrearGasto(true);
        guardarNombreGasto('');
        guardarCantidadGasto('');
    }

    return(
        <form onSubmit={agregarGasto}>
            <h2>Agrega tus Gastos Aquí</h2>
            {
                error ? <Error mensaje="Ambos campos son obligatorios o Prespuesto incorrecto" /> : null
            }
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-ful-width"
                    placeholder="Ej. Transporte"
                    onChange={e => guardarNombreGasto(e.target.value)}
                    value={nombreGasto}
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-with"
                    placeholder="Ej. 300"
                    onChange={e => guardarNombreGasto(parseInt(e.target.value, 10))}
                    value={cantidadGasto}
                />
            </div>
            <input type="submit" className="button-primary w-full-width" value="Agregar Gasto" />
        </form>
    )
}

export default Formulario;
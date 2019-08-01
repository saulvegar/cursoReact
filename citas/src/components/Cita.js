import React, { useState } from 'react';

function Cita({ cita, index, eliminarCita }) {

    console.log(cita);

    return (
        <div className="cita">
            <p>Mascota: <span>{cita.mascota}</span></p>
            <p>Dueño: <span>{cita.propietario}</span></p>
            <p>Fecha: <span>{cita.fecha}</span></p>
            <p>Hora: <span>{cita.hora}</span></p>
            <p>Sintomas: <span>{cita.sintomas}</span></p>
            <button type="button" className="button eliminar u-full-width" onClick={() => eliminarCita(index)}>Eliminar X</button>
        </div>
    )
}

export default Cita;
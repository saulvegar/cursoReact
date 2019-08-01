import React, { useState, useEffect, Fragment } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
  // useState retorna 1 funciones
  // El state actual = this.state;
  // Funcion que actualiza el state this.setState();

  let citasIniciales = JSON.parse(localStorage.getItem('citas'));

  if(!citasIniciales) {
    citasIniciales = [];
  }

  const [citas, guardarCitas] = useState(citasIniciales);

  // Agregar las nuevas citas al state
  const crearCita = cita => {
    // Tomar copia del state y agregar el nuevo cliente
    const nuevasCitas = [...citas, cita];
    guardarCitas(nuevasCitas);
  }

  const eliminarCita = index => {
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    guardarCitas(nuevasCitas);
  }

  useEffect(() => {
    let citasIniciales = JSON.parse(localStorage.getItem('citas'));

    if(citasIniciales) {
      localStorage.setItem('citas', JSON.stringify(citas));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [citas])

  const titulo = Object.keys(citas).length === 0 ? 'No hay citas' : 'Administrar las citas';

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {
              citas.map((cita, index) => (
                <Cita
                  key={index}
                  index={index}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              ))
            }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

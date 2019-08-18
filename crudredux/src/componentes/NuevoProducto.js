import React, { useState } from 'react'

const NuevoProducto = () => {

  // state
  const [nombre, guardarNombre] = useState('');
  const [precio, guardarPrecio] = useState('');

  const submitNuevoProducto = e => {
    e.preventDefault();

    // validar el formulario
    if (nombre.trim() === '' || precio.trim === '') {
      return;
    }

    // Si pasa la validación

    // crear el nuevo producto

    // redireccionar
  }

  return (
    <div className="row justify-content-center mt-5">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold ">Agregar Nuevo Libro</h2>
            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label>Nombre Libro</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Libro"
                  value={nombre}
                  onChange={e => guardarNombre(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Precio Libro</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Precio Libro"
                  value={precio}
                  onChange={e => guardarPrecio(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100">Agregar</button>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}

export default NuevoProducto;
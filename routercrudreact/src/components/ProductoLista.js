import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

function ProductoLista({producto, guardarRecargarProductos}) {

    const eliminarProducto = id => {
        Swal.fire({
            title: '¿Estas Seguro?',
            text: 'Un Platillo eliminado no se puede recuperar',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, Eliminar',
            cancelButtonText: 'Cancelar'
        }).then(async result => {
            if(result.value) {

                const url = `http://localhost:4000/restaurant/${id}`;
                const resultado = await axios.delete(url);

                try {
                    if(resultado.status === 200) {
                        Swal.fire(
                            'Eliminado!',
                            'El Producto se ha eliminado',
                            'success'
                        )

                        guardarRecargarProductos(true);
                    }
                } catch (error) {
                    console.log(error);
                    Swal.fire({
                        type: 'error',
                        title: 'Error',
                        text: 'Hubo un error, vuelve a intentarlo'
                    });
                }
            }
        })
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-center" data-categoria={producto.categoria}>
            <p>
                {producto.nombrePlatillo} {' '}
                <span className="font-weight-bold">$ {producto.precioPlatillo}</span>
            </p>
            <div>
                <Link to={`/productos/editar(${producto.id})`} className="btn btn-success mr-2">Editar</Link>
                <button type="button" onClick={() => eliminarProducto(producto.id)} className="btn btn-danger">Eliminar &times;</button>
            </div>
        </li>
    )
}

export default ProductoLista;
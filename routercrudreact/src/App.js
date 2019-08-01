import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AgregarProducto from './components/AgregarProducto';
import Productos from './components/Productos';
import EditarProducto from './components/EditarProducto';
import Producto from './components/Producto';
import Header from './components/Header';
import axios from 'axios';

function App() {

  const [productos, guardarProductos] = useState([]);
  const [recargarProductos, guardarRecargarProductos] = useState(true);

  useEffect(() => {
    if(recargarProductos) {
      const consultarApi = async () => {
        const resultado = await axios.get('http://localhost:4000/restaurant');
      
        guardarProductos(resultado.data);
      }
  
      consultarApi();

      guardarRecargarProductos(false);
    }
  }, [recargarProductos])

  return (
    <Router>
      <Header />
      <main className="container mt-5">
        <Switch>
          <Route exac path="/productos"
                 render={() => (
                  <Productos
                    productos={productos}
                    guardarRecargarProductos={guardarRecargarProductos}
                  />
                )} 
          />
          <Route exac path="/nuevo-producto"
                 render={() => (
                  <AgregarProducto guardarRecargarProductos={guardarRecargarProductos} />
                 )}
          />
          <Route exac path="/productos/:id" component={Producto} />
          <Route exac path="/productos/editar/:id"
                 render={props => {
                   // tomar el ID del producto
                  const idProducto = parseInt(props.match.params.id);
                  
                  // el producto que se pasa al state
                  const producto = productos.filter(producto => producto.id === idProducto);

                  return (
                    <EditarProducto
                      producto={producto[0]}
                      guardarRecargarProductos={guardarRecargarProductos}
                    />
                  )
                 }} 
          />
        </Switch>
      </main>
      <p className="mt-4 p-2 text-center">Todos los derechos reservados</p>
    </Router>
  );
}

export default App;

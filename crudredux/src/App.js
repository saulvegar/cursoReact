import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Componentes
import Header from './componentes/Header';
import NuevoProducto from './componentes/NuevoProducto';
import Productos from './componentes/Productos';
import EditarProducto from './componentes/EditarProducto';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <div className="container">
          <Switch>
            <Route exac path="/" component={Productos} />
            <Route exac path="/productos/nuevo" component={NuevoProducto} />
            <Route exac path="/productos/editar/:id" component={EditarProducto} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;

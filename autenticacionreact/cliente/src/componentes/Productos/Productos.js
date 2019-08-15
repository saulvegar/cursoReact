import React, { Component, Fragment } from "react";
import Producto from "../Producto/Producto";
import Buscador from "../Buscador/Buscador";
import "./Productos.css";
import axios from "axios";

class Productos extends Component {
  state = {
    productos: [],
    terminoBusqueda: ""
  };

  componentWillMount() {
    this.queryAPI();
  }

  queryAPI = () => {
    const { getAccessToken } = this.props.auth;
    const headers = {
      Authorization: `Bearer ${getAccessToken()}`
    };

    const url = "http://localhost:5000/productos";
    return axios
      .get(url, headers)
      .then(respuesta => this.setState({ productos: respuesta.data }));
  };

  login = () => {
    this.props.auth.login();
  };

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div className="productos">
        {isAuthenticated() && (
          <Fragment>
            <h2>Nuestros Productos</h2>
            <Buscador busqueda={this.props.busquedaProducto} />
            <ul className="lista-productos">
              {Object.keys(this.state.productos).map(producto => (
                <Producto
                  informacion={this.state.productos[producto]}
                  key={producto}
                />
              ))}
            </ul>
          </Fragment>
        )}
        {!isAuthenticated() && (
          <div className="contenedor-boton">
            <p>Para ver el contenido debes estar logueado:</p>
            <a onClick={this.login} className="boton">
              Iniciar Sesión
            </a>
          </div>
        )}
      </div>
    );
  }
}

export default Productos;

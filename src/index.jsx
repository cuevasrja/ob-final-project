// * Import de React
import React from "react";
import ReactDOM from "react-dom";

//TODO: Import redux
// import { Provider } from "react-redux";

// * Importar estilos
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/index.scss';

import App from "./components/App";

//TODO: Si trabajamos con Redux, crear el store y aplicar el mildware de redux saga

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
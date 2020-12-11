import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Importar UI Kit
import UIkit from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import "uikit/dist/css/uikit.min.css";

// Importamos configuración de las rutas
import {BrowserRouter} from "react-router-dom"

// Usamos UIkit para los icons
UIkit.use(Icons)

// Declaramos el withrouter para usar las rutas

// esto es jsx
const WithRouter = ()=>(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)

ReactDOM.render(
    <WithRouter />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


/**
 * Inicialização padrão do REACT a partir do "npx create-react-app nomeDoProjeto"
 */
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

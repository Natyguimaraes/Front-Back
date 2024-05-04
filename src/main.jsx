import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import '../public/css/index.css'; // Caminho relativo para o arquivo CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

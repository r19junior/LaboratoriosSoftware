
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const mountApp = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("No se encontró el elemento root en este archivo");
    return;
  }

  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    console.error("Error al renderizar la aplicación en el sistema:", error);
    rootElement.innerHTML = `
      <div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;font-family:sans-serif;text-align:center;padding:20px;">
        <h1 style="color:#DE0A0A;margin-bottom:10px;">Error de Carga</h1>
        <p style="color:#666;">Hubo un problema al iniciar la aplicación. Por favor, recarga la página.</p>
        <pre style="background:#eee;padding:10px;border-radius:5px;font-size:12px;margin-top:20px;max-width:100%;overflow:auto;">${error instanceof Error ? error.message : String(error)}</pre>
      </div>
    `;
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mountApp);
} else {
  mountApp();
}

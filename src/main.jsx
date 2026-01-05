import React from 'react';
import ReactDOM from 'react-dom/client'
import './css/index.css';
import App from './components/App';

// Index file to render react in root div
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
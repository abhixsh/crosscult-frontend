import React from 'react';
import ReactDOM from 'react-dom/client'; // Correct import for React 18
import { BrowserRouter } from 'react-router-dom';
import App from './App'; // Ensure App is correctly exported from './App'


const root = ReactDOM.createRoot(document.getElementById("root")); // Use createRoot from react-dom/client

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

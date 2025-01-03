import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tailwindcss/tailwind.css';
import App from './app';

// this file is the entry point for the app
// it renders the App component to the root element
// in the public/index.html file

const rootElement = document.getElementById('root');
console.log('Root element:', rootElement);

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
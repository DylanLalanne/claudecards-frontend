import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "../styles/reset.css";
import "../styles/variables.css";
import "../styles/globals.css";
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

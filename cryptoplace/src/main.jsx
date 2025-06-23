import React from 'react'
//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'; // ✅ CORRECT
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import CoinContextProvider from './context/CoinContext.jsx'

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CoinContextProvider>
        <App />
      </CoinContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

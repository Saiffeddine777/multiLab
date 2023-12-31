import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {Provider} from "react-redux"
import store from './app/store.ts'
import {BrowserRouter} from "react-router-dom"
import "./styles.css"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
   <BrowserRouter>
     <Provider store = {store}>
       <App />
     </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)

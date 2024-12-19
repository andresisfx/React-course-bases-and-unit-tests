import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {FirstComponent} from './FirstComponent.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FirstComponent number={1}/>
  </StrictMode>,
)

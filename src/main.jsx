import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar.jsx'
import Page from './components/Page.jsx'
import Information from './components/Information.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Page/>
    <Information/>
  </StrictMode>,
)

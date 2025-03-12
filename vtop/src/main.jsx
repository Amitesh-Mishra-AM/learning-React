import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import LandingPage from './components/Block_page.jsx'
import Block_page from './components/Block_page.jsx'
import Hostel_page from './components/Hostel_page.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Block_page/> */}
    <Hostel_page/>
  </StrictMode>,
)

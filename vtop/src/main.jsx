import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Block_page from './components/Block_page.jsx';
import Hostel_page from './components/Hostel_page.jsx';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={< Block_page/>} />
        <Route path="/Hostel_page" element={<Hostel_page />} />
      </Routes>
    </Router>
  </StrictMode>,
)

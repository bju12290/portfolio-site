import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Resume from './Components/Resume/Resume.tsx'
import { BrowserRouter as Router, Routes,  Route } from 'react-router-dom'
import './index.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/portfolio-site" element={<App />}/>
        <Route path="portfolio-site/resume" element={<Resume />}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './index.css';
import App from './App';
import AboutMe from './components/pages/about/AboutMe';
import TechStack from './components/pages/stack/TechStack';
import Projects from './components/pages/projects/Projects';
import Contact from './components/pages/contact/Contact';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/about' element={<AboutMe />} />
        <Route path='/stack' element={<TechStack />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


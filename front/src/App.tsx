import React from 'react';

import './App.css';
import Home from './components/pages/home/Home';


import Navbar from './components/Navbar';

function App() {
  return (
    <main className='h-screen w-screen bg-primary flex'>
      <Navbar />
      <Home />
    </main>
  );
}

export default App;

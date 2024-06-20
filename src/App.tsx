/* import { useState } from 'react' */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SpeedInsights } from '@vercel/speed-insights/react';

import NavBar from './Components/NavBar';
import Home from './Views/Home';

import './App.css'
import { SectionProvider } from './Components/Utilities/SectionContext';

function App() {
  

  return (
    <>
    
    <BrowserRouter>
    <SectionProvider>
    <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </SectionProvider>
    </BrowserRouter>
    <SpeedInsights />
     
    </>
  )
}

export default App

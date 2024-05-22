import { useState } from 'react'
import './App.css'
import { AboutMe, Home, Projects, Contact } from "./pages";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className = "bg-background h-screen w-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

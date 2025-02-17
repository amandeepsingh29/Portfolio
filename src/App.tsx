import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import MatrixCursor from './components/Cursor/MatrixCursor';
import ParticleField from './components/Background/ParticleField';
import { initializeEasterEggs } from './utils/easterEggs';

// Initialize easter eggs
initializeEasterEggs();

export default function App() {
  return (
    <Router>
      <MatrixCursor />
      <ParticleField />
      <div className="min-h-screen bg-gray-800/90">
        <Navbar />
        <main className="container mx-auto px-4 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
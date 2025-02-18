import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';
import Home from './pages/Home';
import { initializeEasterEggs } from './utils/easterEggs';
import ParticleField from './components/Background/ParticleField';

// Lazy load non-critical components
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Contact = lazy(() => import('./pages/Contact'));
const MatrixCursor = lazy(() => import('./components/Cursor/MatrixCursor'));

// Initialize easter eggs
initializeEasterEggs();

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen bg-gray-800/90" />}>
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
      </Suspense>
    </Router>
  );
}
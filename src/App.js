import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { useState, useEffect } from 'react';
import Signup from './components/Signup';

function App() {
  return (
    <Router >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </Router>

  );
}

export default App;

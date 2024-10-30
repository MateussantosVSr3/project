import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Streaming from './Components/Streaming/Streaming';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/project" element={<Home />} />
        <Route path="/project/home" element={<Home />} />
        <Route path="/project/contact" element={<Contact />} />
        <Route path="/project/about" element={<About />} />
        <Route path="/project/streaming" element={<Streaming/>} />
        <Route path="/project/login" element={<Login/>} />
        <Route path="/project/register" element={<Register/>} />
      </Routes>
    </Router>
  );
};

export default App;

import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';
import About from './Components/About';
import Contact from './Components/Contact';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import React from 'react';

function App() {
  return (
  <BrowserRouter>
  <div className="App">
    <Header />
    <Routes>  
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
    </div>
  </BrowserRouter>
    
  );
}

export default App;

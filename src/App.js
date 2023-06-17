import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/HomePage'

function App() {
  return (
    <div className="App">
       <Routes>
         <Route path='/' element={<HomePage/>} />
       </Routes>
    </div>
  );
}

export default App;
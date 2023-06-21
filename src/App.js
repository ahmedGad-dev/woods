import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/HomePage'
import ProductsPage from './pages/ProductsPage';


function App() {
  return (
    <div className="App">
       <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='products' element={<ProductsPage/>} />
       </Routes>
    </div>
  );
}

export default App;

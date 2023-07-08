import React from 'react'
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './index.css';

import{
  HomePage,
  AboutPage,  
  SingleProductPage,
  CartPage,
  ProductsPage,
 // CheckoutPage,
 } from './pages/PagesIndex'


function App() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
       <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='about' element={<AboutPage/>} />
         <Route path='cart' element={<CartPage/>} />   
         <Route path='products' element={<ProductsPage/>} />   
         <Route path='products/:id' element={<SingleProductPage/>} />     
       </Routes>
       <Footer/>
    </div>    
  );
}

export default App;

import React from 'react'
import './App.css';
import {Route, Routes} from 'react-router-dom'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar';
import MuiNav from './materialUI/MuiNav'
import './index.css';

import{
  HomePage,
  AboutPage,  
  SingleProductPage,
  CartPage,
  ProductsPage,
  CheckoutPage,
 } from './pages/PagesIndex'


function App() {
  return (
    <div>
      <MuiNav/>
      <Sidebar/>
       <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='/about' element={<AboutPage/>} />
         <Route path='/cart' element={<CartPage/>} />   
         <Route path='/products' element={<ProductsPage/>} />  
         <Route path='/:id' element={<SingleProductPage/>} /> 
         <Route path='/checkout' element={<CheckoutPage/>}></Route>    
       </Routes>
       <Footer/>
    </div>    
  );
}

export default App;

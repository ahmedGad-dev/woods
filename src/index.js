import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import {CartProvider} from './context/cart_context';
import ScrollToTopHoc from './components/ScrollToTopHoc';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <HashRouter>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <ScrollToTopHoc/>
            <App />
          </CartProvider>    
        </FilterProvider>    
      </ProductsProvider>   
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
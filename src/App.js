import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import useLocalStorage from './hooks/useLocalStorage';
import useToggle from './hooks/useToggle';
import ProductPage from './components/ProductPage';
import FormStuff from './components/FormStuff';


function App() {
  return (
    <div>
    <h1>React Hooks</h1>
    
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/forms">forms</Link>
        </li>
      </ul>
    </nav>
    
    <Routes>
      <Route index element={<div>Home</div>} />
      <Route path="/products" element={<ProductPage/>} />
      <Route path="/forms" element={<FormStuff/>} /> 
      <Route path="*" element={<div>Route not found</div>} />
    </Routes>
  </div>
  );
}

export default App;

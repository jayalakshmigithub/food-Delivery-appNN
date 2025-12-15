import { useState ,useEffect} from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './components/Layout/Layout';
import Home from './Pages/Home';
import Categories from './pages/allCategories';
import Cart from './components/Cart/Cart';


function App() {
 

  return (
     <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/cart" element={<Cart />} />
          
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App
